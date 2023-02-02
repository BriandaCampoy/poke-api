import { MoonLoader } from 'react-spinners';

function CardLoading(){
  return(
    <div className="card__skeleton card">
    <div className="title__skeleton"></div>
    <div className="img__skeleton">
        <MoonLoader color="#ffff" />
    </div>
        <div className="types__skeleton types" >
            <div className="type__skeleton type" >
              <p className="type"></p>
              </div>
            <div className="type__skeleton type" >
            <p  className="type"> </p>
            </div>
          </div>
      </div>
      
  )
}

export default CardLoading