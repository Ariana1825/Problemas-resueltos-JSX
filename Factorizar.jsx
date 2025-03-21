export default function Factorizar({num}){
        
        num=Number(num)
        let val=num;
        let factores=[]
        let i=2
        
        while (i<=num) {
            
            if(num%i==0){
                factores.push(i)
                num/=i
            }else{
                i++
            }
            
        }
        

        return (
            <div className="respuesta">
            <h2 className="h2-2">Factores de {val}</h2>
            <h3 className="h2-2">{factores.join(', ')}</h3>
            <button className="btn btn-outline-primary btn-1" onClick={() => window.location.reload()}>Refrescar</button>
           </div>
        )
    
}