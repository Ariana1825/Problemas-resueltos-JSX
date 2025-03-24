export default function SistemaDN({ num, base}) {
  num = String(num);
  base = Number(base);
  let rpta="";
  let i = 0;

  while (i < num.length) {
      if (Number(num[i]) >= base || isNaN(Number(num[i]))) {
          rpta="No pertenece a este sistema de numeración.";
          return(
            <div className="respuesta">
              <h2 className="h2-2">{rpta}</h2>
              <button className="btn btn-outline-primary btn-1" onClick={() => window.location.reload()}>Refrescar</button>
            </div>
          );
      }
      i++;
  }
  rpta= "Si pertenece a este sistema de numeración.";
  
    return (
      <div className="respuesta">
        <h2 className="h2-2">{rpta}</h2>
        <button className="btn btn-outline-primary btn-1" onClick={() => window.location.reload()}>Refrescar</button>
      </div>
    );
  }