import { useEffect, useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import Card from '../../components/card';
import pokeServices from '../../pokeServices';
import './style.css';

function Home() {
  const [pokes, setPokes] = useState([]);
  const [next, setNext] = useState([]);
  const [previous, setPrevious] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    if (searchParams.get('search')) {
      getSearchedPoke();
    } else {
      getPoke();
    }
  }, []);

  function getPoke(url) {
    pokeServices
      .getPokemon(url)
      .then((res) => {
        setPokes(res.results);
        setNext(res.next);
        setPrevious(res.previous);
      })
      .catch((err) => {
        throw err;
      });
  }

  function getSearchedPoke() {
    if(searchParams.get('search').length>2){
      pokeServices
        .getPokemon('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1279')
        .then((res) => {
          setPokes(res.results.filter((poke) => poke.name.includes(searchParams.get('search'))));
          setNext(res.next);
          setPrevious(res.previous);
        })
        .catch((err) => {
          throw err;
        });
    }
  }

  const onSearchValueChange = (e) => {
    setSearchParams({search:e.target.value});
  };

  return (
    <>
      <header>
        <h1>PokeApi</h1>
        <div className="controls" >
          <label htmlFor="search">
            Search:
            <input
              required
              type="text"
              id="search"
              value={searchParams.get('search')}
              onChange={onSearchValueChange}
            />
          </label>
          <button onClick={getSearchedPoke}>Buscar</button>
        </div>
      </header>
      <main className="cards-conteiner">
        {pokes.map((poke) => (
          <Card pokemon={poke} key={poke.name} />
        ))}
      </main>
      <footer>
        {previous && (
          <button
            onClick={() => {
              getPoke(previous);
            }}
          >
            Anterior
          </button>
        )}
        {next && (
          <button
            onClick={() => {
              getPoke(next);
            }}
          >
            Siguiente
          </button>
        )}
      </footer>
    </>
  );
}

export default Home;
