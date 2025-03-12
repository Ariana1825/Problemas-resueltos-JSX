import {useState} from "react"
import NRomanos from "./NRomanos"
import "./style.css"

export default function ObtenerValores(){
    const [num, setNum]= useState("")
    const [mostrar, setMostrar]= useState(false)
    const [flex, setFlex]=useState("flex")

    const Enviar=(e)=>{
        e.preventDefault()
        
        setMostrar(true)
        setFlex("none")

    }

    const Cambiar=(e)=>{
        if(num>=4000){
            alert("El numero no puede ser o pasar de 4000")
        }else{
            setNum(e.target.value)
        }
    }

    return (
            <>
            <div className="container-main">
            
                        <form onSubmit={Enviar} id="formulario" style={{display: flex }}>
                            <div className="mini">
                            <h2 className="h2">Agrega un número</h2>
                            <input onChange={Cambiar} className="form-control" value={num}></input>
                            </div>
                            
                            <div className="container-button">
                            <button className="btn btn-outline-primary btn-1" type="submit">Mandar</button>
                            </div>
                        </form>
                    
            
                    {mostrar && <NRomanos num={num}></NRomanos>}
                    </div>
            
            </>
        )
}