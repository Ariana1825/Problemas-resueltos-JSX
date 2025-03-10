export default function Promedio({arrayDNotas, CDNotas}){
    let prom=0;

    for(var i=0; i<CDNotas; i++){
        prom+=Number(arrayDNotas[i])
    }
    prom=prom/CDNotas
    return (
        <>
        <div className="container-main">
            <div className="rpta-container">
            <h2 className="rpta">{prom}</h2>
            </div>
        
        </div>
       
        </>
    )
}