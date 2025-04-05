export default function Numeros({numeros}){
    let i=0
    let impares=[]
    let pares=[]
    let negativos=[]
    let positivos=[]

    do{
        let num=Number(numeros[i])

        if (num > 0) {
            positivos.push(num);
        } else {
            negativos.push(num);
        }

        if (num % 2 === 0) {
            pares.push(num);
        } else {
            impares.push(num);
        }
        i++

    }while(i<numeros.length)
       

    return (
        <div className="respuesta">
        <h2 className="h2-2"> Positivos:{positivos}</h2>
        <h2 className="h2-2"> Negativos:{negativos}</h2>
        <h2 className="h2-2">Impares:{impares}</h2>
        <h2 className="h2-2">Pares:{pares}</h2>

        <button className="btn btn-outline-primary btn-1" onClick={() => window.location.reload()}>Refrescar</button>
       </div>
    )
}
