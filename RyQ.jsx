export default function RyQ({dividendo, divisor}){
        
        dividendo=Number(dividendo)
        divisor=Number(divisor)
        let contador=0
    
        while(dividendo>divisor){
            dividendo= dividendo-divisor
            contador++

    
        }

        return (
            <div className="respuesta">
            <h2 className="h2-2">{contador} es el cociente y {dividendo} el residuo</h2>
            <button className="btn btn-outline-primary btn-1" onClick={() => window.location.reload()}>Refrescar</button>
           </div>
        )
    
}