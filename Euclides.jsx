export default function NMenor({ numA, numB}) {
    numA = Number(numA);
    numB = Number(numB);

    let r=0
    
    while(numB>0){
        r=numA % numB 
        numA = numB
        numB = r
    }
    
      return (
        <div className="respuesta">
          <h2 className="h2-2">El mcd es: {numA}</h2>
          <button className="btn btn-outline-primary btn-1" onClick={() => window.location.reload()}>Refrescar</button>
        </div>
      );
    }