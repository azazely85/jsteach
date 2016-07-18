/**
 * Created by Пользователь on 13.07.2016.
 */
var user ={
    "name":"John",
    "age":"25",
    "admin":true,
    say:function (word) {console.log(word+" from "+this.name)}
};
user.say("Hello");
for(var i in user){
    console.log(user[i]);
}

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
