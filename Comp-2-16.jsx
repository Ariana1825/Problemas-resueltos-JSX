export default function Operacion({num}){
    if(num >=100){
        return (<>
                    <div className="container-main">
                        <div id="formulario">
                        <h2 className="h2">Te descontamos 40% de la compra.</h2>
                        </div>
                    </div> 
                </>)

    }else if(num >=25 && num<=100){
        return (<>
            <div className="container-main">
                <div id="formulario">
                <h2 className="h2">Te descontamos el 20% de la compra.</h2>
                </div>
            </div> 
        </>)
    }else if( num>=10 && num<=25){
        return (<>
            <div className="container-main">
                <div id="formulario">
                <h2 className="h2">Te descontamos 10% de la compra.</h2>
                </div>
            </div> 
        </>)
    }else if(num<10){
        return (<>
            <div className="container-main">
                <div id="formulario">
                <h2 className="h2">No hay descuentos.</h2>
                </div>
            </div> 
        </>)
    }
}