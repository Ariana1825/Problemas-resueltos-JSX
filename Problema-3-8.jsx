import { useState } from "react";
import Descuento from "./Descuento";
import "./style.css";

export default function ObtenerValores() {
  const [tutor, setTutor] = useState("");
  const [hijo, setHijo] = useState("");
  const [mostrar, setMostrar] = useState(false);

  const Enviar = (e) => {
    e.preventDefault();
    if (!tutor || !hijo) {
      alert("Debe llenar todas las casillas.");
    } else {
      setMostrar(true);
    }
  };

  const CambiarTutor = (e) => {
    setTutor(e.target.value);
  };

  const CambiarHijo = (e) => {
    setHijo(e.target.value);
  };

  return (
    <div className="container-main">
      {!mostrar && (
        <form onSubmit={Enviar} id="formulario">
          <div className="mini">
            <h2 className="h2">Coloque su profesión.</h2>
            <p>
              P, si es Policía. C, si es profesor de colegio. D, si es docente
              universitario. N, si no es docente. O, otros.
            </p>
            <input
              onChange={CambiarTutor}
              className="form-control"
              value={tutor}
            />
          </div>

          <div className="mini">
            <h2 className="h2">Coloque el rendimiento de su hijo/a.</h2>
            <p>A, bueno. B, regular. C, deficiente.</p>
            <input
              onChange={CambiarHijo}
              className="form-control"
              value={hijo}
            />
          </div>

          <div className="container-button">
            <button className="btn btn-outline-primary btn-1" type="submit">
              Mandar
            </button>
          </div>
        </form>
      )}

      {mostrar && <Descuento tutor={tutor} hijo={hijo} />}
    </div>
  );
}