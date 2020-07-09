

$( "#jenisrumah" ).change(function() {
  if(this.value=="non"){
    $("#c1").show();
  }
  else{
    $("#c1").hide();
  }
});

$( ".form-check-input,c1-b-2" ).click(function() {
  if(this.value=="non"){
    $("#c1-b-2q").show();
  }
  else{
    $("#c1-b-2q").hide();
  }
});

$( ".c2-q" ).click(function() {
  if(this.value=="non"){
    $("#c2-lain").show();
  }
  else{
    $("#c2-lain").hide();
  }
});

$( ".c8-q" ).click(function() {
  if(this.value=="non"){
    $("#c8-lain").show();
  }
  else{
    $("#c8-lain").hide();
  }
});

$( ".has-others" ).change(function() {
  if(this.value=="non"){
    $("#ch2").show();
  }
  else{
    $("#ch2").hide();
  }
});

////-------show lain-lain input box start----////

$( ".ada-lain" ).change(function() {
  if(this.value=="non"){
    $(this).next().css( "display", "block" );
  }
  else{
    $(this).next().css( "display", "none" );
  }
});

$( ".lain-ckbox" ).click(function() {
  if(this.value=="1"){
    $(".lain-ckbox").parent().parent().parent().parent().next().css( "display", "block" );
  }
  else{
    $(".lain-ckbox").parent().parent().parent().parent().next().css( "display", "none" );
  }
});

////-------show lain-lain input box end----////

$( ".c8-b" ).click(function() {
  if($( "#c8bcbox" ).prop( "checked" )){
    $("#c8b-lain").show();
  }
  else{
    $("#c8b-lain").hide();
  }
});

//-----------calculate total minutes in SENARAI SEMAK-------
$( "#hingga" ).change(function() {
  var ftime = $("#dari").val();
  var ltime = $("#hingga").val();
  $("#jumlahminit").val(( new Date("1970-1-1 "+  ltime ) - new Date("1970-1-1 "+ ftime ))/1000/60);
});
$( "#dari" ).change(function() {
  var ftime = $("#dari").val();
  var ltime = $("#hingga").val();
  $("#jumlahminit").val(( new Date("1970-1-1 "+  ltime ) - new Date("1970-1-1 "+ ftime ))/1000/60);

});

//-----------calculate total minutes in SENARAI SEMAK end-------

//-------tree show hide

$( ".ltk" ).click(function() {
  if(this.value=="1"){
    $("#sesebuah").show();
    $("#berkembar").hide();
    $("#teres").hide();
    $("#berkelompok").hide();
    $("#rumah-bandar").hide();
  }
  else if(this.value=="2"){
    $("#sesebuah").hide();
    $("#berkembar").show();
    $("#teres").hide();
    $("#berkelompok").hide();
    $("#rumah-bandar").hide();

  }
  else if(this.value=="3"){
    $("#sesebuah").hide();
    $("#berkembar").hide();
    $("#teres").show();
    $("#berkelompok").hide();
    $("#rumah-bandar").hide();

  }
  else if(this.value=="4"){
    $("#sesebuah").hide();
    $("#berkembar").hide();
    $("#teres").hide();
    $("#berkelompok").show();
    $("#rumah-bandar").hide();

  }
  else if(this.value=="5"){
    $("#sesebuah").hide();
    $("#berkembar").hide();
    $("#teres").hide();
    $("#berkelompok").hide();
    $("#rumah-bandar").show();

  }
});


//-------tree show hide end

////----------------c8c-----------////

$( ".c8cRadios" ).click(function() {
  if(this.value=="ada"){
    $("#c8-bekal").show();
    $("#c8-xbekal").hide();
  }
  else if(this.value=="tiada"){
    $("#c8-bekal").hide();
    $("#c8-xbekal").show();
  }
});

////----------------c8c-----------////



////----------------table radiobox-----------////

$( ".lain-c5f" ).click(function() {
  if(this.value=="1"){
    $("#c5f-lain").show();
  }
  else{
    $("#c5f-lain").hide();
  }
});

$( ".lain-c7f" ).click(function() {
  if(this.value=="1"){
    $("#c7f-lain").show();
  }
  else{
    $("#c7f-lain").hide();
  }
});

