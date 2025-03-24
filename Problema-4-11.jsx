import { useState } from "react";
import NMenor from "./NMenor";
import "./style.css";

export default function ObtenerValores() {
  const [num, setNum] = useState("");
  const [base, setBase] = useState("");
  const [mostrar, setMostrar] = useState(false);

  const Enviar = (e) => {
    e.preventDefault();
    if (!num || !base) {
      alert("Debe llenar todas las casillas.");
    } else{
        setMostrar(true);
    }
  };

  const CambiarNum = (e) => {
    setNum(e.target.value);
  };
  const CambiarBase = (e) => {
    setBase(e.target.value);
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
            <h2 className="h2">Coloque la base menor a 10.</h2>
            <input
              onChange={CambiarBase}
              className="form-control"
              value={base}
            />
          </div>

          

          <div className="container-button">
            <button className="btn btn-outline-primary btn-1" type="submit">
              Mandar
            </button>
          </div>
        </form>
      )}

      {mostrar && <NMenor num={num} base={base}/>}
    </div>
  );
}