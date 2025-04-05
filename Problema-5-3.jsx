import { useState } from "react";
import Numeros from "./Numeros";
import "./style.css";

export default function ObtenerValores() {
  const [num, setNum] = useState("");
  let numeros=[]
  const [mostrar, setMostrar] = useState(false);

  const Enviar = (e) => {
    e.preventDefault();
    if (!num) {
      alert("Debe llenar todas las casillas.");
    }else if(num !== 0){
        console.log(num)
        numeros.push(Number(num))
    } else if(num == 0){
        setMostrar(true);
    }
  };

  const CambiarNum = (e) => {
    setNum(e.target.value);
  }; 


  return (
    <div className="container-main">
      {!mostrar && (
        <form onSubmit={Enviar} id="formulario">
          <div className="mini">
            <h2 className="h2">Coloque numeros al azar, para terminar, ponga 0</h2>
            <input
              onChange={CambiarNum}
              className="form-control"
              value={num}
            />
          </div>


          

          <div className="container-button">
            <button className="btn btn-outline-primary btn-1" type="submit">
              Mandar
            </button>
          </div>
        </form>
      )}

      {mostrar && <Numeros numeros={numeros}/>}
    </div>
  );
}