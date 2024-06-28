var y = function fatorial(n){
    let fat = 1
    for(var c = n;c>1;c--){
        fat*= c 
    }
    return fat
}
console.log(y(1))