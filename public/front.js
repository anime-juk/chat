
var name1="";
while(name1==""){
name1=prompt("введите свое имя");
console.log(name1);
}
form=document.forms[0];
form.elements[0].focus();
var block = document.getElementsByClassName("bloks");
var port = 3000;
var server = '192.168.0.104';
var socket = io.connect(server + ':' + port);
document.querySelector("#header").innerHTML="Ваше имя:"+name1;
form.elements[1].onclick=function(){
    if(form.elements[0].value != ""){
    let inf=[name1,form.elements[0].value]
    socket.emit('message', inf);}
    form.elements[0].value="";
    block[0].scrollTop = block[0].scrollHeight;
}
socket.on('message', function(msg){
    document.getElementById("b_chat").innerHTML=msg;
    block[0].scrollTop = block[0].scrollHeight;
  });
window.onload=function(){
    socket.on('message', function(msg){
        document.getElementById("b_chat").innerHTML=msg;
        block[0].scrollTop = block[0].scrollHeight;
});
}