import { useState } from "react";
import RyQ from "./RyQ";
import "./style.css";

export default function ObtenerValores() {
  const [dividendo, setDividendo] = useState("");
  const [divisor, setDivisor] = useState("");
  const [mostrar, setMostrar] = useState(false);

  const Enviar = (e) => {
    e.preventDefault();
    if (!divisor || !dividendo) {
      alert("Debe llenar todas las casillas.");
    } else{
        setMostrar(true);
    }
  };

  const CambiarD = (e) => {
    setDividendo(e.target.value);
  };
  const CambiarD2 = (e) => {
    setDivisor(e.target.value);
  };


  return (
    <div className="container-main">
      {!mostrar && (
        <form onSubmit={Enviar} id="formulario">
          <div className="mini">
            <h2 className="h2">Coloca el dividendo</h2>
            <input
              onChange={CambiarD}
              className="form-control"
              value={dividendo}
            />
          </div>

          <div className="mini">
            <h2 className="h2">Coloca el divisor</h2>
            <input
              onChange={CambiarD2}
              className="form-control"
              value={divisor}
            />
          </div>

          

          <div className="container-button">
            <button className="btn btn-outline-primary btn-1" type="submit">
              Mandar
            </button>
          </div>
        </form>
      )}

      {mostrar && <RyQ dividendo={dividendo} divisor={divisor}/>}
    </div>
  );
}