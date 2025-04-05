import { useState } from "react";
import Pi from "./Pi";
import "./style.css";

export default function ObtenerValores() {
  const [mostrar, setMostrar] = useState(false);

  const Enviar = (e) => {
    e.preventDefault();
    if (!nota) {
      alert("Debe llenar todas las casillas.");
    } else{
        setMostrar(true);
    }
  };

 
  return (
    <div className="container-main">
      {!mostrar && (
        <form onSubmit={Enviar} id="formulario">
          <div className="mini">
          </div>

          <div className="container-button">
            <button className="btn btn-outline-primary btn-1" type="submit">
              Mandar
            </button>
          </div>
        </form>
      )}

      {mostrar && <Pi/>}
    </div>
  );
}