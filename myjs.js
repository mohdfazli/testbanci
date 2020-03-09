

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

$(document).ready(function(){
  $("#tambahb").click(function(){
    $("#form005").clone().insertBefore("#tambahb");
  });
});

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
    $("#nextend").attr("href", "3.html");


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

//-------------dirty show hide end

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