//------------------tambah borang---------//

// $(document).ready(function(){
//   $("#tambahb").click(function(){
//     var $div = $('div[id^="fcard"]:last');
//     var num = parseInt( $div.prop("id").match(/\d+/g), 10 )+1;
//     var $klon = $div.clone().prop('id', 'fcard'+num );
//     $klon.insertAfter($div);
//     $('div[id^="fcard"]:last').children("div").first().children("h5").text("Nombor Ahli: 00"+num);
//     $("#tambahb").text("Tambah Ahli ke "+(num+1));
//   });
// });

//borang setiap ahli isi rumah

$(document).ready(function(){
  $("#cardspace").empty();
  var count = 2 ;
  tmember = localStorage.k3total;
  while(count<tmember){
    vcard_ahli();
    count = count+1;
  }
});

function vcard_ahli(){
  var $div = $('div[id^="fcard"]:last');
  var num = parseInt( $div.prop("id").match(/\d+/g), 10 )+1;
  var $klon = $div.clone().prop('id', 'fcard'+num );
  $("#cardspace").append($klon);
  $('div[id^="fcard"]:last').children("div").first().children("h5").text("Nombor Ahli: 00"+num);
}

//borang setiap lawatan banci
$(document).ready(function(){
  $("#tambah_visitform").change(function(){
    $("#tempohbanci").empty();
    var count = 1 ;
    // var tvisit = parseInt($("#tambah_visitform").val());
    tvisit = $("#tambah_visitform").val();
    while(count<tvisit){
      vcard();
      count=count+1;
    }
  });
});

function vcard(){
  var $div = $('div[id^="visitcard"]:last');
  var num = parseInt( $div.prop("id").match(/\d+/g), 10 )+1;
  var $klon = $div.clone().prop('id', 'visitcard'+num );
  $("#tempohbanci").append($klon);
  $('div[id^="visitcard"]:last').children("div").first().children("h5").text("Lawatan ke - "+num);
}




//-------------dirty show hide start--

$( "#e1aq" ).change(function() {
  if(this.value=="2"){
    $("#E-1b").css( "display", "none" );
  }
  else{
    $("#E-1b").css( "display", "block" );
  }
});

$( "#e1aq" ).change(function() {
  if(this.value=="2"){
    $("#E-1b").css( "display", "none" );
  }
  else{
    $("#E-1b").css( "display", "block" );
  }
});

$( "#e6q" ).change(function() {
  if(this.value=="1"){
    $("#E7").css( "display", "none" );
  }
  else{
    $("#E7").css( "display", "block" );
  }
});

$( "#e11aq" ).change(function() {
  if(this.value=="1"){
    $("#E11-b").css( "display", "none" );
    $("#E11-c").css( "display", "none" );
  }
  else{
    $("#E11-b").css( "display", "block" );
    $("#E11-c").css( "display", "block" );
  }
});

$( "#e14bq" ).change(function() {
  if(this.value=="0"){
    $("#E14-c").css( "display", "block" );
    $("#E15").css( "display", "none" );
    $("#E16").css( "display", "none" );
    $("#E17").css( "display", "none" );
    $("#E18").css( "display", "none" );
  }
  else{
    $("#E14-c").css( "display", "none" );
    $("#E15").css( "display", "block" );
    $("#E16").css( "display", "block" );
    $("#E17").css( "display", "block" );
    $("#E18").css( "display", "block" );
  }
});

$( "#e28a" ).change(function() {
  if(this.value=="2"){
    $("#E28-b").css( "display", "none" );
    $("#E28-c").css( "display", "none" );
  }
  else{
    $("#E28-b").css( "display", "block" );
    $("#E28-c").css( "display", "block" );
  }
});

$( "#h2aq" ).change(function() {
  if(this.value=="2"){
    $("#h2-b").css( "display", "none" );
    $("#H3").css( "display", "none" );
  }
  else{
    $("#h2-b").css( "display", "block" );
    $("#H3").css( "display", "block" );
  }
});

