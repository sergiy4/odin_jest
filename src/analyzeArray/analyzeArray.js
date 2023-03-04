export default function analyzeArray(arr){
    if(!Array.isArray(arr)) return false
    if(arr.length === 0) return false
    
    for(let el of arr){
        if(typeof(el) !== "number") return false
    }

    const average = averageF(arr);
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const length = arr.length;

    return{
        average,
        min,
        max,
        length
    }

}



function averageF(arr){
    let sum = arr.reduce((prev,next) => prev+next);
    let average = sum/arr.length;
    return average
}