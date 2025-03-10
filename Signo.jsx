export default function Signo({dia, mes}){
    dia=Number(dia)
    mes=Number(mes)
    let signo=""

    switch(mes){
        case 1 : 
            if(dia<20){
                signo="Capricornio"
            }else{
                signo="Acuario"
            }
        break 

        case 2:
            if(dia<19){
                signo="Acuario"
            }else{
                signo="Piscis"
            }
        break
        case 3:
            if(dia<21){
                signo="Piscis"
            }else{
                signo="Aries"
            }
        break
        case 4:
            if(dia<20){
                signo="Aries"
            }else{
                signo="Tauro"
            }
        break

        case 5:
            if(dia<21){
                signo="Tauro"
            }else{
                signo="Géminis"
            }
        break
        case 6:
            if(dia<21){
                signo="Géminis"
            }else{
                signo="Cáncer"
            }
        break
        case 7:
            if(dia<23){
                signo="Cáncer"
            }else{
                signo="Leo"
            }
        break
        case 8:
            if(dia<21){
                signo="Leo"
            }else{
                signo="Virgo"
            }
        break
        case 9:
            if(dia<23){
                signo="Virgo"
            }else{
                signo="Libra"
            }
        break
        
        case 10:
            if(dia<23){
                signo="Libra"
            }else{
                signo="Escorpio"
            }
        break

        case 11:
            if(dia<22){
                signo="Escorpio"
            }else{
                signo="Sagitario"
            }
        break

        case 12:
            if(dia<22){
                signo="Sagitario"
            }else{
                signo="Capricornio"
            }
        break

    }
    return (
        <>
        <div id="respuesta-2">
            <h2 className="h2">Tu signo zodiacal es {signo}</h2>
            <button className="btn btn-outline-primary btn-1" onClick={() => window.location.reload()}>Refrescar</button>
        </div>
        </>
    )
}