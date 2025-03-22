export default function Fraccion({ A,B}) {
    A = Number(A);
    B = Number(B);

    let i=2 
    
    let factores=[]
    
    while (i<=A && i<=B) {
        
        if(A%i==0 && B%i==0){
            factores.push(i)
            A/=i
            B/=i
        }else{
            i++
        }
        
    
    }
  
    return (
      <div className="respuesta">
        <h2 className="h2-2">{A}/{B}</h2>
        <button className="btn btn-outline-primary btn-1" onClick={() => window.location.reload()}>Refrescar</button>
      </div>
    );
  }