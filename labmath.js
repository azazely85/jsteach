/**
 * Created by Пользователь on 18.07.2016.
 */

// var a= [5,12];
// var b = [];
// a[99]=7;
// for (var i=0;i<a.length;i++){
//     b.push(Math.pow(a[i],2));
//     //console.log(b[i]);
// }
// for (var i in a){
//     b.push(Math.pow(a[i],2));
//     //console.log(b[i]);
// }
// console.log(b);
// var a = [5, 45, 3, 100];
// var b = Math.min.apply(Math,a);
// clg(b);
// (function () {
//     clg(b);
// })();//самовызывающая функция
function foo() {
    var a =[];
        for(var i=0;i<3;i++){
            (function (j) {
            a.push(function (){
                clg(j);
            });})(i);
        }
    return a;
}
var x = foo();
x[0]();
x[1]();
x[2]();
//Math.min(5, 45, 3, 100);
//Math.max(5, 45, 3, 100);
// console.log(Math.PI);
// console.log(Math.pow(4,2));//degree