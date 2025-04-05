export default function Ecuacion(){
    let rpta=""
    let inc=0.0001
    let x=0
    let areamax=0
    let xmax=0

    do{
        x=x+inc
        let area= x *(20-x)
        if(area>areamax){
            areamax=area

            xmax=x
        }

    }while(x<= 20 - inc)
        rpta=`Área máxima: ${Math.round(areamax)}, Dimensiones: ${Math.round(xmax)},${Math.round(20-xmax)}`

    return (
        <div className="respuesta">
        <h2 className="h2-2">Ecuacion vale: {rpta}</h2>
        <button className="btn btn-outline-primary btn-1" onClick={() => window.location.reload()}>Refrescar</button>
       </div>
    )
}
