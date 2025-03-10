export default function Operacion({numA,numB}){

    numA=Number(numA)
    numB=Number(numB)
    if(numA >= 0 && numB>=0){
        let producto= numA * numB
        return (
            <>
            <div id="respuesta">
            <h2>{producto}</h2>
            <button className="btn btn-outline-primary boton-1" onClick={() => window.location.reload()}>Refrescar</button>
            </div>
            
            </>
        )
    }else{
        let suma= numA + numB

        return (
            <>
            <div id="respuesta">
            <h2>{suma}</h2>
            <button className="btn btn-outline-primary boton-1" onClick={() => window.location.reload()}>Refrescar</button>
            </div>
            
            </>
        )
    }
}