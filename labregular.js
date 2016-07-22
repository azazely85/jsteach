/**
 * Created by User on 22.07.2016.
 */
var s="Something wrong before this nothing";
var x =s.split(" ");
var z = s.replace("wrong","bad");
s="vasiliy@mail.ru";
clg(z);
z=s.match(/([a-z]+)@([a-z]+)\.([a-z]{2,})/i);//return null if no regular
clg(z);
var regular =/@/;
var result=s.search(regular);
clg(result);
result=regular.test(s);
clg(result);
regular = /gmail\|yandex/; // | == or
result=s.search(regular);
clg(result);
regular = /[abc]/;// a or b or c
regular = /[^abc]/;// denial a or b or c
regular = /[a-zA-Z]/;//range from a to z and A to Z
regular = /ab{2,4}c/; // min 2 b max 4 b between a and c
regular = /ab{2,}c/; // min 2 b max infinity b between a and c
regular = /ab{2}c/; // only 2 b
date = "25-02-2012";
regular = /^\d\d?-\d\d?-\d{4}$/;//\d from 0 to 9
regular = /^\d{1,2}-\d{1,2}-\d{4}$/;
regular = /^[0-3]?\d-[0-2]?\d-[1-2]\d{3}]$/; //^ - limitation start, $ - limitation end
clg(regular.test(date));
regular = /b/i;//i b or B
regular = /b/img; // g -global more than 1, m - multi line ("abc\ndfg\nxyb")
regular = /(['"])[^'"]*["']*\1/;// group()

s ="12BnM";
x=s.replace(/^(\d+)([a-z]+)$/i,"$2-$1");
clg(x);
s = "Smith, John\nDow, Mike\nWilliams, Deil";
x=s.replace(/([a-z]+), ([a-z]+)/igm,"$2 $1");
clg(x);