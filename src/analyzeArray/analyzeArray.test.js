import analyzeArray from "./analyzeArray";

test("check basic function", ()=>{
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    })
})

test("check invalid input", ()=>{
    expect(analyzeArray(["sdf",8,3,4,2,6])).toBe(false)
})

test("check empty arr ", ()=>{
    expect(analyzeArray([])).toBe(false)
})

test("check empty arr ", ()=>{
    expect(analyzeArray([1])).toEqual({
        average: 1,
        min: 1,
        max: 1,
        length: 1
    })
})