const sum=()=>{
    let  userInput = prompt('Enter Number separrate by commas')
    let splitstr=userInput.split("")
    let results=0

    console.log(splitstr);

for(let i=0; i<splitstr.length; i++){
    results+=parseInt(splitstr[i])
}

return results
}
console.log(sum());