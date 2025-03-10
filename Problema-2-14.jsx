import {useState} from "react"
import "./style.css"
import TomarNotas from "./Comp-2-14"

export default function Triangulo(){
    const [CDNotas, setCDNotas]=useState("")
    const [mostrar, setMostrar]=useState(false)
    const [flex, setFlex]=useState("flex")
    

    const Enviar=(e)=>{
        e.preventDefault()
        setMostrar(true)
        setFlex("none")
    }

    const Cambiar =(e) => {
        setCDNotas(e.target.value)
     }
    return (
        <>
        <div className="container-main" >
        <form className="formulario" onSubmit={Enviar} style={{display: flex}}>
            <h2 className="h2">Añadir la cantidad de notas a revisar.</h2>
            <input className="form-control" type="text" placeholder="Coloque un número"onChange={Cambiar} value ={CDNotas}></input>
            <div className="container-button">
            <button className="btn btn-outline-primary" type="submit">Mandar</button>
            </div>
        </form>
        {mostrar && <TomarNotas CDNotas={CDNotas}/>}
        </div>
        </>
    )
}
