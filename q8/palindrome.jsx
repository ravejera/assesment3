let str="reviver"

const palidrome=()=>{
let caseSentive=str.toLowerCase()
let resulst=""
for(let i=caseSentive.length-1; i>=0; i--){
    resulst+=caseSentive[i]
}
return caseSentive===resulst
}
console.log(palidrome());