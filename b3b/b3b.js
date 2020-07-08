
if (localStorage.getItem("b2b") === null) {
  myObj = {
    "f":[ {mykad:'', tvisit:''} ]
  };
  myJSON = JSON.stringify(myObj);
  localStorage.setItem("b2b", myJSON);
}
function newform(){
  myObj = JSON.parse(window.localStorage.getItem('b2b'));
  p = {mykad: "", tvisit: ""};
  myObj.f.push(p);
  myJSON = JSON.stringify(myObj);
  localStorage.setItem("b2b", myJSON);
}
myObj = JSON.parse(localStorage.getItem('b2b'));

k=0;
while(k in myObj.f){
  $( "#3blist" ).append( "<div onclick='localStorage.fid="+(k+1)+";'><a href=index.html>Borang "+(k+1)+" : "+myObj.f[k].mykad+"</a></div>" );
  k=k+1;
}
$( "#3blist" ).append( "<div onclick='localStorage.fid="+(k+1)+";newform();'><a href=index.html>add "+(k+1)+" :</a></div>" );
