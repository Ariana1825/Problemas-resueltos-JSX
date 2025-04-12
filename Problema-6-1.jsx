import { useState } from "react";
import Problema from "./Problema";
import "./style.css";

export default function ObtenerValores() {
  const [num, setNum] = useState("");
  const [valor, setValor] = useState("");
  const [mostrar, setMostrar] = useState(false);

  const Enviar = (e) => {
    e.preventDefault();
    if (!num || !valor) {
      alert("Debe llenar todas las casillas.");
    } else{
        setMostrar(true);
    }
  };

  const CambiarNum = (e) => {
    setNum(e.target.value);
  };
  const CambiarValor = (e) => {
    setValor(e.target.value);
  };


  return (
    <div className="container-main">
      {!mostrar && (
        <form onSubmit={Enviar} id="formulario">
          <div className="mini">
            <h2 className="h2">Coloque un número</h2>
            <input
              onChange={CambiarNum}
              className="form-control"
              value={num}
            />
          </div>

          <div className="mini">
            <h2 className="h2">Coloque un número</h2>
            <input
              onChange={CambiarValor}
              className="form-control"
              value={valor}
            />
          </div>

          

          <div className="container-button">
            <button className="btn btn-outline-primary btn-1" type="submit">
              Mandar
            </button>
          </div>
        </form>
      )}

      {mostrar && <Problema num={num} valor={valor}/>}
    </div>
  );
}