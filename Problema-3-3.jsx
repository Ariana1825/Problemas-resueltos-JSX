import {useState} from "react"
import Estacion from "./Estacion"
import "./style.css"
export default function Fecha(){
    const [mes, setMes]=useState(1)
    const [dia, setDia]=useState(1)
    const [mostrar, setMostrar]=useState(false)
    const [flex, setFlex]=useState("flex")

    const Enviar=(e)=>{
        e.preventDefault()
        if(!mes || !dia){
            alert("Seleccionar una opción")
        }else{
        setMostrar(true)
        setFlex("none")
        }
    }

    const SeleccionarMes=(event)=>{
        setMes(event.target.value)
    }
    const SeleccionarDia=(event)=>{
        setDia(event.target.value)
    }
    return (
        <>
        <div className="container-main">

            <form onSubmit={Enviar} id="formulario" style={{display: flex }}>
                <div className="lista-mes">

                <select className="form-select form-select-lg mb-3" id="opciones" name="opciones" value={mes} onChange={SeleccionarMes}>
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

                <div className="lista-dia">

                <select className="form-select form-select-lg mb-3" id="opciones" name="opciones" value={dia} onChange={SeleccionarDia}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
                  

                </select>

                </div>

                <div className="container-button">
                <button className="btn btn-outline-primary btn-1" type="submit">Mandar</button>
                </div>
            </form>
        

        {mostrar && <Estacion mes={mes} dia={dia}></Estacion>}
        </div>
        </>
    )
}