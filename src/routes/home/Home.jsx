import { useEffect, useState } from "react";
import Card from "../../components/card";
import pokeServices from "../../pokeServices";
import './style.css'

function Home() {
  const [pokes, setPokes]= useState([]);
  const [next, setNext] = useState([]);;
  const [previous, setPrevious] = useState([]);
  useEffect(getPoke,[])

  function getPoke(url){
      pokeServices.getPokemon(url)
      .then((res)=>{
        setPokes(res.results);
        setNext(res.next);
        setPrevious(res.previous);
      })
      .catch((err)=>{
        throw err;
      })
  }

  return (
    <>
    <header>
      <h1>PokeApi</h1>
      <form className="controls">
        <label htmlFor="search">
          Search: 
          <input type="text" id="search"/>
        </label>
        <button>Buscar</button>
      </form>
    </header>
    <main className="cards-conteiner">
      {pokes.map((poke)=>(<Card pokemon={poke} key={poke.name}/>))}
    </main>
    <footer>
      {previous && <button onClick={()=>{getPoke(previous)}}>Anterior</button>}
      {next && <button onClick={()=>{getPoke(next)}}>Siguiente</button>}
    </footer>
    </>
  );
}

export default Home;
