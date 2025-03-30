import { useState } from "react";
import Euclides from "./Euclides";
import "./style.css";

export default function ObtenerValores() {
  const [numA, setNumA] = useState("");
  const [numB, setNumB] = useState("");
  const [mostrar, setMostrar] = useState(false);

  const Enviar = (e) => {
    e.preventDefault();
    if (!numA || !numB) {
      alert("Debe llenar todas las casillas.");
    } else{
        setMostrar(true);
    }
  };

  const CambiarNumA = (e) => {
    setNumA(e.target.value);
  };
  const CambiarNumB = (e) => {
    setNumB(e.target.value);
  };


  return (
    <div className="container-main">
      {!mostrar && (
        <form onSubmit={Enviar} id="formulario">
          <div className="mini">
            <h2 className="h2">Coloque un número</h2>
            <input
              onChange={CambiarNumA}
              className="form-control"
              value={numA}
            />
          </div>

          <div className="mini">
            <h2 className="h2">Coloque la base menor para volverlo a base 10.</h2>
            <input
              onChange={CambiarNumB}
              className="form-control"
              value={numB}
            />
          </div>

          

          <div className="container-button">
            <button className="btn btn-outline-primary btn-1" type="submit">
              Mandar
            </button>
          </div>
        </form>
      )}

      {mostrar && <Euclides numA={numA} numB={numB}/>}
    </div>
  );
}