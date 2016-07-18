/**
 * Created by Пользователь on 08.07.2016.
 */
var num= 3;
var str = "На ветке сидит "+num+" ворон";
var x="";
if(num%100<11 || num%100>14){
    switch(num%10){
        case 1: x="a";
            break;
        case 2:
        case 3:
        case 4: x="ы";
    }
}
console.log(str+x);

// var x=2;
// switch(x){
//     case 0: console.log("Zero");
//         break;
//     case 1: console.log("One");
//         break;
//     case 2: console.log("Two");
//         break;
//     default: console.log("not in switch");
// }