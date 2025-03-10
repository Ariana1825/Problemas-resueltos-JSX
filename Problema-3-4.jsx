import {useState} from "react"
import Operador from "./Operador"
import "./style.css"

export default function CDias(){

    const [mes, setMes]= useState(1)
    const [año, setAño]= useState("")
    const [mostrar, setMostrar]= useState(false)
    const [flex, setFlex]=useState("flex")

    const Enviar=(e)=>{
        e.preventDefault()
        
        setMostrar(true)
        setFlex("none")

    }
    const SeleccionarMes=(event)=>{
        setMes(event.target.value)
    }
    const Cambiar=(e)=>{
        if(año.length==4){
            alert("El límite son 4 cifras")
        }else{
        setAño(e.target.value)
        }
    }
    return (
        <>
        <div className="container-main">
        
                    <form onSubmit={Enviar} id="formulario" style={{display: flex }}>
                        <div className="lista-mes">
        
                        <select className="form-select form-select-lg mb-3" name="opciones" value={mes} onChange={SeleccionarMes}>
                          <option value="1">Enero</option>
                          <option value="2">Febrero</option>
                          <option value="3">Marzo</option>
                          <option value="4">Abril</option>
                          <option value="5">Mayo</option>
                          <option value="6">Junio</option>
                          <option value="7">Julio</option>
                          <option value="8">Agosto</option>
                          <option value="9">Septiembre</option>
                          <option value="10">Octubre</option>
                          <option value="11">Noviembre</option>
                          <option value="12">Diciembre</option>
                        </select>
        
                        </div>


                        <div className="año">

                            <input onChange={Cambiar} className="form-control" value={año}></input>
                        
        
                        </div>
                        
        
                        <div className="container-button">
                        <button className="btn btn-outline-primary btn-1" type="submit">Mandar</button>
                        </div>
                    </form>
                
        
                {mostrar && <Operador mes={mes} año={año}></Operador>}
                </div>
        
        </>
    )
}