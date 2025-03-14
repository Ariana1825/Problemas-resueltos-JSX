export default function Divisores({A, B}){
        
        A=Number(A)
        B=Number(B)
        let divisores=[]
        let i=1
    
        while (i<=A && i<=B) {
            if (A % i === 0 && B % i === 0) {
                divisores.push(i);
              }

        i++
        
    }

        return (
            <div className="respuesta">
            <h2 className="h2-2">Divisores en común de {A} y {B}</h2>
            <h3 className="h2-2">{divisores.join(', ')}</h3>
            <button className="btn btn-outline-primary btn-1" onClick={() => window.location.reload()}>Refrescar</button>
           </div>
        )
    
}