import {useState} from "react"
import Fecha from "./Fecha"

export default function ObtenerValores(){
    const [dia, setDia]= useState("")
    const [mes, setMes]= useState("")
    const [año, setAño]= useState("")
    const [mostrar, setMostrar]= useState(false)
    const [flex, setFlex]=useState("flex")

    const Enviar=(e)=>{
        e.preventDefault()
        
        setMostrar(true)
        setFlex("none")

    }

    const CambiarDia=(e)=>{
        setDia(e.target.value)
    }

    const CambiarMes=(e)=>{
        setMes(e.target.value)
    }

    const CambiarAño=(e)=>{
        if(año.length==4){
            alert("El límite son 4 cifras.")
        }else{
            setAño(e.target.value)
        }
        
    }

    return (
            <>
            <div className="container-main">
            
                        <form onSubmit={Enviar} id="formulario" style={{display: flex }}>
                            <div className="dia">
                            <h2>Agrega un día en número</h2>
                            <input onChange={CambiarDia} className="form-control" value={dia}></input>
                            </div>
    
    
                            <div className="mes">
                            <h2>Agrega un mes en número</h2>
                            <input onChange={CambiarMes} className="form-control" value={mes}></input>
                            </div>

                            <div className="año">
                            <h2>Agrega un año</h2>
                            <input onChange={CambiarAño} className="form-control" value={año}></input>
                            </div>
                            
            
                            <div className="container-button">
                            <button className="btn btn-outline-primary btn-1" type="submit">Mandar</button>
                            </div>
                        </form>
                    
            
                    {mostrar && <Fecha dia={dia} mes={mes} año={año}></Fecha>}
                    </div>
            
            </>
        )
}