var word = ["aware","ball","dice","Zac","John","Amanda","science","Einstein"]
word.sort()/*
for(pos = 0; pos<word.length; pos++){
    console.log(word[pos]) 
}*/
for(let pos in word){
    console.log(`posição ${pos} tem o valor ${word[pos   ]}`)
}
console.log(word.indexOf("science"))
var num = [9,0,3,4,5,6,1,120]
console.log(num.indexOf(6))
num.sort()
console.log(num.indexOf(1))