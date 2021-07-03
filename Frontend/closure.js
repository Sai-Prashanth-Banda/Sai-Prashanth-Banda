function outer()
{
var a=100
function inner(){
console.log("inner function")
console.log(a)
}
console.log("outer function")
inner();
}
outer();
//inner();//will get error if executed