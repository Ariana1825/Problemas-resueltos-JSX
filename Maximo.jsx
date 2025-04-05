export default function Maximo({numA,numB}){
    
    let largo = Number(numA);
    let ancho = Number(numB);
    let rpta=""
    let x=0
    let xmax=0
    let vol=0
    let volmax=0

    
    do{
        x=x + 0.0001
        vol=(largo- 2*x) * (ancho -2*x) * x
        if(vol>volmax){
            volmax=vol
            xmax=x
        }

    }while(x< ancho/2 - 0.0001)
        rpta=`Volumen máximo: ${volmax.toFixed(1)}, Largo: ${largo-2*xmax.toFixed(1)}, Ancho: ${ancho-2*xmax.toFixed(1)}, Altura: ${xmax.toFixed(1)}`

    return (
        <div className="respuesta">
        <h2 className="h2-2">{rpta}</h2>

        <button className="btn btn-outline-primary btn-1" onClick={() => window.location.reload()}>Refrescar</button>
       </div>
    )
}
