/**
 * Created by Пользователь on 12.07.2016.
 */
function compare(x) {
   return function (y) {
        if(y>x){
            return true;
        }else if(y<x){
            return false;
        }else{
            return null;
        }
    }
}
var c = compare(10);
console.log(c(10));
console.log(c(9));
console.log(c(12));
console.log(compare(10)(9));
// x=function (name) {
//     return 'Hello, '+name;
// }
// console.log(x("Mike"));
// function foo(base, count,action){
//     for(var i = base;i<=count;i++){
//         action(i);
//     }
// }
// foo(1,10);
// function say(greet){
//     return function (name) {
//         return greet + " " + name;
//     }
// }
// var en = say("Hello");
// console.log(en("Mike"));
// var ru =say("Priv");
// console.log(ru("Vasha"));
// function outer() {
//     function inner(x) {
//         console.log(x);
//     }
//     return inner;
// }
// var x =outer();
// x("Hello");