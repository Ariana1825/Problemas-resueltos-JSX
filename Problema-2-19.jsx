import {useState} from "react"
import Operacion from "./Operacion"
import "./style.css"

export default function Numero(){
    const [numA,setNumA]=useState("")
    const [numB, setNumB]=useState("")
    const [mostrar, setMostrar]= useState(false)
    const [flex, setFlex]=useState("flex")

    const Enviar=(e)=>{
        e.preventDefault()

        if(!numA || !numB){
            alert("Llene las casillas")
        }else{
        setMostrar(true)
        setFlex("none")
        }
    }

    const CambiarA=(e)=>{

        setNumA(e.target.value)
    }
    const CambiarB=(e)=>{
        setNumB(e.target.value)
    }
    
    

    return (
        <>
         <div className="container-main">
         
        <form onSubmit={Enviar} id="formulario" style={{display: flex}}>
            <div className="mini">
            <h2>Agrega un valor para A</h2>
            <input className="form-control" onChange={CambiarA} value = {numA}></input>
            </div>

            <div className="mini">
            <h2>Agrega un valor para B</h2>
            <input className="form-control" onChange={CambiarB} value = {numB}></input>
            </div>
            
            
            <div className="container-button">
                <button className="btn btn-outline-primary" type="submit">Mandar</button>
            </div>
        </form>

        {mostrar && <Operacion numA={numA} numB={numB}/>}
        </div>
        </>

    )
}