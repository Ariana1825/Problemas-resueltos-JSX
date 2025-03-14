export default function Fibonacci({num}){
        
    num = Number(num);
    let a = 0;
    let b = 1;
 
    let fibonacci=[]
    
    while (b <= num) {
        let c = a + b;
        if (c > num) break;
        fibonacci.push(c);
        a = b;
        b = c;
      }

    console.log(fibonacci)

        return (
            <div className="respuesta">
            <h2 className="h2-2">Fibonacci hasta {num}</h2>
            <h3 className="h2-2">{fibonacci.join(', ')}</h3>
            <button className="btn btn-outline-primary btn-1" onClick={() => window.location.reload()}>Refrescar</button>
           </div>
        )
    
}