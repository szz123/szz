var username=getCookie("use");
var center=document.getElementsByClassName("center1")[0];
var span=center.getElementsByTagName("span")[1];
span.innerHTML=username;
span.style.color="red";
span.style.fontSize="30px";
var span1=center.getElementsByTagName("span")[2];
var email=getCookie("email");
span1.innerHTML=email;