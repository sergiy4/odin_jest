import calc from "./calculator";

test("check add",()=>{
    expect(calc.add(1,2)).toBe(3)
})

test("check add",()=>{
    expect(calc.add(28,13)).toBe(41)
})

test("check subtract",()=>{
    expect(calc.subtract(28,13)).toBe(15)
})

test("check subtract",()=>{
    expect(calc.subtract(-23,-13)).toBe(-10)
})

test("check divide",()=>{
    expect(calc.divide(5,2)).toBe(2.5)
})

test("check divide",()=>{
    expect(calc.divide(-23,-13)).toBe(1.77)
})

test("check multiply",()=>{
    expect(calc.multiply(-3,3)).toBe(-9)
})

test("check multiply",()=>{
    expect(calc.multiply(5,5)).toBe(25)
})

test("check invalid input add", ()=>{
    expect(calc.add("sdf",2)).toBe(false)
})

test("check invalid input subtract", ()=>{
    expect(calc.subtract("sdf","sdf")).toBe(false)
})

test("check invalid input multiply", ()=>{
    expect(calc.multiply("sdf",2)).toBe(false)
})

test("check invalid input divide", ()=>{
    expect(calc.divide("sdf",2)).toBe(false)
})

test("check  divide to zero", ()=>{
    expect(calc.divide(2,0)).toBe(false)
})