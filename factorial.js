function factorial(num){
    if (num === 0 || num === 1) {return 1}
    if (num<0) {return 0}
    return num * factorial(num-1)
}