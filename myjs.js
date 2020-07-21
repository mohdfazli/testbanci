
$( "#jenisrumah" ).change(function() {
  if(this.value=="non"){
    $("#c1").show();
  }
  else{
    $("#c1").hide();
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

////-------show lain-lain input box start----////

$( ".popnext" ).change(function() {
  if(this.value=="non"){
    $(this).next().show();
  }
  else{
    $(this).next().hide();
  }
});

$( ".popnext2" ).change(function() {
  if(this.value=="non"){
    $(this).next().next().show();
  }
  else{
    $(this).next().next().hide();
  }
});

$( ".popnextparentdiv" ).change(function() {
  if(this.value=="non"){
    $(this).parent().next().show();
  }
  else{
    $(this).parent().next().hide();
  }
});

$( ".lain-ckbox" ).click(function() {
  if(this.value=="1"){
    $(this).parent().parent().parent().parent().next().show();
  }
  else{
    $(this).parent().parent().parent().parent().next().hide();
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


//-------------dirty show hide start--

$( "#e1aq" ).change(function() {
  if(this.value=="2"){
    $("#E-1b").hide();
  }
  else{
    $("#E-1b").show();
  }
});

$( "#e6q" ).change(function() {
  if(this.value=="1"){
    $("#E7").hide();
  }
  else{
    $("#E7").show();
  }
});

$("#e11aq").change(function() {
  if(this.value=="1"){
    $("#E11-b, #E11-c").hide();
  }
  else{
    $("#E11-b, #E11-c").show();
  }
});

$( "#e14bq" ).change(function() {
  if(this.value=="0"){
    $("#E14-c").show();
    $("#E15, #E16, #E17, #E18").hide();
  }
  else{
    $("#E14-c").hide();
    $("#E15, #E16, #E17, #E18").show();
  }
});

$( "#e28a" ).change(function() {
  if(this.value=="2"){
    $("#E28-b, #E28-c").hide();
  }
  else{
    $("#E28-b, #E28-c").show();
  }
});

$( "#h2aq" ).change(function() {
  if(this.value=="2"){
    $("#h2-b, #H3").hide();
  }
  else{
    $("#h2-b, #H3").show();
  }
});

$(".c2-q").click(function() {
  if(this.value=="1"){
    $("#c3, #c4, #c5, #c6, #c7, #c8").show();
  }
  else{
    $("#c3, #c4, #c5, #c6, #c7, #c8").hide();
    $("#nextend").attr("href", "../profile.html");
  }
});

$( "#c1c" ).change(function() {
  if(this.value=="111"){
    $("#c1-b-2q").hide();
  }
  else{
    $("#c1-b-2q").show();
  }
});

$( "#k3-p, #k3-l" ).keyup(function() {
  var p = parseInt($("#k3-p").val());
  var l = parseInt($("#k3-l").val());
  var total = p+l;
  $("#k3-total").val(total);
  localStorage.k3total = total;
});

//paging warga emas
if (localStorage.age <= 60){
  $("#3b-page5").hide();
}else{ $("#3b-page5").show(); }

//perempuan umur > 10
if (localStorage.gender == "Lelaki" || localStorage.age < 10){
  $("#E28").hide();
}

$( "#e19q" ).change(function() {
  if(this.value=="1"){
    $("#E20, #E21, #E22").hide();
  }
  else{
    $("#E20, #E21, #E22").show();
  }
});

$( "#e20q" ).change(function() {
  if(this.value=="1"){
    $("#E21, #E22").hide();
    $("#E23, #E24, #E25, #E26").show();
  }
  else{
    $("#E21, #E22").show();
    $("#E23, #E24, #E25, #E26").hide();
  }
});

$( "#e21q" ).change(function() {
  if(this.value=="1"){
    $("#E22").hide();
  }
  else{
    $("#E22").show();
  }
});

$( "#e10tempatlahir" ).ready(function() {
  if(this.value=="luarmalaysia"){
    $("#e10negerilahir").hide();
    $("#e10negaralahir").show();
  }
  else if(this.value=="malaysia"){
    $("#e10negerilahir").show();
    $("#e10negaralahir").hide();
  }
  else{
    $("#e10negerilahir, #e10negaralahir").hide();
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

//-----------calculate total minutes in SENARAI SEMAK end-------


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
