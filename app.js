//1. Write a JavaScript function to check if given string includes given symbol.
let str1= " A B dlfkjhgdfljh jhdkhkjh jbkjhjkh";
  function checksymbol(string) {
      let result=/d/g.test(string);
    return result;
  }
  let a= checksymbol (str1);
  console.log (`Contains: ${a}`);

  //2. Write a JavaScript function to check whether a string is blank or not.
  let str2="fdhtr ";
  function checkIfBlank(string) {
      let result=string.replace(" ", "");
      if (result.length > 0) 
      return false;
      else 
      return true;
  }
  let b=checkIfBlank (str2);
  console.log (`Blank: ${b}`);

//3. Write a JavaScript function to convert a string in abbreviated form. console.log(abbrev (“Nazar Babii")) – should be “N.B.”
let str3="khrystyna shumska";
function abbreviate(string){
    let splitted=string.split (' ');
if (splitted.length > 1) {
    return (splitted[0].charAt(0) + "." + splitted[1].charAt(0) + "."); 
}
}
let c=abbreviate(str3);
console.log(`Abbreviation of given name is: ${c.toUpperCase()}`);

//4. Write a JavaScript function that accept two integers and display the larger.
let d=167;
let e=277;
function biggerNumber (d,e){
    if (d>e){
        result=d;
        //console.log (`${a} is bigger than ${b}`);
        return result;
    }
    else if (d===e){
        result=d;
    //console.log (`${a} is equal to ${b}`);
    return result;
    }
    else {
        result=e;
    //console.log (`${b} is bigger than ${a}`);
    return result;
    }
}
let f= biggerNumber(d,e);
console.log(`Bigger number is ${f}`);

//5. Write a JavaScript function with conditional statement to sort three numbers.
let num1=23;
let num2=34;
let num3=12;
function sortNumbers(){
    if (num1>num2 && num1>num3){
        if (num2>num3){
        console.log(`Sorted numbers: ${num1}, ${num2}, ${num3}`);
        }
        else {
            console.log (`Sorted numbers: ${num1}, ${num3}, ${num2}`);
        }
    }
    if (num2>num1 && num2>num3){
        if (num1>num3){
        console.log(`Sorted numbers: ${num2}, ${num1}, ${num3}`);
        }
        else {
            console.log (`Sorted numbers: ${num2},${num3},${num1}`);
        }
    }
    if (num3>num1 && num3>num2){
        if (num1>num2){
        console.log(`Sorted numbers: ${num3},${num1},${num2}`);
        }
        else {
            console.log(`Sorted numbers: ${num3}, ${num2},${num1}`)
        }
    }
}
sortNumbers(num1,num2,num3);