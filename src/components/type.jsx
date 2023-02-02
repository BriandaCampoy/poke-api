function Type(props){
  return (
    <p className="type" style={{ backgroundColor:color[props.type] }}> {props.type} </p>
  )
}

export default Type;

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
