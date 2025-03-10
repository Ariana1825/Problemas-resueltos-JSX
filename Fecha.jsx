export default function Fecha({dia, mes, año}){
    dia=Number(dia)
    mes=Number(mes)
    año=Number(año)

    if(dia>31 || 0>dia){
        return (
            <div className="rpta-error">
                <h2>La fecha no puede existir porque la cantidad de días es irracional.</h2>
                <button className="btn btn-outline-primary button" onClick={() => window.location.reload()}>Refrescar</button>
            </div>
            
        )
    }

    switch (mes){
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        if (0 < dia && dia <= 31) {
            return (<div className="rpta">
            <h2>La fecha puede existir porque tiene lógica: {dia} {mes} {año}</h2>
            <button className="btn btn-outline-primary button" onClick={() => window.location.reload()}>Refrescar</button>
           </div>)
        }
        break;
    
    case 4: case 6: case 9: case 11:
        if (0 < dia && dia <= 30) {
            return (<div className="rpta">
                <h2>La fecha puede existir porque tiene lógica: {dia} {mes} {año}</h2>
                <button className="btn btn-outline-primary button" onClick={() => window.location.reload()}>Refrescar</button>
               </div>)
        }
        break;


        case 2:
        
            if(año%100==0 && (0<dia && dia<29)){
                return (<div className="rpta">
                    <h2>La fecha puede existir porque tiene lógica: {dia} {mes} {año}</h2>
                    <button className="btn btn-outline-primary button" onClick={() => window.location.reload()}>Refrescar</button>
                   </div>)
                
            }else if((año%400==0) && (año%4==0) && (0<dia && dia<=29)){
                return (<div className="rpta">
                    <h2>La fecha puede existir porque tiene lógica: {dia} {mes} {año}</h2>
                    <button className="btn btn-outline-primary button" onClick={() => window.location.reload()}>Refrescar</button>
                   </div>)
            }else if(año%100==0 && dia==29 ){
                return (<div className="rpta-error">
                    <h2>La fecha no puede existir porque no tiene lógica.</h2>
                    <button className="btn btn-outline-primary button" onClick={() => window.location.reload()}>Refrescar</button>
                </div>)
            }else if(dia>29){
                return (<div className="rpta-error">
                    <h2>La fecha no puede existir porque no tiene lógica.</h2>
                    <button className="btn btn-outline-primary button" onClick={() => window.location.reload()}>Refrescar</button>
                </div>)
            }

            break

            default:
                return (
                    <div className="rpta-error">
                        <h2>La fecha no puede existir porque no tiene lógica.</h2>
                        <button className="btn btn-outline-primary button" onClick={() => window.location.reload()}>Refrescar</button>
                    </div>
                    
                )
        

    }
}