export default function CPerfecto({ numA }) {
    let num=String(numA);
    let n=0;
    let i=0;
    let rpta=""
    
    while (i<num.length){
        n+=Number(num[i])**3
        i++
        
    }


    if(n===Number(num)){
        rpta="El número es de Armstrong."
    }else{
        rpta="El número no es de Armstrong."
    }

  
    return (
      <div className="respuesta">
        <h2 className="h2-2">{rpta}</h2>
        <button className="btn btn-outline-primary btn-1" onClick={() => window.location.reload()}>Refrescar</button>
      </div>
    );
  }