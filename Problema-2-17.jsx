import {useState} from "react"
import Descuento from "./Salario"
import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Salario(){
    const [salario, setSalario]=useState("")
    const [mostrar, setMostrar]= useState(false)
    const [flex, setFlex]=useState("flex")

    const Enviar=(e)=>{
        e.preventDefault()
        setMostrar(true)
        setFlex("none")
    }
    const Cambiar=(e)=>{
        setSalario(e.target.value)
    }

    return (
               <>
               <div className="container-main">
               <form id="formulario" onSubmit={Enviar} style={{ display: flex }}>
                   <h2 className="h2">Ingresa tu salario mensual.</h2>
                   <input className="form-control" type="text" placeholder="Coloque un número"onChange={Cambiar} value ={salario}></input>
                   <div className="container-button">
                   <button className="btn btn-outline-primary" type="submit">Mandar</button>
                   </div>
                   </form>
       
                   {mostrar && <Descuento salario={salario}></Descuento>}
       
               </div>
               </>
            )
}