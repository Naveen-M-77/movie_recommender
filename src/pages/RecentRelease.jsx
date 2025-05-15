import { useEffect, useState } from "react";
import axios from "axios";

export default function RecentRelease() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=f734c23290b011b4d7e03c3726646d97&language=en-US&page=1`
      )
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Recent Releases</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {movies.map((movie) => (
          <div key={movie.id} className="bg-white p-4 rounded shadow">
            <h2 className="font-semibold">{movie.title}</h2>
            <p className="text-sm text-gray-600">{movie.release_date}</p>
            <p className="mt-2 text-gray-700">
              {movie.overview.slice(0, 100)}...
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
