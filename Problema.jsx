export default function Problema({num}){
    let dt = 0; 
    let tt = 0; 

    for (let i = 1; i <= num; i++) {
        let d = Number(prompt(`Ingresa el valor de d (${i}/${num}):`));
        let t = Number(prompt(`Ingresa el valor de t (${i}/${num}):`));

        dt += d;
        tt += t;
    }

    return (
        <div className="respuesta">
        <h2 className="h2-2">Suma de d: {dt}, Suma de t: {tt}</h2>

        <button className="btn btn-outline-primary btn-1" onClick={() => window.location.reload()}>Refrescar</button>
       </div>
    )
}