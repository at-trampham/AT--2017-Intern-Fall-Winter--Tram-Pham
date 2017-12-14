# Javascript Exercise

### Knowledge round-up

 **Javascript**
 -What are the differences between 'function declaration' and 'function expressions'?
+A Function Declaration defines a named function variable without requiring variable assignment. 
+A Function Expression defines a function as a part of a larger expression syntax (typically a variable assignment ). Functions defined via Functions Expressions can be named or anonymous. 
**example**
* Function Declaration *
```
function test(val){
    return val=== true;
}
```
* Function Expression *
```
var isTest = function(val){
    return val === true;
}
```
+Function declaration can be called either before declaration or after declaration, while the Function expression must have a sequence.
**example**
* Function Declaration *
```
myFunc();
function myFunc (){
    alert(“Hello Guy”);
}
```
```
function myFunc (){
    alert(“Hello Guy”);
}
myFunc();
```
 ->Both are executed
* Function Expression *
```
expression();
var expression = function (){
    alert(“Error”);
}
```
->Error
```
var expression = function (){
    alert(“OK”);
}
expression();
```
->success

-What is 'parameters' in function using for?
+Parameters are variables listed as a part of the function definition,declared when we define a function.

### Playground
1. Write a JavaScript function which accepts an argument and returns the type.
Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
```
function checktype (n) {
  return typeof n;
}
console.log(checktype(124));
console.log(checktype('aaa'));
```
2. Write a JavaScript function to extract unique characters from a string.
```
function unique_char(str1)
{
 var str=str1;
 var uniql="";
 for (var i=0;i < str.length;i++)
 {
 if(uniql.indexOf(str.charAt(i))==-1) {
  uniql += str[i];  
   }
  }
  return uniql;  
}  
console.log(unique_char("absdasd"));
```
3. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
```
function uppercase(str)
{
  var array = str.split(' ');
  var newarray= [];
    
  for(var i = 0; i < array1.length; i++) {
      newarray.push(array[i].charAt(0).toUpperCase()+array[i].slice(1));
  }
  return newarray.join(' ');
}
console.log(uppercase("pham thi mai tram"));
```
4. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
```
function char_count(str, letter) 
{
 var letterCount = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letterCount += 1;
      }
  }
  return letterCount;
}

console.log(char_count('JavaScript function', 't'));
```
5.Write a JavaScript function to merge two arrays and removes all duplicates elements. Sort result from lowest to highest.
```
Input: array1 = [1, 3, 2]; array2 = [2, 30, 1]; 
Output: [1, 2, 3, 30]
```
```
let array1 = [ 1, 1, 4 ]; 
let array2 = [ 2, 30, 3 ]; 

function mergeArray( a1, a2 ) {
	let arrnew = a1.concat( a2 );
	return arrnew = arrnew.filter( ( el, i ) => {
		return arrnew.indexOf( el ) === i;
	}).sort( ( a, b ) => a - b );
}

console.log( mergeArray( array1, array2 ));
```