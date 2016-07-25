/**
 * Created by User on 25.07.2016.
 */
function User(name,age) {
    this.name=name;
    this.age=age;
    this.admin=false;
}
var u1 = new User("John",25);
u1.admin = true;
var u2= new User("Mike",33);
//clg(u1.constructor);
var n1= new Number(10);
u1.toString();
User.prototype.x=10;
clg(u2);
u1.x = 20;
clg(u1);
delete u1.x;
clg(u1);
User.prototype.say=function (w) {
    clg(this.name,":",w);
};
u1.say("Mia");
var u = new User("John",35);
function  func() {
    return Array.prototype.slice.call(arguments);
}
func(1,2,3,4,5);
n=10;
Number.prototype.pow= function (x) {
return Math.pow(this.valueOf(),x);
};
n.pow(10);