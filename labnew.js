/**
 * Created by User on 22.07.2016.
 */
var aIdx = 97;
var alphabet = "";
for(var i=0;i<26;i++){
    alphabet +=String.fromCharCode(aIdx+i);
    clg(alphabet);
}
var digits="";

for(var i=0;i<10;i++){
    digits +=i;
    clg(digits);
}
function builString(n,callback) {
    var result;
    for (var i=0;i<n;i++){
        result +=callback(i);
    }
    return result;
}
alphabet=builString(26,function (i) {
    var aIdx = 97;
    return String.fromCharCode((aIdx+i));
});
