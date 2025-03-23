import { useState } from "react";
import "./style.css";
import CPerfecto from "./CPerfecto";

export default function ObtenerValores() {
  const [numA, setNumA] = useState("");
  const [mostrar, setMostrar] = useState(false);

  const Enviar = (e) => {
    e.preventDefault();
    if (!numA) {
      alert("Debe llenar todas las casillas.");
    } else{
        setMostrar(true);
    }
  };

  const Cambiar = (e) => {
    setNumA(e.target.value);
  };

  return (
    <div className="container-main">
      {!mostrar && (
        <form onSubmit={Enviar} id="formulario">
          <div className="mini">
            <h2 className="h2">Coloque un número positivo</h2>
            <input
              onChange={Cambiar}
              className="form-control"
              value={numA}
            />
          </div>

          

          <div className="container-button">
            <button className="btn btn-outline-primary btn-1" type="submit">
              Mandar
            </button>
          </div>
        </form>
      )}

      {mostrar && <CPerfecto numA={numA}/>}
    </div>
  );
}