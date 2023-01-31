import { useEffect, useState } from 'react';
import pokeServices from '../pokeServices';
import './cardStyle.css'

function Card(props) {
  const [poke, setPoke] = useState('');
  const [onLoading, setLoading] = useState(false);
  useEffect(() => {
    pokeServices
      .getPokemon(props.pokemon.url)
      .then((res) => {
        setPoke(res);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  if (onLoading) {
  } else {
    return (
      <div className="card">
        <p>{poke.name}</p>
        <img src={poke.sprites?.front_default} alt={poke.name} />
        <div className="types">
          {poke.types?.map((type) => (
            <div className="type" key={type.slot}>
              <p> {type.type?.name} </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Card;
