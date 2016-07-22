/**
 * Created by Пользователь on 21.07.2016.
 */
var n=125.12246;
clg(n.toFixed(2));
var n2=parseInt("25.456f5")+200;
clg(n2);
clg(parseFloat("25.2545b5"));
clg(parseInt("ff",16));
clg(n2.toString(16));
var s="hello";
clg(s.length);
clg(s.concat(" ", "world"));
clg(s.toLowerCase());
clg(s.toUpperCase());
clg(s.charAt(1));

var s2=s.charCodeAt(1);
clg(s.charCodeAt(1));
clg(String.fromCharCode(s2));
clg(s.slice(1,4));
clg(s.substring(1,4));
clg(s.indexOf("el",1));
clg(s.lastIndexOf("ll"));

var s2="Мы знаем что слово монохромка есть в предложении";
var txt  = "хром";
var pos = s2.indexOf(txt);
if(pos>-1){
var start=s2.lastIndexOf(" ", pos)+1;
var end = s2.indexOf(" ", pos);
    if(end==-1){
        var word=s2.slice(start);
    }else{
        var word=s2.slice(start,end);
    }
clg(word);
}else{
    clg("word is undefined")
}
