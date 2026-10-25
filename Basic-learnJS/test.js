console.log('I love you shraddha (Appna collage)');
console.log('Shashi starting today jS with shraddha vedio');
//string
fullname = 'shashi';
console.log(fullname);
//number
age = 22;
console.log(age);
//null = value is null (we know) adn undefined= we dont what the value is
x=null;
y=undefined;
console.log(x);
console.log(y);
//boolean
isfollow=true;
console.log(isfollow);
isUnfollow=false;
console.log(isUnfollow);

//its dynamic typed programming language we can change the data type of variable

//assignment operator
//a=b; //a value of b is assigned to a (b store in a)


//Rules of variable declaration
//variable are case sensitive  example : fullname and Fullname are different variable
//only letters, numbers, $ and _ are allowed in variable name but it should not start with number
//space not allowed in variable name
//first letter should be $ or _ or letter
//reverded word not allowed as variable name example : var, let, const, if, else, for, while etc

//case sensitive
/* example
fullName = 'shashi'; camel case
FullName = 'shashi'; passcal case
full_name = 'shashi'; snake case
Full-Name = 'shashi'; kebab case (not allowed in variable name)
*/

//Keyword
var name='shashikant';
var name='shashiupdate';
console.log(name); //shashiupdate
//var allows us to redeclare the variable and update the value of variable global scope variable

let age3=25;
age3=26;
console.log(age3); //26
let c;
console.log(c); //undefined
//let does not allow us to Not-redeclare the variable but we can update the value of variable block scope variable


const PI=3.14;
//PI=4.12; //error: Assignment to constant variable.
 console.log(PI);    //3.14
//need to initialize the value of const variable at the time of declaration
//const does not allow us to Not-redeclare the variable and also does not allow us to update the value of variable block scope variable





//Data Type in javascript
//Primitrive data type: string, number, boolean, null, undefined, symbollet [x=symbol('shashi')---> x=Symbol(shashi],bigint [let a=BigInt(111)---> a=111n]


//Non-primitive data type: object (array, function, date, etc)
//Object is collection of values primitive and it is non-primitive data type  [age:22, name:'shashi', isfollow:true]
let person={
    name:'shashi',
    age:22,
    isfollow:true
};
console.log(person); //{ name: 'shashi', age: 22, isfollow: true }
console.log(person["isfollow"]);
console.log(person.isfollow); //true
//we can access the value of object by using dot notation and bracket           
person["isfollow"]=false;
console.log(person.isfollow); //false
console.log(typeof person); //object
console.log(typeof person.name); //string
console.log(typeof person["isfollow"]); //boolean
//we can update the value of object by using dot notation and bracket



//comments//single line comment
/* multi line comment
multi line comment  
*/


//a+b expression a and b are operands and + is operator

//operators in javascript

let a=10;
let b=5;

console.log("a+b=",a+b); //a+b= 15 addition
console.log("a-b=",a-b); //a-b= 5 subtraction
console.log("a*b=",a*b);    //a*b= 50 multiplication
console.log("a/b=",a/b);    //a/b= 2 division
console.log("a%b=",a%b);    //a%b= 10 modulo
console.log("a**b=",a**b);  //a**b= 10 to the power of 5 exponentiation




//unary operator
let d=10;
console.log(-d); //-10
console.log(+d); //10
console.log(++d);   //11 prefix increment operator
console.log(d++);   //11 postfix increment operator
console.log(--d);   //11 prefix decrement operator
console.log(d--);   //11 postfix decrement operator  
console.log(d);   //10