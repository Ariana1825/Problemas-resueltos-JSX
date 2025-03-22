export default function NPerfecto({ num }) {
    num=Number(num)
    let n=0
    let i=1
    let rpta="";
    
    while (i<num) {
        
        if(num%i==0){
            n+=i
            
        }

        i++
        
    }

    if(n===num){
        rpta="El número es perfecto."
    }else{
        rpta="El número no es perfecto."
    }

  
    return (
      <div className="respuesta">
        <h2 className="h2-2">{rpta}</h2>
        <button className="btn btn-outline-primary btn-1" onClick={() => window.location.reload()}>Refrescar</button>
      </div>
    );
  }