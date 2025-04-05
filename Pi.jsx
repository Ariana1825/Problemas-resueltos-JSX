export default function Pi(){
    let rpta="";
    let i=1
    let pi4=0
    let signo= -1

    do{
        signo=-signo
        pi4= pi4 + signo*(1/i)
        i+=2
    }while(1/i >0.000001)

    return (
        <div className="respuesta">
        <h2 className="h2-2">Pi vale: {4*pi4}</h2>
        <button className="btn btn-outline-primary btn-1" onClick={() => window.location.reload()}>Refrescar</button>
       </div>
    )
}
