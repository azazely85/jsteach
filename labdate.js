/**
 * Created by User on 25.07.2016.
 */
var d = new Date();
//clg(d);
var d = new Date(1234567890000);
//clg(d);
var d = new Date(2014,11); // 2 first params required, January = 0
//clg(d);
d.getDate();
d.getMonth();
d.getDay();// 0 Sunday, 6 Saturday
//clg(d.getDay());
d.getTime();//timestamp
d.valueOf();//timestamp
d.toDateString();//only date
d.toTimeString();//only time
d.setDate(10);
function getDate(date) {
    var f=date.match(/(^\d\d?)-(\d\d?)-(\d{4})$/);
    if(!f)
        throw new Error("Wrong date");
    return new Date(f[3],f[2]-1,f[1]);
}
try{
    var m = getDate("2110-2014");
    clg(m.toString());
}catch (e){
    clg(e.message);
}
