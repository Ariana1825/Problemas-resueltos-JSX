export default function Nota({nota}){
    nota=String(nota).toLowerCase()

    let rpta="";

    switch(nota){
        case "a": rpta="Buen alumno"
        break

        case "b": rpta="Alumno regular"
        break

        case "c": rpta="Mal alumno"
        break

        case "d": rpta="Pésimo alumno"
        break

        default: break
    }

    return (
        <div className="respuesta">
        <h2 className="h2-2">{rpta}</h2>
        <button className="btn btn-outline-primary btn-1" onClick={() => window.location.reload()}>Refrescar</button>
       </div>
    )
}
