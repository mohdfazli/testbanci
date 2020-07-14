//for SENARAI BORANG 3B Page only

$('body').ready(function(){
  showf(localStorage.fid); //show form data on input
  return false;
});

//update data inside local storage for 3B form whenever the input is changed
$('#mykad, #e1aq, #mykad, #mykadlama, #permitkerja,#nama, #3r, #e6q, #e7, #e9agama, #e9agamalain, #e8etnik, #e10tempatlahir').keyup(function(){
  formid(localStorage.fid); //insert form data into local storage
  reshowformdata();
  return false;
});


// insert new form data(mykad) into local storage
function formid(fid){
  myObj = JSON.parse(window.localStorage.getItem('b2b'));
  myObj.f[(fid-1)].has_identification_document = $('#e1aq').val();
  myObj.f[(fid-1)].mykad = $('#mykad').val();
  myObj.f[(fid-1)].other_identification_number = $('#mykadlama').val();
  myObj.f[(fid-1)].permit = $('#permitkerja').val();
  myObj.f[(fid-1)].name = $('#nama').val();
  myObj.f[(fid-1)].rel_hh = $('#3r').val();
  myObj.f[(fid-1)].marr_stat = $('#e6q').val();
  myObj.f[(fid-1)].age_at_first_marriage = $('#e7').val();
  myObj.f[(fid-1)].religion = $('#e9agama').val();
  myObj.f[(fid-1)].religion_others = $('#e9agamalain').val();
  myObj.f[(fid-1)].rece = $('#e8etnik').val();
  myObj.f[(fid-1)].birth_malaysia = $('#e10tempatlahir').val();
  // myObj.f[(fid-1)].birth_state_id = $('#isi').val();
  // myObj.f[(fid-1)].birth_country_id = $('#isi').val();
  // myObj.f[(fid-1)].residence_status = $('#isi').val();
  myJSON = JSON.stringify(myObj);
  localStorage.setItem("b2b", myJSON);
}

// show data on input box of 3B form that exist on local storage
function showf(fid){
  myObj = JSON.parse(window.localStorage.getItem('b2b'));

  $('#e1aq').val( myObj.f[(fid-1)].has_identification_document );
  $('#mykad').val( myObj.f[(fid-1)].mykad ); //show mykad into input box
  $('#mykadlama').val( myObj.f[(fid-1)].other_identification_number );
  $('#permitkerja').val( myObj.f[(fid-1)].permit );
  $('#nama').val( myObj.f[(fid-1)].name );
  $('#3r').val( myObj.f[(fid-1)].rel_hh );
  $('#e6q').val( myObj.f[(fid-1)].marr_stat );
  $('#e7').val( myObj.f[(fid-1)].age_at_first_marriage );
  $('#e9agama').val( myObj.f[(fid-1)].religion );
  $('#e9agamalain').val(myObj.f[(fid-1)].religion_others );
  $('#e8etnik').val( myObj.f[(fid-1)].rece );
  $('#e10tempatlahir').val(myObj.f[(fid-1)].birth_malaysia);
  reshowformdata();
}

function reshowformdata(){
  var mykad = $('#mykad').val();
  // localStorage.mykad = mykad;
  var dob = mykad.substr(0,6); 	 // eg: 850510 - 10/05/1985
  var code = mykad.substr(6,2);	 // eg: 14 - Wilayah Persekutuan
  var icno = mykad.substr(8,4);	 // eg: 0000 - ic number

  //check gender using ic number
  if (icno % 2 == 0){
    $('#e4q').val("Perempuan");
    localStorage.gender = "Perempuan";
  }
  else if (icno % 2 == 1){
    $('#e4q').val("Lelaki");
    localStorage.gender = "Lelaki";
  }

  //arrange date from ic number
  var first = dob.substr(0, 2);  // 85
  var second = dob.substr(2, 2); // 05
  var third = dob.substr(4,2);   // 10

  //convert 850510 to 85-05-10 : dateformat - yy-mm-dd
  var dateraw = first+'-'+second+'-'+third;
  $('#e5a').val(dateraw);
  localStorage.dob = dateraw;

  var today = new Date();
  var birthDate = new Date($('#e5a').val());
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (age<0){
    age=age+100;
  }
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  $('#e5b').val(age);
  localStorage.age = age;

  // calculate age by dateraw : eg: 33
  //var date_convert_age = moment().diff(dateraw, 'years');
  //alert(date_convert_age);
  // convert full date 85-05-10 to 1985-05-10
  // var year = moment(dateraw,"YY-MM-DD").format("YYYY");
  // $('#day_date').val(third);
  // $('#month_date').val(second);
  // $('#year_date').val(year);
}
