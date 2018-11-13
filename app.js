//1. Write a JavaScript function to get the last element of an array
function lastElement(array)
{
    let n = ( array.length - 1 );
    //console.log(n);
    console.log( array.slice(n) );
}
lastElement([ 23, 44, 14, 3, 5, 7 ]);

//2. Write a simple JavaScript program to join all elements of the following array into a string
function convertArrayToString(array)
{
    console.log( array.toString() );

    console.log( array.join(";") );
}
convertArrayToString([ 23, 44, 14, 3, 5, 7 ]);

//3. There are two arrays with individual values, 
//write a JavaScript program to compute the sum of each individual index value from the given arrays and save them to third array
function sumArraysElements(array1, array2)
{
    if (array1.length != array2.length)
        throw new Error ("Arrays are not same lenght");

    for ( let i = 0; i < array1.length; i++ )
    {
       
        console.log( array1[i] + array2[i] );
    }
}

let a = [ 1, 4, 5, 9 ];
let b = [ 3, 7, 34, 1 ];
let c = sumArraysElements(a, b);

//4. Write a JavaScript program to calculate the area and perimeter of a rectangle. 
//Rectangle should be an object with properties width and height and methods getArea() and getPerimeter();

let rectangle = {
    width: 12,
    height: 4,
    area: function getArea() { return this.width * this.height; },
    perimeter: function getPerimeter() { return ( this.width * 2 ) + ( this.height * 2 ); }
};
console.log(`Area is: ${rectangle.area()}`);
console.log(`Perimeter is: ${rectangle.perimeter()}`);