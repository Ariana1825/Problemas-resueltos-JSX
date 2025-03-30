export default function Euclides({ numA, numB}) {
  numA = Number(numA);
  numB = Number(numB);

  while(numA!== numB){
    if(numA>numB){
        numA=numA-numB
    }else{
        numB=numB-numA
    }
}
  
    return (
      <div className="respuesta">
        <h2 className="h2-2">{numA}</h2>
        <button className="btn btn-outline-primary btn-1" onClick={() => window.location.reload()}>Refrescar</button>
      </div>
    );
  }