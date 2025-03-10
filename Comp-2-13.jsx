export default function TipoTriangulo({arrayDLados}){
    
    if (arrayDLados.length < 3) return null; 
    const [a,b,c]= arrayDLados  
    if (a<0 || b<0 || c<0){
        return (<>
            <div className="container-main">
                <div className="rpta-container">
                <h2 className="rpta">Al no haber triángulo, no hay tipo de triángulo.</h2>
                <button className="btn btn-outline-primary" onClick={() => window.location.reload()}>Refrescar</button>
                </div>
            
            </div>
           
            </>)

    }else{
        
        if(a == b && b == c){
            return (<>
                <div className="container-main">
                    <div className="rpta-container">
                    <h2 className="rpta">El triángulo es equilatero.</h2>
                    <button className="btn btn-outline-primary" onClick={() => window.location.reload()}>Refrescar</button>
                    </div>
                
                </div>
               
                </>)

        }else if(a===b || a === c || b===c){
           return (<>
             <div className="container-main">
                <div className="rpta-container">
                <h2>El triángulo es isósceles.</h2> 
                <button className="btn btn-outline-primary" onClick={() => window.location.reload()}>Refrescar</button>
                </div>
            
            </div>
           
            </>)

       } else if(a !== b && c){
        return (<>
            <div className="container-main">
               <div className="rpta-container">
               <h2>El triángulo es escaleno.</h2> 
               <button className="btn btn-outline-primary" onClick={() => window.location.reload()}>Refrescar</button>
               </div>
           
           </div>
          
           </>)
    } 
   }
}