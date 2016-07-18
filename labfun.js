/**
 * Created by Пользователь on 11.07.2016.
 */

var x="X";
var y="Y";
function outer(){
    var x="x";
    console.log("x: "+x);
    console.log("y: "+y);
    y="y";
    function inner () {
        y="Y";
    }
    inner ();
}
outer();
console.log("x: "+x);
console.log("y: "+y);


// function sayHello(name,sign){
//     // name=name || "Guest";
//     // sign=sign || "...";
// console.log("Hi "+name + sign);
// }
// // sayHello("Mike");
// // sayHello();
//
// function sum(n1,n2) {
//     return n1+n2;
// }
// var res = sum(5,5);
// console.log(res);h
// console.log(sum(1,2));
// function abs(num) {
//     // if(num<0){
//     //     return -num;
//     // }
//     // return num;
//     return (num<0)?-num:num;
// }
// console.log(abs(5));
// console.log(abs(-55));
// function power(a,b) {
//     var reuslt=1;
//     for(var i=0;i<b;i++){
//        reuslt=reuslt*a;
//     }
//     return reuslt;
// }
// console.log(power(2,10));