export default function Descuento({salario}){
    if(salario <=1000){
        let impuesto= (10/100) * Number
        let salarioNeto= salario - impuesto

        return (<>
            <div className="container-main">
                <div id="formulario">
                <h2 className="h2">Tu salario neto es {salarioNeto}</h2>
                <h2 className="h2">Porque tu impuesto es{impuesto}</h2>
                </div>
            </div> 
            </>
    )
    }else if(salario >=1000 && salario <=2000){
        let impuesto= (5/100) * salario
        let salarioNeto= salario - impuesto

        return (<>
            <div className="container-main">
                <div id="formulario">
                <h2 className="h2">Tu salario neto es {salarioNeto}</h2>
                <h2 className="h2">Porque tu impuesto es {impuesto}</h2>
                </div>
            </div> 
            </>
    )
    }else if(salario>2000){
        let diferencia= number - 2000
        let impuesto=(3/100) * diferencia
        let salarioNeto = number - impuesto
        
        return (<>
            <div className="container-main">
                <div id="formulario">
                <h2 className="h2">Tu salario neto es {salarioNeto}</h2>
                <h2 className="h2">Porque tu impuesto es {impuesto}</h2>
                </div>
            </div> 
            </>
    )

    }
}