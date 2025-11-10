import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import RenderCards from "../components/RenderCards";

function Actors() {
  const [actors, setActors]  = useState([])
  useEffect(()=>{
    async function handleFecth(){
      const r = await fetch(`http://localhost:4000/actors`)
      const data =  await r.json()
      setActors(data)
    }
    handleFecth()
  }, [])

  const mappedActors= actors.map(actor=>{
    return(
      <RenderCards
        key={actor.id}
        name={actor.name}
        list={actor.movies}
      />
    )
  })
  
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <h1>Actors Page</h1>
        {mappedActors}
      </main>
    </>
  );
};

export default Actors;