$(".c2-q").click(function() {
  if(this.value=="1"){
    $("#c3").css( "display", "block" );
    $("#c4").css( "display", "block" );
    $("#c5").css( "display", "block" );
    $("#c6").css( "display", "block" );
    $("#c7").css( "display", "block" );
    $("#c8").css( "display", "block" );


  }
  else{
    $("#c3").css( "display", "none" );
    $("#c4").css( "display", "none" );
    $("#c5").css( "display", "none" );
    $("#c6").css( "display", "none" );
    $("#c7").css( "display", "none" );
    $("#c8").css( "display", "none" );
    $("#nextend").attr("href", "../profile.html");

  }
});

$( "#c1c" ).change(function() {
  if(this.value=="111"){
    $("#c1-b-2q").css( "display", "none" );
  }
  else{
    $("#c1-b-2q").css( "display", "block" );
  }
});

$( "#k3-p, #k3-l" ).keyup(function() {
  var p = parseInt($("#k3-p").val());
  var l = parseInt($("#k3-l").val());
  var total = p+l;
  $("#k3-total").val(total);
  localStorage.k3total = total;
});

//show data on 3B input form that exist in local storage
$('body').ready(function(){
  showf(localStorage.fid);
  //   $('#mykad').val(localStorage.mykad);
  //   $('#e4q').val(localStorage.gender);
  //   $('#e5a').val(localStorage.dob);
  //   $('#e5b').val(localStorage.age);
  return false;
});

//update data inside local storage for 3B form whenever the input is changed
$('#mykad').change(function(){
  formid(localStorage.fid);
  reshowformdata()
  return false;
});

function reshowformdata(){
  var mykad = $('#mykad').val();
  // localStorage.mykad = mykad;
  var dob = mykad.substr(0,6); 	 // eg: 850510 - 10/05/1985
  var code = mykad.substr(6,2);	 // eg: 14 - Wilayah Persekutuan
  var icno = mykad.substr(8,4);	 // eg: 0000 - ic number

  //check gender using ic number
  if (icno % 2 == 0){
    $('#e4q').val("Perempuan");
    // localStorage.gender = "Perempuan";
  }
  else{
    $('#e4q').val("Lelaki");
    // localStorage.gender = "Lelaki";
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

//paging warga emas
if (localStorage.age <= 60){
  $("#9to10").attr("href", "11.html");
  $("#11to10").attr("href", "9.html");
}

//perempuan umur > 10
if (localStorage.gender == "Lelaki" || localStorage.age < 10){
  $("#E28").hide();
}

$( "#e19q" ).change(function() {
  if(this.value=="1"){
    $("#E20").hide();
    $("#E21").hide();
    $("#E22").hide();
  }
  else{
    $("#E20").show();
    $("#E21").show();
    $("#E22").show();
  }
});

$( "#e20q" ).change(function() {
  if(this.value=="1"){
    $("#E21").hide();
    $("#E22").hide();
    $("#E23").show();
    $("#E24").show();
    $("#E25").show();
    $("#E26").show();
  }
  else{
    $("#E21").show();
    $("#E22").show();
    $("#E23").hide();
    $("#E24").hide();
    $("#E25").hide();
    $("#E26").hide();
  }
});

// insert new form data(mykad) into local storage
function formid(fid){
  myObj = JSON.parse(window.localStorage.getItem('b2b'));
  myObj.f[(fid-1)].mykad = $('#mykad').val();
  myJSON = JSON.stringify(myObj);
  localStorage.setItem("b2b", myJSON);
}

// show data on input box of 3B form that exist from stored local storage
function showf(fid){
  myObj = JSON.parse(window.localStorage.getItem('b2b'));
  $('#mykad').val( myObj.f[(fid-1)].mykad ); //show mykad into input box
  reshowformdata()
}

// $("p").append("Some appended text."
// $(document).ready(function(){
//   $("#tambahb").click(function(){
//     var input = $('<input>', {
//       id: '',
//       name: 'username',
//       type: 'text',
//       class:'form-control',
//       value: 'nama',
//       focusin: function() {
//         $(this).val('');
//       }
//     }).wrap('<div id="form006" class="form-group"/>').parent().insertBefore("#tambahb");
//   });
// });
