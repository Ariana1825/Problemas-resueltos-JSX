export default function Descuento({tutor, hijo}){
    tutor=String(tutor).toUpperCase()
    hijo=String(hijo).toUpperCase()

    let rpta="";

    switch(tutor){
        case "P": if(hijo === "A"){
            rpta="Tendrá de descuento del 60%"
           
        }else if(hijo=== "B"){
            rpta="Tendrá de descuento del 30%"
        }else if(hijo=== "C"){
            rpta="Tendrá de descuento del 10%"
        }
        break

        case "C": if(hijo=== "A"){
            rpta="Tendrá de descuento del 50%"
        }else if(hijo==="B"){
            rpta="Tendrá de descuento del 20%"
        }else if(hijo=== "C"){
            rpta="Tendrá de descuento del 10%"
        }
        break

        case "D": if(hijo === "A"){
            rpta="Tendrá de descuento del 40%"
        }else if(hijo=== "B"){
            rpta="Tendrá de descuento del 20%"
        }else if(hijo=== "C"){
            rpta="No tendrá descuento"
        }
        break

        case "N": if(hijo === "A"){
            rpta="Tendrá de descuento del 40%"
        }else if(hijo=== "B"){
            rpta="Tendrá de descuento del 10%"
        }else if(hijo=== "C"){
            rpta="No tendrá descuento"
        }
        break

        case "O": if(hijo === "A"){
            rpta="Tendrá de descuento del 30%"
        }else if(hijo=== "B"){
            rpta="No tendrá descuento"
        }else if(hijo=== "C"){
            rpta="No tendrá descuento"
       }
       break 

       default: break
    }

    return (
        <div className="respuesta">
        <h2 className="h2-2">{rpta}</h2>
        <button className="btn btn-outline-primary btn-1" onClick={() => window.location.reload()}>Refrescar</button>
       </div>
    )
}
