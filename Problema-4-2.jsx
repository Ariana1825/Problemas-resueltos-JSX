import { useState } from "react";
import "./style.css";
import Fibonacci from "./Fibonacci";

export default function ObtenerValores() {
  const [num, setNum] = useState("");
  const [mostrar, setMostrar] = useState(false);

  const Enviar = (e) => {
    e.preventDefault();
    if (!num) {
      alert("Debe llenar todas las casillas.");
    } else{
        setMostrar(true);
    }
  };

  const Cambiar = (e) => {
    setNum(e.target.value);
  };



  return (
    <div className="container-main">
      {!mostrar && (
        <form onSubmit={Enviar} id="formulario">
          <div className="mini">
            <h2 className="h2">Coloque un número positivo al azar</h2>
            <input
              onChange={Cambiar}
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

      {mostrar && <Fibonacci num={num}/>}
    </div>
  );
}