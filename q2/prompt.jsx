let x=[1, 2,3,4]===[1, 2,3,4]
console.log(x);
let y=[1,2,3,4]

x="hello"==="hello"
console.log(x);


// The first log will show false while the second log shows true. 
// This is because arrays are compare based on  references rather than the values like the second log. 
// The  second compare values from stack memory rather the memory loaction references values like arrays that means they need to copy same references memory on heap.

