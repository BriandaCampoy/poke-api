import { useEffect, useState } from 'react';
import pokeServices from '../pokeServices';
import { useLocation, useNavigate } from "react-router-dom";
import './cardStyle.css'
import CardLoading from './cardLoading';
import Type from './type';

function Card(props) {
  const [poke, setPoke] = useState('');
  const [onLoading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
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
      <CardLoading/>
    )
  } else {
    return (
      <div className="card" onClick={()=>
        navigate(`/${poke.id}`,{state:{poke,location}})
      }>
        <p>{poke.name}</p>
        <img src={poke.sprites?.front_default} alt={poke.name} />
        <div className="types" >
          {poke.types?.map((type) => (
            <div className="type" key={type.slot} >
              <Type type={type.type.name} />
              {/* <p className="type" style={{ backgroundColor:color[type.type.name] }}> {type.type?.name} </p> */}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Card;
