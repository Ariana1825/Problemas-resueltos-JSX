import {useState} from "react"
import SacarTiempo from "./SacarTiempo"
import "./style.css"

export default function Horas(){
    const [tiempo, setTiempo] = useState([])
    const [num,setNum]=useState("")

    const Enviar=(e)=>{
        e.preventDefault()

        if(!num){
            alert("Llene las casillas")
        }else{
            setTiempo(prev => [...prev, Number(num)]);
            setNum("")
        }
        
    }

    const Cambiar=(e)=>{
        setNum(e.target.value)
        
    }
    

    return (
        <>
         <div className="container-main">
         {tiempo.length <  3 && (
        <form onSubmit={Enviar} id="formulario">

            <div className="mini">

            <h4 className="h4">Añadir hora, min y seg.</h4>

            <input className="form-control" onChange={Cambiar} value = {num}></input>

            </div>
            
            
            <div className="container-button">
                <button className="btn btn-outline-primary boton-1" type="submit">Mandar</button>
            </div>
        </form>
        )}

        {tiempo.length === 3 && <SacarTiempo tiempo={tiempo} />}

        <figure className="rosa corazon"></figure>
        <figure className="rosa gato"></figure>
        <figure className="rosa yashiro"></figure>
        <figure className="rosa moño"></figure>
        <figure className="rosa pokemon"></figure>
        <figure className="rosa natsuki"></figure>
        <figure className="rosa madoka-1"></figure>
        <figure className="rosa sandia"></figure>
        <figure className="rosa disco"></figure>
        <figure className="rosa japones"></figure>
        <figure className="rosa camara"></figure>
        <figure className="rosa varita"></figure>
        <figure className="rosa spotify"></figure>
        <figure className="rosa mariposa"></figure>
        <figure className="rosa leche"></figure>
        <figure className="rosa helado"></figure>
        <figure className="rosa estrellitas"></figure>
        </div>
        </>

    )
}