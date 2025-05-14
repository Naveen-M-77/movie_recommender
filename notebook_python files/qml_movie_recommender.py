import numpy as np
import pandas as pd
from qiskit import Aer, execute
from qiskit.circuit import QuantumCircuit
from qiskit.aqua.algorithms import QSVM
from qiskit.aqua import QuantumInstance
from qiskit.circuit.library import ZZFeatureMap
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder

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

# Quantum circuit for the quantum model
def create_quantum_circuit():
    # Use the ZZFeatureMap for encoding data
    feature_map = ZZFeatureMap(feature_dimension=2, reps=2, entanglement='full')
    quantum_circuit = QuantumCircuit(feature_map.num_qubits)
    quantum_circuit.append(feature_map, range(feature_map.num_qubits))
    
    return quantum_circuit

# Function to initialize and train the quantum model
def train_quantum_model(X_train, y_train):
    # Define the quantum feature map and classifier (QSVM)
    feature_map = ZZFeatureMap(feature_dimension=2, reps=2, entanglement='full')
    quantum_instance = QuantumInstance(Aer.get_backend('statevector_simulator'))

    # Create the QSVM model
    qsvm = QSVM(feature_map, quantum_instance=quantum_instance)
    qsvm.fit(X_train, y_train)
    
    return qsvm

# Function to make predictions using the trained quantum model
def predict_quantum(qsvm, X_test):
    return qsvm.predict(X_test)

# Function to recommend top movies for a given user using quantum model
def predict_top_movies(user_id, qsvm, k=5):
    # Prepare input data
    user_id = user_encoder.transform([user_id])
    
    # Make predictions for all movies for the given user
    watched_movies = df[df.userId == user_id].iloc[:,1].tolist()
    not_watched_movs = [movie for movie in range(len(movies)) if movie not in watched_movies]
    test_data = np.array([[user_id, movie] for movie in not_watched_movs])
    
    # Get quantum predictions
    predictions = predict_quantum(qsvm, test_data)
    
    # Get top k movies with the highest predicted ratings
    top_movies = np.argsort(predictions)[-k:]
    return movie_encoder.inverse_transform(top_movies)

# Load the movie dataset
movies_df = pd.read_csv('movie.csv')
movies = movies_df['movieId'].unique().tolist()

# Train the quantum model on the data
qsvm = train_quantum_model(X_train, y_train)

# Predict top movies for a specific user
user_id = 1  # example user_id
top_movie_ids = predict_top_movies(user_id, qsvm, k=5)

# Fetch movie titles for the recommended movies
top_movie_titles = movies_df[movies_df['movieId'].isin(top_movie_ids)]['title'].tolist()

print("Top recommended movies for user {}:".format(user_id))
for movie in top_movie_titles:
    print(movie)
