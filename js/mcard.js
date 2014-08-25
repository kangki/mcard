$(document).ready(function(){
var amt = 10,m={};
function src(){ var nm; return nm = ((new Date).getMilliseconds() % amt + 1), (nm < 10 ? './img/0'+nm : './img/'+nm) + '.jpg'; }
function gen(){ var i=0,v,m={}; do{ v = src(); if(m[v]) continue; i++, m[v] = true, $('#album' + i).attr('src',v); }while(i < 5); }

gen();

});
