function fatorial(n){
    if (n == 0){
        return 1
    }
    else{
        return n * fatorial (n-1) //Pega a função e diminui em 1 o parãmetro para multiplicar pelo fatorial anterior (modo mais rápido)
    }

}
    console.log(fatorial(10))