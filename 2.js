//file serving

// reading text of file
const fs=require("fs");
let text=fs.readFileSync('demo.text','UTF-8');
console.log("teh text is");
console.log(text);

// creatoing a file
let a=fs.writeFileSync("sahil.text","my favourite subject is maths");
console.log("file created is ");

//replacing content of fille
let t=fs.readFileSync('sahil.text','utf-8');
console.log(t);
t=t.replace("maths","physics");
console.log("the updated text is");
console.log(t)