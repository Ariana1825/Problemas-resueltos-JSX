import Fraccion from "./Fraccion"

export default function Signo({num}){
    if(num>0){
        return (<>
            <div className="container-main">
                <div id="formulario">
                <h2 className="rpta">El signo del número ingresado es +.</h2>
                <Fraccion num={num}></Fraccion>
                </div>
            </div>
            {}
           
            </>)
    
    }else{
        return (<>
            <div className="container-main">
                <div className="formulario">
                <h2 className="rpta">El signo del número ingresado es -.</h2>
                <Fraccion num={num}></Fraccion>
                </div>
            </div>
           
            </>)
       

    }
}