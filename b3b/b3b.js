//for SENARAI BORANG 3B Page only

//set first data in local storage for 3B form if empty in local storage ( this will run for first time only to prevent error)
if (localStorage.getItem("b2b") === null) {
  var ts = new Date();
  var qs = ts.toLocaleString();
  myObj = {
    "f":[ {
      has_identification_document:'',
      mykad:'',
      other_identification_number:'',
      tvisit: qs,
      permit:'',
      name:'',
      rel_hh:'',
      marr_stat:'',
      age_at_first_marriage:'',
      religion:'',
      religion_others:'',
      rece:'' ,
      // birth_state_id:'' ,
      // birth_country_id:'' ,
      // residence_status:'',
    } ]
  };
  myJSON = JSON.stringify(myObj);
  localStorage.setItem("b2b", myJSON);

}
//add new empty 3B form
function newform(){
  var ts = new Date();
  var qs = ts.toLocaleString();
  myObj = JSON.parse(window.localStorage.getItem('b2b'));
  p = {mykad: "", name:"",tvisit: qs };
  myObj.f.push(p);
  myJSON = JSON.stringify(myObj);
  localStorage.setItem("b2b", myJSON);
}
myObj = JSON.parse(localStorage.getItem('b2b'));

//generate list of all 3B form that exist in local storage including empty form
$( "#3blist" ).append( "<table><tr><th>MyKad/Name</th><th class=pl-2>Created On</th><th class=pl-2>Status</th></tr>" );

k=0;
while(k in myObj.f){
  $( "table" ).append( "<tr onclick='localStorage.fid="+(k+1)+";'><td><a href=6.html>("+(k+1)+".) "+myObj.f[k].mykad+"</td> <td class=pl-2> </a> "+myObj.f[k].tvisit+"</td><td class=pl-2>incomplete</td></tr>" );
  k=k+1;
}
$( "#3blist" ).append( "<div class='mt-4' onclick='localStorage.fid="+(k+1)+";newform();'><a href=6.html>+ Isi borang 3B baru :</a></div>" );
