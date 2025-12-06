import MovieCard from "./MovieCard";

function MovieList({ movies }) {
  return (
    <div className="movie-grid">
      {movies.map((m) => (
        <MovieCard key={m.id} movie={m} />
      ))}
    </div>
  );
}

export default MovieList;
