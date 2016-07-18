
var user = ["a","b","c"];
user[5]="x";
for (var i = 0; i<user.length;i++){
    console.log(user[i]);
}
for (var i in user){
    console.log(user[i]);
}
var a = [10, "john",true,5,4,6,9];
var s = a.toString();
console.log(s);
s = a.join('---');
console.log(s);
b=[1,5];
var arr= a.concat(3,b);
console.log(arr);
console.log([3,5]+[5,6]);
arr=a.slice(1);
console.log(arr);
arr=a.slice(1,2);
console.log(arr);
arr=a.slice(-1,-2);
console.log(arr);
arr=a.slice(3,1);
console.log(arr);
arr=a.reverse();
console.log(arr);
arr=a.sort();
console.log(arr);
function mySort(a,b) {
    return a-b;
}
arr=a.sort(mySort);
var v = a.pop(); //extract last element
console.log(v);
v =a.push(12,3); //add element to the end
console.log(v);
v =a.unshift(12,3);//add element to the start
console.log(v);
v =a.shift(); //extract first element
console.log(v);
v =a.splice(1,0); //posicion "1", "2" count
console.log(v);

console.log(arr);
console.log(a[1]);
a.length = 4;
console.log(a);