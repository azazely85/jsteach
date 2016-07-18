/**
 * Created by Пользователь on 13.07.2016.
 */
// //
// var o = {
//     param:10,
//     method: function () {
//         var self = this;
//         function test() {
//             console.log(self.param)
//         }
//         test();
//     }
// };
// o.method();
function some(a,b){
    console.log(this.age)
console.log(some.length);
    console.log(arguments.length);
    console.log(arguments[2]);

}

// var john = {
//     "name": "John",
//     say: function (word) {
//         console.log(word + " from " + this.name);
//     }
// };
// var age=10;
//some();
var mike={
    name:"Mike",
    age:100
};
some.call(mike,10,20,105);
// mike.x=john.say;
// mike.x("Hello");
// /*Lab start*/
// var book1={
//     title:"Dorian",
//     pubYear:1985,
//     price:105,
//     show:function () {
//         console.log(this.title + " - "+this.price)
//     }
// };
// function showBook() {
//     console.log(this.title + " - "+this.price)
// }
// var book2={
//     title:"Dorianin",
//     pubYear:1885,
//     price:18,
//     show:showBook
// };
// // for(var i in book1){
// //      console.log(book1[i]);
// // }
// book1.show();
// book2.show();
// /*Lab end*/
// function same() {
//     console.log(this.age)
// }
// var user ={
//     "name":"John",
//     "age":"25",
//     "admin":true,
//     say:function (word) {
//         console.log(word+" from "+this.name);
//         this.foo()
//     },
//     foo:same
// };
// user.say("Hello");
// for(var i in user){
//     console.log(user[i]);
// }
//
// var user1={
//     age:35,
//     foo:same
// }
// console.log(user1.foo());
// var user ={
//     0:"a",
//     1:"b",
//     2:3
// }
// for(var i=0;i in user;i++){
//     console.log(user[i]);
// }

// var user1={
//     name:"Make",
//     age:35,
//     "user name":"John Snow"
// }
// console.log(user1.name);
// console.log(user1["user name"]);

// var user={};
// user.name = "john";
// user.age = 25;
