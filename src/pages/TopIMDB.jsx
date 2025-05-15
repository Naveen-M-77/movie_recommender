import { useEffect, useState } from "react";
import axios from "axios";

export default function TopIMDB() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=f734c23290b011b4d7e03c3726646d97&language=en-US&sort_by=vote_average.desc&vote_count.gte=1000`
      )
      .then((res) => setMovies(res.data.results.slice(0, 10)))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Top IMDB Picks</h1>
      <ol className="list-decimal pl-6 space-y-2">
        {movies.map((movie, idx) => (
          <li key={movie.id}>
            <span className="font-semibold">{movie.title}</span> — ⭐{" "}
            {movie.vote_average}
          </li>
        ))}
      </ol>
    </div>
  );
}
