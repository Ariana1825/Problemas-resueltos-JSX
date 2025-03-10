export default function Operador({mes, año}){
    año= Number(año)
    mes=Number(mes)
    let dias=""

    switch(mes){
        case 1: dias= "31"
        break

        case 2: 
        if(año%4==0){
            if(año%400==0){
                dias="29"
            }else if(año%100==0){
                dias="28"
            }
        }else{
                dias="28"
        }
        break

        case 3: dias= "31"
        break
        
        case 4: dias= "30"
        break

        case 5: dias= "31"
        break

        case 6: dias= "30"
        break
        
        case 7: dias= "31"
        break

        case 8: dias= "31"
        break

        case 9: dias= "30"
        break

        case 10: dias= "31"
        break

        case 11: dias= "30"
        break

        case 12: dias= "31"
        break

        default: break


    }
    return (
        <>
        <div className="respuesta">
            <h2>La cantidad de días que tiene esa fecha es {dias}</h2>
            <button className="btn btn-outline-primary button" onClick={() => window.location.reload()}>Refrescar</button>
        </div>
        </>
    )

}