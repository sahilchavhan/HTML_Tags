// syncronization or blocling
// line by line execution

//asyncronization or non-blocking
// line by line execution not guraanted callbacks will fire

const fs=require('fs');
let t=fs.readFile("sahil.text","utf-8",(error,data)=>{
    console.log(data);

});
console.log("this is message");