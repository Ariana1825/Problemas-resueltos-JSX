export default function Primo({ num }) {
    let numA = String(num);
    let i=0;
    let n=0;
    let cifra="";
    
    while (i<numA.length) {
        n = numA.length - 1 - i;
        cifra+=numA[n]
        i++
    }
    

  
    return (
      <div className="respuesta">
        <h2 className="h2-2">{cifra}</h2>
        <button className="btn btn-outline-primary btn-1" onClick={() => window.location.reload()}>Refrescar</button>
      </div>
    );
  }