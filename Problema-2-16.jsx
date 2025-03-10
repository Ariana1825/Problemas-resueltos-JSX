import {useState} from "react"
import Operacion from "./Comp-2-16"
import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Articulos(){
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
                <h2 className="h2">Ingresa la cantidad de artículos que vas a comprar.</h2>
                <input className="form-control" type="text" placeholder="Coloque un número"onChange={Cambiar} value ={num}></input>
                <div className="container-button">
                <button className="btn btn-outline-primary" type="submit">Mandar</button>
                </div>
                </form>
    
                {mostrar && <Operacion num={num}></Operacion>}
    
            </div>
            </>
         )

}