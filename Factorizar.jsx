export default function Factorizar({ numA, numB}) {
    numA = Number(numA);
    numB = Number(numB);
    let multiplicacion=1;
    let factores=[]
    let i=2
    
    while (i<=numA || i<=numB) {
        
        if(numA%i==0 || numB%i==0){
            factores.push(i)
            numA/=i
            numB/=i
        }else{
            i++
        }
        
    }
    
     for(let a=0; a<factores.length; a++){
         multiplicacion*=factores[a]
     }
    
      return (
        <div className="respuesta">
          <h2 className="h2-2">{multiplicacion}</h2>
          <button className="btn btn-outline-primary btn-1" onClick={() => window.location.reload()}>Refrescar</button>
        </div>
      );
    }