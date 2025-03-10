import {useState} from "react"
import Operacion from "./Operacion"

export default function Numeros(){
    const [num,setNum]=useState("")
    const [mostrar, setMostrar]= useState(false)
    const [flex, setFlex]=useState("flex")

    const Enviar=(e)=>{
        e.preventDefault()
        if(!num){
            alert("Llene las casillas")
        }else{
        setMostrar(true)
        setFlex("none")
        }
    }

    const Cambiar=(e)=>{
        setNum(e.target.value)
    }
   
    

    return (
        <>
         <div className="container-main">
         
        <form onSubmit={Enviar} id="formulario"  style={{display: flex}}>
            <div className="mini">
            <h2>Agrega un valor para X</h2>
            <input className="form-control" onChange={Cambiar} value = {num}></input>
            </div>
       
            <div className="container-button">
                <button className="btn btn-outline-primary" type="submit">Mandar</button>
            </div>
        </form>

        {mostrar && <Operacion num={num}/>}
        </div>
        </>

    )
}