import {useState} from "react"
import Operacion from "./Operacion"
import "./style.css"


export default function Calculadora(){
    const [numA,setNumA]=useState("")
    const [numB,setNumB]=useState("")
    const [operador, setOperador]=useState("")
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
    const Click=(tipo)=>{

        setOperador(tipo)
       
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
            <form onSubmit={Enviar} id="formulario"  style={{display: flex}}>

                <div className="mini">
                <h2 className="h2">Agrega un valor para A</h2>
                <input onChange={CambiarA}  className="form-control" value={numA}></input>
                </div>

                <div className="mini">
                <h2 className="h2">Agrega un valor para A</h2>
                <input onChange={CambiarB}  className="form-control" value={numB}></input>
                </div>


                <div className="mini-2">

                <h2 className="h2">Elige un operador</h2>
                <div className="botones">
                <button onClick={() =>Click("suma")} type="button"  className="btn">Suma</button>
                <button onClick={() =>Click("resta")} type="button" className="btn">Resta</button>
                <button onClick={() =>Click("multiplicacion")} type="button" className="btn">Multiplicación</button>
                <button onClick={() =>Click("division")} type="button" className="btn">División</button>
                <button onClick={() =>Click("potencia")} type="button" className="btn">Potencia</button>
                </div>
                
                </div>

                <div className="container-button">
                <button className="btn-1" type="submit">Mandar</button>
                </div>

            </form>

            {mostrar && <Operacion numA={numA} numB={numB} operador={operador}/>}
        </div>
        
        </>

    )
}
