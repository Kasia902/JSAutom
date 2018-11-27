const fs = require ("fs");
let JSON = require ("JSON");
//let lodash = require ("lodash");
let randomstring = require ("randomstring");
//let write = require ("write");

let path = 'D:\\Temp\\';
let filepath = 'D:\\Temp\\Test.txt';


let student = {name:"Oksana", surname: "Petrova", rate: 21}; //Create a variable student and set ‘name’, ‘surname’ and ‘rate’ in json format

Object.assign(student, { rate: (Math.random() * 100) }); //change rate
Object.assign (student, {name: (randomstring.generate({
    lenght:12, 
    charset: 'alphabetic'
})
    )}); //change name
Object.assign (student, {surname: (randomstring.generate(5))});

//console.log(student.name); 
//console.log(student.rate);

let newstudent = JSON.stringify(student);
console.log(newstudent);

//create folder
fs.mkdirSync(path, { recursive: true }, (err) => {
    if (err) throw err;
  });

  //create and update file
fs.appendFileSync(filepath, newstudent, {'flag': 'w+'}, (err) => { 
    if (err) throw err; 
    console.log(`Saved!`); 
}); 

//read and output file
fs.readFileSync(filepath, (err, data) => { 
    if (err) throw err; 
    console.log(data.toString()); 
});