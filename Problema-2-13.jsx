import {useState, useEffect} from "react"
import TipoTriangulo from "./Comp-2-13"
import "./style.css"

function VeriTriangulo({arrayDLados}){
    if (arrayDLados.length < 3) return null; 
    const [a,b,c]=arrayDLados
    if (a <= 0 || b <= 0 || c <= 0) {
        return (<>
            <div className="container-main">
               <div className="rpta-container">
               <h2 className="title">No puede ser un triángulo, porque ningún lado puede ser menor o igual a 0.</h2> 
               <button className="btn btn-outline-primary button" onClick={() => window.location.reload()}>Refrescar</button>
               </div>
           
           </div>
          
           </>)
        
    }
    return (<>
        <div className="container-main">
           <div className="rpta-container">
           <h2 className="title">Sí pueden formar un triángulo, porque todos los lados son mayores a 0.</h2> 
           <button className="btn btn-outline-primary button" onClick={() => window.location.reload()}>Refrescar</button>
           </div>
       
       </div>
      
       </>)

    }




export default function Triangulo(){
    const [arrayDLados, setArrayDLados]=useState([])
    const [Lado, setLado]=useState("")

    const Enviar=(e)=>{
        e.preventDefault()
        setArrayDLados(prev => [...prev, Number(Lado)]);
        setLado("")


    }

     const Cambiar = (e) => {
       setLado(e.target.value)
    }
    
    useEffect(() => {
    }, [arrayDLados])

    return (
        <>
        <div className="container-main">
        {arrayDLados.length <  3 && (
        <form onSubmit={Enviar} className="formulario">
            <div className="title">
            <h2 className="h2">Añadir 3 valores en la casilla.</h2>
            </div>
            
            <input className="form-control" onChange={Cambiar} value = {Lado}></input>
            <div className="container-button">
                <button className="btn btn-outline-primary" type="submit">Mandar</button>
            </div>
        </form>
        )}

        {arrayDLados.length === 3 && 
        <>
        <VeriTriangulo arrayDLados={arrayDLados}/> 
        <TipoTriangulo arrayDLados={arrayDLados}/>
        </>
        }
        
        </div>
        </>
    )
}
