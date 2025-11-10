import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const [movie, setMovie] = useState({})
  const params = useParams()
  const movieId=params
  useEffect(()=>{
    fetch(`http://localhost:4000/movies/${encodeURIComponent(movieId.id)}`)
      .then(r=>r.json())
      .then(data=>setMovie(data))
      .catch(error=>console.error(error));
  }, [movieId])

  const renderList = Array.isArray(movie?.genres)
  ? movie.genres.map((genre, i) => <span key={i}>{genre}</span>)
  : null;

  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        {renderList}
      </main>
    </>
  );
};

export default Movie;
