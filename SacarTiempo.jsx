export default function SacarTiempo({tiempo}){
    if (tiempo.length < 3) return null; 

    let seg=tiempo[2]
    let min=tiempo[1]
    let hora=tiempo[0]

    seg= seg + 1

    if(seg==60){
        seg=0
        min=min+1

        if(min==60){
            min=0
            hora=hora+1

            if(hora==24){
                hora=0

            }else{
                return (
                    <>
                    <div className="formulario">
                    <h2 className="h4-2">{hora} : {min} : {seg}</h2>
                    <button className="btn btn-outline-primary  boton-2" onClick={() => window.location.reload()}>Refrescar</button>
                    </div>
                    
                    </>
                )
            }
        }else{
            return (
                <>
                <div className="formulario">
                    <h2 className="h4-2">{hora} : {min} : {seg}</h2>
                    <button className="btn btn-outline-primary  boton-2" onClick={() => window.location.reload()}>Refrescar</button>
                    </div>
                </>
            )
        } 
    }else{
        return (
            <>
            <div className="formulario">
                    <h2 className="h4-2">{hora} : {min} : {seg}</h2>
                    <button className="btn btn-outline-primary  boton-2" onClick={() => window.location.reload()}>Refrescar</button>
                </div>
            </>
        )
    }

    
}