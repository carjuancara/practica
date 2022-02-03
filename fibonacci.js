// fibo = [0,1,1,2,3,5,8,13,21,34,55]
function fibonacci(pos){
    if (pos===1 || pos===2) return 1
    return fibonacci(pos-1)+ fibonacci(pos-2)
}