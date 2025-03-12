export default function Vocales({vocal}){
    vocal=Number(vocal)

    let rpta="";

    switch(vocal){
        case 1: rpta="A"
        break

        case 2: rpta="E"
        break

        case 3: rpta="I"
        break

        case 4: rpta="O"
        break

        case 5: rpta="U"
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
