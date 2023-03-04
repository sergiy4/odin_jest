import reverseString from "./reverseString";

test('is string reverse', ()=>{
    expect(reverseString("abcbcsssa")).toBe("assscbcba")
})

test('is string reverse', ()=>{
    expect(reverseString("red car")).toBe('rac der')
})

test('empty string',()=>{
    expect(reverseString()).toBe(false)
})

test('numbers',()=>{
    expect(reverseString(123)).toBe(false)
})