import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import RenderCards from "../components/RenderCards";

function Directors() {
  const [directors, setDirectors]=useState([])
  useEffect(()=>{
    async function handleFetch(){
      const r = await fetch(`http://localhost:4000/directors`)
      const data = await r.json()
      setDirectors(data)
    }
    handleFetch()
  }, [])

  const renderDirectors=directors.map(director=>{
    return(
      <RenderCards
      key={director.id}
      name={director.name}
      list={director.movies}
      />
    )
  })
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <h1>Directors Page</h1>
        {renderDirectors}
      </main>
    </>
  );
};

export default Directors;
