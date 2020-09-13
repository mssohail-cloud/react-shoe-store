export default function formateCurrenty(num){
    return "$" + Number(num.toFixed(1)).toLocaleString() + " ";
}