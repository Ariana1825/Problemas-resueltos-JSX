import {useState} from "react"
import Signo from "./Comp-2-15"
import 'bootstrap/dist/css/bootstrap.min.css'
import "./style.css"


export default function Numero(){
    const [num, setNum]= useState("")
    const [mostrar, setMostrar]= useState(false)
    const [flex, setFlex]=useState("flex")
    
    const Enviar=(e)=>{
        e.preventDefault()
        setMostrar(true)
        setFlex("none")
    }
    const Cambiar =(e) => {
        setNum(e.target.value)
     }

     return (
        <>
        <div className="container-main">
        <form id="formulario" onSubmit={Enviar} style={{ display: flex }}>
            <h2 className="h2">Añadir un número -/+</h2>
            <input className="form-control" type="text" placeholder="Coloque un número"onChange={Cambiar} value ={num} id="num"></input>
            <div className="container-button">
            <button className="btn btn-outline-primary" type="submit">Mandar</button>
            </div>
            </form>

            {mostrar && <Signo num={num}></Signo>}

        </div>
        </>
     )
}