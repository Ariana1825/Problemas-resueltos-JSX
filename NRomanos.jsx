export default function NRomanos({num}){
    num=Number(num)
    let digitos = num.toString().padStart(4, "0").split('');

    let [a,b,c,d]=digitos

        switch(d){
            case "1": d = "I"; break;
            case "2": d = "II"; break;
            case "3": d = "III"; break;
            case "4": d = "IV"; break;
            case "5": d = "V"; break;
            case "6": d = "VI"; break;
            case "7": d = "VII"; break;
            case "8": d = "VIII"; break;
            case "9": d = "IX"; break;
            default: d = ""; break;
        }

        switch(c){
            case "1": c = "X"; break;
            case "2": c = "XX"; break;
            case "3": c = "XXX"; break;
            case "4": c = "XL"; break;
            case "5": c = "L"; break;
            case "6": c = "LI"; break;
            case "7": c = "LII"; break;
            case "8": c = "LIII"; break;
            case "9": c = "XC"; break;
            default: c = ""; break;
        }

        switch(b){
            case "1": b = "C"; break;
            case "2": b = "CC"; break;
            case "3": b = "CCC"; break;
            case "4": b = "CD"; break;
            case "5": b = "D"; break;
            case "6": b = "DC"; break;
            case "7": b = "DCC"; break;
            case "8": b = "DCCC"; break;
            case "9": b = "CM"; break;
            default: b = ""; break;
        }


        switch(a){
            case "1": a = "M"; break;
            case "2": a = "MM"; break;
            case "3": a = "MMM"; break;
            
            default: a = ""; break;
        }

        return (
            <div className="respuesta">
            <h2 className="h2">{a}{b}{c}{d}</h2>
            <button className="btn btn-outline-primary btn-1" onClick={() => window.location.reload()}>Refrescar</button>
           </div>
        )
}
