import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {
  const [movies, setMovies] = useState([])
  useEffect(()=>{
    async function handleFetch(){
      const r = await fetch (`http://localhost:4000/movies`)
      const data = await r.json()
      setMovies(data)
    }
    handleFetch()
  }, [])
  const renderMovies=movies.map(movie=>{
    return(
      <MovieCard
        title={movie.title}
        id={movie.id}
        key={movie.id}
      />
    )
  })
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <h1>Home Page</h1>
        {renderMovies}
      </main>
    </>
  );
};

export default Home;
