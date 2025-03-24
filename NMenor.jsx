export default function NMenor({ num, base}) {
  num = Number(num);
  base = Number(base);
  
  let i=0
  let nuevo=0
  let cifra=""


  while(num>0){
      nuevo = nuevo + (num % 10)*(base**i)
      num = Math.floor(num / 10);
      i++
  }
  cifra=`${nuevo} (10)`
  
    return (
      <div className="respuesta">
        <h2 className="h2-2">{cifra}</h2>
        <button className="btn btn-outline-primary btn-1" onClick={() => window.location.reload()}>Refrescar</button>
      </div>
    );
  }