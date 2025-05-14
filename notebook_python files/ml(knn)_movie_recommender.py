import pandas as pd
import numpy as np

# Load the movies dataset (contains movie details)
movies = pd.read_csv('movie.csv')

# Load the ratings dataset (contains user ratings for movies)
rating = pd.read_csv('rating.csv')

# Merge the two datasets on 'movieId' to combine movie information with ratings
movies_merged = movies.merge(rating, on='movieId')

# Calculate the average rating for each movie and sort them in descending order
movies_average_rating = movies_merged.groupby('title')['rating'].mean().sort_values(ascending=False).reset_index().rename(columns={'rating':'Average Rating'})

# Count the number of ratings for each movie and sort them in descending order
movies_rating_count = movies_merged.groupby('title')['rating'].count().sort_values(ascending=False).reset_index().rename(columns={'rating':'Rating Count'}) 

# Merge the count of ratings with the average rating for each movie
movies_rating_count_avg = movies_rating_count.merge(movies_average_rating, on='title')

# Count the number of ratings for each movie and sort them in ascending order
movies_rating_count2 = movies_merged.groupby('title')['rating'].count().sort_values(ascending=True).reset_index().rename(columns={'rating':'Rating Count'}) 

# Merge the ascending sorted count of ratings with the average ratings
movies_rating_count_avg2 = movies_rating_count2.merge(movies_average_rating, on='title')

# Merge the movies dataset with rating count to have the total number of ratings per movie
rating_with_RatingCount = movies_merged.merge(movies_rating_count, left_on = 'title', right_on = 'title', how = 'left')

# Print descriptive statistics of the rating count to understand the distribution
pd.set_option('display.float_format', lambda x: '%.3f' % x)
print(rating_with_RatingCount['Rating Count'].describe())

# Extract the movies with a sufficient number of ratings (popularity threshold)
popularity_threshold = 50
popular_movies = rating_with_RatingCount[rating_with_RatingCount['Rating Count'] >= popularity_threshold]

# Create a pivot table for the movie features where rows are movie titles, columns are userIds, and values are the ratings
movie_features = popular_movies.pivot_table(index='title', columns='userId', values='rating').fillna(0)

# Convert the pivot table into a sparse matrix for efficient computation
from scipy.sparse import csr_matrix
movie_features_matrix = csr_matrix(movie_features.values)

# Train a KNN model to find similar movies based on ratings
from sklearn.neighbors import NearestNeighbors
model_knn = NearestNeighbors(metric='cosine', algorithm='brute')  # Use cosine similarity to find similar movies
model_knn.fit(movie_features_matrix)

# Function to get recommendations for a given movie by its ID using KNN
def knn_predict(movie_id):
    # Convert the movie_id to an integer (ensure it’s a valid index)
    query_index = np.uint64(movie_id)
    print("Recommendation for movie id:", query_index)
    
    # Find the nearest neighbors (similar movies) to the given movie
    distances, indices = model_knn.kneighbors(movie_features.iloc[query_index, :].values.reshape(1, -1), n_neighbors=6)
    
    # Print the distances and indices of the nearest neighbors
    print("Distances:", distances)
    print("Indices:", indices)

    # Collect the movie titles for the recommendations
    out = []
    for i in range(0, len(distances.flatten())):
        if i == 0:
            # The first movie is the same as the queried movie
            out.append(movie_features.index[query_index]) 
        else:
            # Add the recommended movies based on nearest neighbors
            out.append(movie_features.index[indices.flatten()[i]])
    
    # Print the top 2 recommendations (the first movie is the same as the input movie)
    print(f"Out {out[0]}")
    print(f"Out {out[2]}")  # Second recommended movie (index 2)
    
    return out  # Return the list of recommended movies
