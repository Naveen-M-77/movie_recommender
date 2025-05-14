# Import necessary libraries
import numpy as np
import pandas as pd
from tensorflow import keras
import tensorflow as tf
from keras.utils import plot_model
from sklearn.model_selection import train_test_split

# Load the rating dataset and limit to the first 300,000 rows for efficiency
df = pd.read_csv('rating.csv')
df = df.iloc[:300000,:]

# Prepare the feature (X) and target (y) variables for the model
X = df[['userId', 'movieId']]  # Features: userId and movieId
y = df['rating']  # Target: rating given by user

# Split the dataset into training and test sets (80% training, 20% testing)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Create lists of unique users and movies to map user and movie IDs
users = df.userId.unique().tolist()  # Unique user IDs
movies = df.movieId.unique().tolist()  # Unique movie IDs

# Load the movie dataset (contains movie details such as title)
movies_df = pd.read_csv('movie.csv')

# Create dictionaries to encode and decode movie and user IDs for model use
movie2movie_encoded = {x: i for i, x in enumerate(movies)}  # Movie ID to encoded index
movie_encoded2movie = {i: x for i, x in enumerate(movies)}  # Encoded index to original Movie ID
user2user_encoded = {x: i for i, x in enumerate(users)}  # User ID to encoded index
user_encoded2user = {i: x for i, x in enumerate(users)}  # Encoded index to original User ID

# Function to load the trained model
def load_model():
    model = keras.models.load_model('model.h5')  # Load pre-trained model from file
    return model

# Function to get the top k ratings for a list of ratings
def get_top_ratings(ratings, k=10):
    top_ratings = ratings.argsort()[-k-1:]  # Get the indices of top k ratings
    top_ratings = [movie_encoded2movie.get([x][0]) for x in top_ratings]  # Convert indices to movie IDs
    return top_ratings

# Function to predict the top movie recommendations for a given user
def predict(user_id):
    user_id = np.uint64(user_id)

    # Validation to ensure user ID is within the acceptable range
    if user_id > len(df.userId.unique().tolist()):
        return 1  # Return error if user ID is out of range

    # Identify movies watched by the user and movies not yet watched
    watched_movs = df[df.userId == user_id].iloc[:, 1]  # Get movies watched by the user
    not_watched_movs = movies_df[~movies_df.movieId.isin(watched_movs.values)].movieId  # Get movies not watched by the user

    # Filter and encode the not-watched movies
    not_watched_movs = list(set(not_watched_movs).intersection(set(movie2movie_encoded.keys())))  # Remove movies not in the encoded list
    not_watched_movs = [[movie2movie_encoded.get(x)] for x in not_watched_movs]  # Encode movie IDs

    # Encode the user ID and prepare the input array for the model
    user_encoder = user2user_encoded.get(user_id)  # Get the encoded user ID
    user_movie_array = np.hstack(([[user_encoder]] * len(not_watched_movs), not_watched_movs))  # Prepare input array for the model

    # Load the model and predict ratings for the movies the user hasn't watched
    model = load_model()  # Load the pre-trained model
    ratings = model.predict([user_movie_array[:, 0], user_movie_array[:, 1]]).flatten()  # Predict ratings

    # Get the top 5 rated movies
    top_ratings = get_top_ratings(ratings, 5)

    # Fetch the movie titles for the top-rated movies
    top_movies = movies_df[movies_df.movieId.isin(top_ratings)]  # Get the movie details for the top rated movies
    movie_titles = [element.title for element in top_movies.itertuples()]  # Extract movie titles

    return movie_titles  # Return the list of recommended movie titles

# Function to get the top watched movies for a given user
def get_top_watched_movies(user_id):
    user_id = np.uint64(user_id)
    movies_df = pd.read_csv('movie.csv')  # Reload the movie dataset

    # Select the top 5 movies based on rating for the user
    top_watched_movies = df[df.userId == user_id].sort_values(by='rating', ascending=False).movieId.head(5)  # Get top 5 movies
    top_watched_movies = movies_df[movies_df.movieId.isin(top_watched_movies.values)]  # Get movie details for the top watched movies

    # Compile a list of titles for these top watched movies
    watched_movie_titles = [element.title for element in top_watched_movies.itertuples()]  # Extract movie titles

    return watched_movie_titles  # Return the list of top watched movie titles
