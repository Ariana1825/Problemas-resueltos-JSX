import { useState } from "react";
import Ecuacion from "./Ecuacion";
import "./style.css";

export default function ObtenerValores() {
  const [mostrar, setMostrar] = useState(false);

  const Enviar = (e) => {
    e.preventDefault(); 
    setMostrar(true);
  };

 
  return (
    <div className="container-main">
      {!mostrar && (
        <form onSubmit={Enviar} id="formulario">

          <div className="container-button">
            <button className="btn btn-outline-primary btn-1" type="submit">
              Mandar
            </button>
          </div>
        </form>
      )}

      {mostrar && <Ecuacion/>}
    </div>
  );
}