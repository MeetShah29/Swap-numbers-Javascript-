test = () => {
    var a = 10;
    var b = 5;
    var temp = a
    a = b
    b = temp
    return { a, b }
}
console.log(test())
