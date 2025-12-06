import React, { useState } from "react";
import MovieList from "./components/Movielist";
import movies from "./movies";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");

  const filteredMovies = movies.filter((m) =>
    m.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Mini Netflix Clone</h1>

      <input
        type="text"
        placeholder="Search movies..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
