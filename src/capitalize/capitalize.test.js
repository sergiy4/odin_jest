import capitalize from "./capitalize.js";

test("capitalize first letter", () =>{
    expect(capitalize("test")).toBe("Test")
})

test("capitalize first letter", () =>{
    expect(capitalize("joke")).toBe("Joke")
})


test("Leave the letter capitalized if it is capitalized", () =>{
    expect(capitalize("Test")).toBe("Test")
})

test("Character checking", () =>{
    expect(capitalize("!@#$")).toBe("!@#$")
})

test("empty input", () =>{
    expect(capitalize()).toBe(false)
})

test("invalid input", () =>{
    expect(capitalize(23)).toBe(false)
})

