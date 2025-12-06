function MovieCard({ movie }) {
  return (
    <div className="card">
      <img src={movie.poster} alt="" />
      <h3>{movie.title}</h3>
    </div>
  );
}

export default MovieCard;
