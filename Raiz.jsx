export default function Raiz(numA, numB){
    let lado0 = Number(numA);
    let lado1;
    let area = Number(numB);
    
    do{
        lado1= area/lado0
        lado0=(lado0+lado1)/2
    }while(Math.abs(lado1-lado0)>0.00001)

    return (
        <div className="respuesta">
        <h2 className="h2-2">lado : {lado0}</h2>
        <button className="btn btn-outline-primary btn-1" onClick={() => window.location.reload()}>Refrescar</button>
       </div>
    )
}
