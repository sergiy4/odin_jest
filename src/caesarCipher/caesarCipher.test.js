import caesarCipher from "./caesarCipher"

test('check result caesarCipher', ()=>{
    expect(caesarCipher("i am big",3)).toBe("l dp elj")
})

test('check register caesarCipher', ()=>{
    expect(caesarCipher("these are small letters AND THIS IS CAPITAL",3)).toBe("wkhvh duh vpdoo ohwwhuv DQG WKLV LV FDSLWDO")
})

test('check last alphabet letter caesarCipher', ()=>{
    expect(caesarCipher("vwxyz",3)).toBe("yzabc")
})

test('check punctuation caesarCipher', ()=>{
    expect(caesarCipher("v , w ? x! .y .z",3)).toBe("y , z ? a! .b .c")
})

test('check punctuation caesarCipher', ()=>{
    expect(caesarCipher("v , w ? x! .y .z",3)).toBe("y , z ? a! .b .c")
})

test('check invalid input caesarCipher', ()=>{
    expect(caesarCipher(234,3)).toBe(false)
})

test('check negative shift caesarCipher', ()=>{
    expect(caesarCipher("abc",-3)).toBe("xyz")
})

test('check zero shift caesarCipher', ()=>{
    expect(caesarCipher("abc",0)).toBe("abc")
})