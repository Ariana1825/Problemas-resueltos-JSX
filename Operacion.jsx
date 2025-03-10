export default function Operacion({numA, numB, operador}){
    numA= parseFloat(numA)
    numB= parseFloat(numB)
    
    let operacion;

    switch (operador){
        case "suma": 
        operacion = numA + numB
        break 

        case "resta": 
        operacion = numA - numB
        break 
        
        case "multiplicacion": 
        operacion = numA * numB
        break 

        case "division": 
        operacion = numA / numB
        break

        case "potencia": 
        operacion = numA ** numB
        break 

        default: 
        break
    }

    return (
        <>
        <div ID="respuesta">
            <h2 className="h2-2">La respuesta es : {operacion}</h2>
            <div className="container-button">

            <button className="btn-1" onClick={() => window.location.reload()}>Refrescar</button>
            </div>
            
        </div>
        </>
    )
}