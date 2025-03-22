import { useState } from "react";
import Fraccion from "./Fraccion";
import "./style.css";

export default function ObtenerValores() {
  const [A, setA] = useState("");
  const [B, setB] = useState("");
  const [mostrar, setMostrar] = useState(false);

  const Enviar = (e) => {
    e.preventDefault();
    if (!A || !B) {
      alert("Debe llenar todas las casillas.");
    } else{
        setMostrar(true);
    }
  };

  const CambiarA = (e) => {
    setA(e.target.value);
  };
  const CambiarB = (e) => {
    setB(e.target.value);
  };


  return (
    <div className="container-main">
      {!mostrar && (
        <form onSubmit={Enviar} id="formulario">
          <div className="mini">
            <h2 className="h2">Coloque un número</h2>
            <input
              onChange={CambiarA}
              className="form-control"
              value={A}
            />
          </div>

          <div className="mini">
            <h2 className="h2">Coloque un número</h2>
            <input
              onChange={CambiarB}
              className="form-control"
              value={B}
            />
          </div>

          

          <div className="container-button">
            <button className="btn btn-outline-primary btn-1" type="submit">
              Mandar
            </button>
          </div>
        </form>
      )}

      {mostrar && <Fraccion A={A} B={B}/>}
    </div>
  );
}