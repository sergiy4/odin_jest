
const calculator = () =>{
    const add = (a,b) =>{
        return (typeof(a) === "number" && typeof(b) === "number") ? a+b : false
       
    }

    const subtract = (a,b) =>{
        return (typeof(a) === "number" && typeof(b) === "number")? a-b : false
    }

    const divide = (a,b) =>{
        return (typeof(a) === "number" && typeof(b) === "number") ? (b===0) ? false : Math.round((a/b)*100)/100 : false
    }

    const multiply = (a,b) =>{
        return (typeof(a) === "number" && typeof(b) === "number") ? a*b : false
    }

    return{
        add,
        subtract,
        divide,
        multiply
    }
}
let calc = calculator()
export default calc;