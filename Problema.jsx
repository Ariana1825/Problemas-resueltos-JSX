export default function Problema({num,valor}){
    
    num = Number(num);
    valor = Number(valor);

    let s=1
    let t=1
    for(let i=1; i<=num; i++){
        t= t+valor/i
        s= s+t
    }

    return (
        <div className="respuesta">
        <h2 className="h2-2">{s}</h2>

        <button className="btn btn-outline-primary btn-1" onClick={() => window.location.reload()}>Refrescar</button>
       </div>
    )
}
