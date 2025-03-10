import  {useState} from "react"
import Promedio from "./Promedio"

export default function TomarNotas({CDNotas}){
    const [arrayDNotas, setArrayDNotas] = useState([])
    const [nota, setNota]=useState("")

    const Enviar=(e)=>{
        e.preventDefault()
        setArrayDNotas(prev => [...prev, nota])
        setNota("")
        
     
    }
    const Cambiar = (e)=>{
        setNota(e.target.value)
    }
    return (
        <div className="container-main">
            
            {arrayDNotas.length < CDNotas && (
                <form onSubmit={Enviar} className="formulario">
                    <div className="title">
                        <h2 className="h2">Añada la nota</h2>
                    </div>
                    <input
                        className="form-control"
                        placeholder="Añade la nota"
                        value={nota}
                        onChange={Cambiar}
                    />
                    <div className="container-button">
                        <button className="btn btn-outline-primary" type="submit">
                            Mandar
                        </button>
                    </div>
                </form>
            )}

               {arrayDNotas.length === Number(CDNotas) && (
                <Promedio arrayDNotas={arrayDNotas} CDNotas={Number(CDNotas)} />
            )}
        </div>
    );
}