import { useEffect, useState } from 'react';
import pokeServices from '../pokeServices';
import { MoonLoader } from 'react-spinners';
import './cardStyle.css'

function Card(props) {
  const [poke, setPoke] = useState('');
  const [onLoading, setLoading] = useState(true);
  useEffect(() => {
    pokeServices
      .getPokemon(props.pokemon.url)
      .then((res) => {
        setPoke(res);
        setLoading(false)
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  if (onLoading) {
    return(
    <div className="card__skeleton card">
    <div className="title__skeleton"></div>
    <div className="img__skeleton">
        <MoonLoader color="#ffff" />
    </div>
        <div className="types__skeleton types" >
            <div className="type__skeleton type" ></div>
            <div className="type__skeleton type" ></div>
          </div>
      </div>
      
    )
  } else {
    return (
      <div className="card">
        <p>{poke.name}</p>
        <img src={poke.sprites?.front_default} alt={poke.name} />
        <div className="types" >
          {poke.types?.map((type) => (
            <div className="type" key={type.slot} >
              <p className="type" style={{ backgroundColor:color[type.type.name] }}> {type.type?.name} </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const color ={
  grass:'#29c84d',
  poison:'#bc59a1',
  ground:'#e7bd3e',
  rock:'#c1ae60',
  water:'#0398fc',
  bug:'#a3bb01',
  steel:'#acadbe',
  ice:'#04dcfc',
  fire:'#f74614',
  fairy:'#ffa7f3',
  dragon:'#7c65e8',
  ghost:'#6466b8',
  flying:'#5097f7',
  psychic:'#f747a1',
  normal:'#bcbaaf',
  dark:'#7e543c',
  electric:'#fcd007',
  fighting:'#cf513b',
}

export default Card;
