export default function Operacion({num}){
    num=Number(num)
    
    if(num<=0){
        num=(num**2) + 1

        return (
            <>
            <div className="form">
            <h2>{num}</h2>
            <button className="btn btn-outline-primary button" onClick={() => window.location.reload()}>Refrescar</button>
            </div>
            
            </>
        )
    }else if(0<num && num<3){

        num = (num**2) + (num*3) + 2

        return (
            <>
            <div className="form">
            <h2>{num}</h2>
            <button className="btn btn-outline-primary button" onClick={() => window.location.reload()}>Refrescar</button>
            </div>
            
            </>
        )

    }else if(num>=3){
        num= num + 1
        return (
            <>
            <div className="form">
            <h2>{num}</h2>
            <button className="btn btn-outline-primary button" onClick={() => window.location.reload()}>Refrescar</button>
            </div>
            
            </>
        )
    }
}