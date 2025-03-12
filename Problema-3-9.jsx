import { useState } from "react";
import Vocales from "./Vocales";
import "./style.css";

export default function ObtenerValores() {
  const [vocal, setVocal] = useState("");
  const [mostrar, setMostrar] = useState(false);

  const Enviar = (e) => {
    e.preventDefault();
    if (!vocal) {
      alert("Debe llenar todas las casillas.");
    } else{
        setMostrar(true);
    }
  };

  const Cambiar = (e) => {
    setVocal(e.target.value);
  };

  return (
    <div className="container-main">
      {!mostrar && (
        <form onSubmit={Enviar} id="formulario">
          <div className="mini">
            <h2 className="h2">Coloque un número del 1 al 5.</h2>
            <input
              onChange={Cambiar}
              className="form-control"
              value={vocal}
            />
          </div>

          

          <div className="container-button">
            <button className="btn btn-outline-primary btn-1" type="submit">
              Mandar
            </button>
          </div>
        </form>
      )}

      {mostrar && <Vocales vocal={vocal} />}
    </div>
  );
}