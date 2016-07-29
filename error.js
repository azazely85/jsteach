/**
 * Created by User on 29.07.2016.
 */
var err0=new Error("На ноль делить нельзя");
try{
    var x=1, y=0;
    if(y==0)
        throw err0;
    clg(x*y);
}catch (e){
    clg(e.name,e.message);
}