import { useState } from "react";
import Nota from "./Nota";
import "./style.css";

export default function ObtenerValores() {
  const [nota, setNota] = useState("");
  const [mostrar, setMostrar] = useState(false);

  const Enviar = (e) => {
    e.preventDefault();
    if (!nota) {
      alert("Debe llenar todas las casillas.");
    } else{
        setMostrar(true);
    }
  };

  const Cambiar = (e) => {
    setNota(e.target.value);
  };

  return (
    <div className="container-main">
      {!mostrar && (
        <form onSubmit={Enviar} id="formulario">
          <div className="mini">
            <h2 className="h2">Coloca tu nota : A, B, C, D.</h2>
            <input
              onChange={Cambiar}
              className="form-control"
              value={nota}
            />
          </div>

          

          <div className="container-button">
            <button className="btn btn-outline-primary btn-1" type="submit">
              Mandar
            </button>
          </div>
        </form>
      )}

      {mostrar && <Nota nota={nota} />}
    </div>
  );
}