//object example
let car={
    brand:"Toyota",
    model:"Camry",
    year:2021,
};
console.log("car object:",car);
//accessing object parameters
console.log("car brand:",car.brand);
//array example
let colours=["red","green","blue"];
console.log("colours array",colours);
let a=1,b=4;
console.log(a+b);
console.log(a%b)


//camparison operators
console.log(5=='5');//equal(value)
console.log(5==='5');//strict equal(value+type)


//logical operators
let x=5,y=10,z=15;
console.log(x<y&&y<z);//and
console.log(x>y||y<z)//or
console.log(!(a<b))//not

let num=10
num+=5;
console.log(num);

//ternary operators(short hand  if-else)
let age=18;
let result=(age>18)?"adult":"minor";
console.log(result);