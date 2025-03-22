export default function Primo({ num }) {
    num = Number(num);
    let rpta = "Es primo";
  
    if (num <= 1) {
      rpta = "No es primo";
    } else {
      let i = 2;
      while (i <= Math.sqrt(num)) {
        if (num % i === 0) {
          rpta = "No es primo";
          break
        }
        i++;
      }
    }
  
    return (
      <div className="respuesta">
        <h2 className="h2-2">{rpta}</h2>
        <button className="btn btn-outline-primary btn-1" onClick={() => window.location.reload()}>Refrescar</button>
      </div>
    );
  }