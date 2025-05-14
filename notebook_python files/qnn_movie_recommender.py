import numpy as np
import pandas as pd
from qiskit import Aer, execute
from qiskit.circuit import QuantumCircuit
from qiskit.aqua.algorithms import QNN
from qiskit.aqua import QuantumInstance
from qiskit.circuit.library import ZZFeatureMap, TwoLocal
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.metrics import accuracy_score

# Load the rating dataset and limit to the first 200,000 rows
df = pd.read_csv('rating.csv')
df = df.iloc[:300000,:]

# Prepare the feature (X) and target (y) variables
X = df[['userId', 'movieId']]
y = df['rating']

# Encode user and movie ids
user_encoder = LabelEncoder()
movie_encoder = LabelEncoder()
X['userId'] = user_encoder.fit_transform(X['userId'])
X['movieId'] = movie_encoder.fit_transform(X['movieId'])

# Convert ratings to binary (for simplicity, you can use 'high' and 'low' ratings)
y = np.where(y > y.median(), 1, 0)

# Split the dataset into training and test sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Define the Quantum Neural Network (QNN) architecture
def create_qnn():
    # Use ZZFeatureMap for encoding the input data
    feature_map = ZZFeatureMap(feature_dimension=2, reps=2, entanglement='full')
    
    # Define a quantum circuit for QNN
    ansatz = TwoLocal(num_qubits=2, rotation_blocks=['ry', 'rz'], entanglement_blocks='cz', reps=2)
    qnn = QNN(feature_map, ansatz, quantum_instance=Aer.get_backend('statevector_simulator'))
    
    return qnn

# Function to initialize and train the quantum model using QNN
def train_qnn_model(X_train, y_train):
    qnn = create_qnn()
    qnn.fit(X_train.values, y_train)
    return qnn

# Function to make predictions using the trained QNN model
def predict_qnn(qnn, X_test):
    return qnn.predict(X_test.values)

# Function to recommend top movies for a given user using quantum model
def predict_top_movies(user_id, qnn, k=5):
    # Prepare input data
    user_id = user_encoder.transform([user_id])
    
    # Make predictions for all movies for the given user
    watched_movies = df[df.userId == user_id].iloc[:,1].tolist()
    not_watched_movs = [movie for movie in range(len(movies)) if movie not in watched_movies]
    test_data = np.array([[user_id, movie] for movie in not_watched_movs])
    
    # Get quantum predictions
    predictions = predict_qnn(qnn, test_data)
    
    # Get top k movies with the highest predicted ratings
    top_movies = np.argsort(predictions)[-k:]
    return movie_encoder.inverse_transform(top_movies)

# Load the movie dataset
movies_df = pd.read_csv('movie.csv')
movies = movies_df['movieId'].unique().tolist()

# Train the quantum model on the data
qnn = train_qnn_model(X_train, y_train)

# Predict top movies for a specific user
user_id = 1  # example user_id
top_movie_ids = predict_top_movies(user_id, qnn, k=5)

# Fetch movie titles for the recommended movies
top_movie_titles = movies_df[movies_df['movieId'].isin(top_movie_ids)]['title'].tolist()

print("Top recommended movies for user {}:".format(user_id))
for movie in top_movie_titles:
    print(movie)
