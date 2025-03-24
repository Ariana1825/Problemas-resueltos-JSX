export default function NMenor({ num, base}) {
  num = Number(num);
  base = Number(base);
  let newbase=[]


  while(num>=base){
      newbase.push(parseInt(num % base))
      num = Math.floor(num / base);
  }
  newbase.push(num);

  let cifra= newbase.reverse();
  
    return (
      <div className="respuesta">
        <h2 className="h2-2">{cifra}</h2>
        <button className="btn btn-outline-primary btn-1" onClick={() => window.location.reload()}>Refrescar</button>
      </div>
    );
  }