export default function Fraccion({num}){

    let ent= num
    num = (Math.round(num))
    let dec= ent - num
    dec= dec.toFixed(3)

   return (<>
    
        <div className="formulario">
        <h2 className="entero">{num}</h2>
        <h2 className="decimal">{dec}</h2>
        <button className="btn btn-outline-primary" onClick={() => window.location.reload()}>Refrescar</button>
        </div>
   
    </>)
}