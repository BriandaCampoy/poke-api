import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Type from '../../components/type';
import pokeServices from '../../pokeServices';
import './style.css';

function Pokemon() {
  const { id } = useParams();
  const [poke, setPoke] = useState(useLocation().state.poke);
  console.log(useLocation().state.location);
  const navigate = useNavigate();
  if(!poke){
    pokeServices.getPokemon(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res)=>{
      setPoke(res)
    })
    .catch((err)=>{throw err;});
  }
  return (
    <>
      <h1>{poke?.name}</h1>
      <div className="data">
        <div className="games">
          <h2>Games where you can find it</h2>
          <table className="games__table">
            <thead>
              <tr>
                <th>Games</th>
                <th>Game index</th>
              </tr>
            </thead>
            <tbody>
              {poke?.game_indices.map((index) => (
                <tr key={index.version.name}>
                  <th>{index.version.name}</th>
                  <td>{index.game_index}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="sprites">
          <img src={poke?.sprites?.front_default} alt="" />
          <img src={poke?.sprites?.back_default} alt="" />
          <img src={poke?.sprites?.front_shiny} alt="" />
          <img src={poke?.sprites?.back_shiny} alt="" />
        </div>
        <div className="types">
          {poke?.types.map((type) => (
            <Type type={type.type.name} key={type.type.name} />
          ))}
        </div>
        <div className="abilities">
          <table className="abilities__table">
            <thead>
              <tr>
                <th>Abilities</th>
              </tr>
            </thead>
            <tbody>
              {poke?.abilities.map((ability) => (
                <tr key={ability.ability.name}>
                  <td>{ability.ability.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="stats">
          <table className="stats__table">
            <thead>
              <tr>
                <th colSpan={6}>Stats</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {poke?.stats.map((stat) => (
                  <th key={stat.stat.name}>{stat.stat.name}</th>
                ))}
              </tr>
              <tr>
                {poke?.stats.map((stat) => (
                  <th key={stat.stat.name}>{stat.base_stat}</th>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        <div  className="return">
          <button onClick={()=>{navigate('/')}}>Return</button>
        </div>
      </div>
    </>
  );
}

const regionsColors = [];

export default Pokemon;
