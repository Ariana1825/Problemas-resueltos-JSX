export default function Estacion({dia, mes}){
    dia=Number(dia)
    mes=Number(mes)
    let estacion=""

    switch(mes){
        case 1 : 
        estacion= "verano"
        break
        
        case 2 :
        estacion= "verano"
        break

        case 3 :
        if(dia <21){
        estacion= "verano"
        }else{
            estacion= "otoño"
        }
        break
        
        case 4:
        estacion="otoño"
        break
        
        case 5:
        estacion="otoño"
        break
        
        case 6:
        if(dia<22){
        estacion= "otoño"
        }else{
        estacion= "invierno"
        }
        break

        case 7:
        estacion="invierno"
        break

        case 8:
        estacion="invierno"
        break

        case 9:
        if(dia<23){
        estacion="invierno"
        }else{
        estacion="primavera"
        }
        break

        case 10:
        estacion="primavera"
        break

        case 11:
        estacion="primavera"

        case 12:
        if(dia<21){
        estacion="primavera"
        }else{
        estacion="verano"
        }
        break

        default:
        break

    }
    return (
        <>
        <div className="respuesta">
            <h2>La estacion es {estacion}</h2>
            <button className="btn btn-outline-primary button" onClick={() => window.location.reload()}>Refrescar</button>
        </div>
        </>
    )
}