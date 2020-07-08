//for SENARAI BORANG 3B Page only

//set first data in local storage for 3B form if empty in local storage ( this will run for first time only to prevent error)
if (localStorage.getItem("b2b") === null) {
  myObj = {
    "f":[ {mykad:'', tvisit:''} ]
  };
  myJSON = JSON.stringify(myObj);
  localStorage.setItem("b2b", myJSON);
}
//add new empty 3B form
function newform(){
  myObj = JSON.parse(window.localStorage.getItem('b2b'));
  p = {mykad: "", tvisit: ""};
  myObj.f.push(p);
  myJSON = JSON.stringify(myObj);
  localStorage.setItem("b2b", myJSON);
}
myObj = JSON.parse(localStorage.getItem('b2b'));

//generate list of all 3B form that exist in local storage including empty form
k=0;
while(k in myObj.f){
  $( "#3blist" ).append( "<div onclick='localStorage.fid="+(k+1)+";'><a href=index.html>Borang "+(k+1)+" : "+myObj.f[k].mykad+"</a></div>" );
  k=k+1;
}
$( "#3blist" ).append( "<div onclick='localStorage.fid="+(k+1)+";newform();'><a href=index.html>Isi borang 3B baru "+(k+1)+" :</a></div>" );
