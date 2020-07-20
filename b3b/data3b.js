//for SENARAI BORANG 3B Page only

$('body').ready(function(){
  showf(localStorage.fid); //show form data on input
  showhideq(localStorage.fid); //show hide question on page ready
  return false;
});

//update data inside local storage for 3B form whenever the input is changed
$('input, select, textarea').change(function(){
  formid(localStorage.fid); //insert form data into local storage
  reshowformdata();
  return false;
});

// insert new form data(mykad) into local storage
function formid(fid){
  myObj = JSON.parse(window.localStorage.getItem('b2b'));
  z = myObj.f[(fid-1)];
  z.has_identification_document = $('#e1aq').val();
  z.mykad = $('#mykad').val();
  z.other_identification_number = $('#mykadlama').val();
  z.permit = $('#permitkerja').val();
  z.name = $('#nama').val();
  z.rel_hh = $('#3r').val();
  z.marr_stat = $('#e6q').val();
  z.age_at_first_marriage = $('#e7').val();
  z.religion = $('#e9agama').val();
  z.religion_others = $('#e9agamalain').val();
  z.rece = $('#e8etnik').val();
  z.birth_malaysia = $('#e10tempatlahir').val();
  z.is_malaysian_citizen = $('#e11aq').val();

  z.can_read = $("input[name='d10ltf']:checked").val();
  z.can_write = $("input[name='d10mtf']:checked").val();
  z.can_count = $("input[name='d10ntf']:checked").val();
  z.residence_1y_town = $('#1ytown').val();
  z.residence_1y_mukim = $('#1ymukim').val();
  z.residence_1y_district = $('#1ydistrict').val();
  z.residence_1y_state_country = $('#1ystate').val();
  z.residence_5y_town = $('#5ytown').val();
  z.residence_5y_mukim = $('#5ymukim').val();
  z.residence_5y_district = $('#5ydistrict').val();
  z.residence_5y_state_country = $('#5ystate').val();

  z.current_edu = $('#e14bq').val();
  z.highest_edu = $('#highest_edu').val();
  z.highest_cert = $('#highest_cert').val();

  z.ipt = $('#e17q').val();
  z.cert_field = $('#e18aq').val();
  z.cert_field_info = $('#e18bq').val();
  z.past_work_7day = $('#e19q').val();
  z.has_work_later = $('#e20q').val();
  z.finding_work = $('#e21q').val();
  z.why_nofindwork = $('#e22q').val();
  z.occupation = $('#e23aq').val();
  z.nature_of_work = $('#e23bq').val();
  z.work_info = $('#e23cq').val();
  z.employer_name = $('#e24aq').val();
  z.employer_field = $('#e24bq').val();
  z.employer_main_activity_desc = $('#e24cq').val();
  z.work_level = $('#e25q').val();
  z.work_transport = $('#e26aq').val();
  z.work_distance = $('#e26bq').val();
  z.oku = $('#e27bq').val();
  z.oku_edu = $('#e27cq').val();
  z.childbirth = $('#e28aq').val();
  z.n_male_children_born_alive = $('#e28b1q').val();
  z.n_female_children_born_alive = $('#e28b2q').val();
  z.n_male_children_still_alive = $('#e28c1q').val();
  z.n_female_children_still_alive = $('#e28c2q').val();

  z.difficulty_see = $("input[name='e27-a-i']:checked").val();
  z.difficulty_hear = $("input[name='e27-a-ii']:checked").val();
  z.difficulty_walk = $("input[name='e27-a-iii']:checked").val();
  z.difficulty_memory = $("input[name='e27-a-iv']:checked").val();
  z.difficulty_self_manage = $("input[name='e27-a-v']:checked").val();
  z.difficulty_communicate = $("input[name='e27-a-vi']:checked").val();

  z.disease_diabetes = $("input[name='f2a']:checked").val();
  z.disease_hbd = $("input[name='f2b']:checked").val();
  z.disease_strok = $("input[name='f2c']:checked").val();
  z.disease_kidney = $("input[name='f2d']:checked").val();
  z.disease_heart = $("input[name='f2e']:checked").val();
  z.disease_asthma = $("input[name='f2f']:checked").val();
  z.disease_cancer = $("input[name='f2g']:checked").val();
  z.disease_cough = $("input[name='f2h']:checked").val();
  z.disease_kstone = $("input[name='f2i']:checked").val();
  z.disease_alzheimer = $("input[name='f2j']:checked").val();

  z.insurans_employer = $("input[name='f5a']:checked").val();
  z.insurans_org = $("input[name='f5b']:checked").val();
  z.insurans_prev_employer = $("input[name='f5c']:checked").val();
  z.insurans_self = $("input[name='f5d']:checked").val();
  z.insurans_hmember = $("input[name='f5e']:checked").val();
  z.insurans_other = $("input[name='f5f']:checked").val();

  z.social_fb = $("input[name='g1a']:checked").val();
  z.social_whatsapp = $("input[name='g1b']:checked").val();
  z.social_ig = $("input[name='g1c']:checked").val();
  z.social_tweet = $("input[name='g1d']:checked").val();
  z.social_linkd = $("input[name='g1e']:checked").val();
  z.social_telegram = $("input[name='g1f']:checked").val();
  z.social_other = $("input[name='g1g']:checked").val();

  z.net_from_home = $("input[name='g2a']:checked").val();
  z.net_from_work = $("input[name='g2b']:checked").val();
  z.net_from_otherhome = $("input[name='g2c']:checked").val();
  z.net_from_free = $("input[name='g2d']:checked").val();
  z.net_from_community = $("input[name='g2e']:checked").val();
  z.net_from_ip = $("input[name='g2f']:checked").val();
  z.net_from_data = $("input[name='g2g']:checked").val();

  z.health_monthly = $('#f1q').val();
  z.healthcare_monthly_frequency = $('#f3q').val();
  z.healthcare_monthly_cost = $('#f4q').val();

  z.makan_sarapan = $('#g3ak').val();
  z.makan_kudapan = $('#g3bk').val();
  z.makan_tengahari = $('#g3ck').val();
  z.makan_petang = $('#g3dk').val();
  z.makan_malam = $('#g3ek').val();
  z.makan_lewatmlm = $('#g3fk').val();

  z.greet = $('#g4q').val();
  z.house_own = $('#h1q').val();
  z.house_plan = $('#h2aq').val();
  z.house_plan_time = $('#h2bq').val();
  z.house_plan_type = $('#h3aq').val();
  z.house_plan_price = $('#h3bq').val();
  z.house_plan_district = $('#h3c1q').val();
  z.house_plan_state = $('#h3c2q').val();

  z.responden_name = $('#nama_responden').val();
  z.responden_id = $('#id_responden').val();
  z.form_date = $('#tarikh_borang').val();
  z.responden_comment = $('#ulasan').val();

  // myObj.f[(fid-1)].is_malaysian_citizen = $('#e12-i').val();
  // myObj.f[(fid-1)].birth_state_id = $('#isi').val();
  // myObj.f[(fid-1)].birth_country_id = $('#isi').val();
  // myObj.f[(fid-1)].residence_status = $('#isi').val();
  myJSON = JSON.stringify(myObj);
  localStorage.setItem("b2b", myJSON);
}

// show data on input box of 3B form that exist on local storage
function showf(fid){
  myObj = JSON.parse(window.localStorage.getItem('b2b'));
  z = myObj.f[(fid-1)];
  $('#e1aq').val( z.has_identification_document );
  $('#mykad').val( z.mykad ); //show mykad into input box
  $('#mykadlama').val( z.other_identification_number );
  $('#permitkerja').val( z.permit );
  $('#nama').val( z.name );
  $('#3r').val( z.rel_hh );
  $('#e6q').val( z.marr_stat );
  $('#e7').val( z.age_at_first_marriage );
  $('#e9agama').val( z.religion );

  $('#e9agamalain').val(z.religion_others );
  $('#e8etnik').val( z.rece );
  $('#e10tempatlahir').val(z.birth_malaysia);
  $('#e11aq').val(z.is_malaysian_citizen);

  $("input[name='d10ltf'][ value = "+z.can_read+" ]").prop('checked', true);
  $("input[name='d10mtf'][ value = "+z.can_write+" ]").prop('checked', true);
  $("input[name='d10ntf'][ value = "+z.can_count+" ]").prop('checked', true);
  $("input[name='d10ltf']:checked").val(z.can_read);
  $("input[name='d10mtf']:checked").val(z.can_write);
  $("input[name='d10ntf']:checked").val(z.can_count);
  $('#1ytown').val(z.residence_1y_town);
  $('#1ymukim').val(z.residence_1y_mukim);
  $('#1ydistrict').val(z.residence_1y_district);
  $('#1ystate').val(z.residence_1y_state_country);
  $('#5ytown').val(z.residence_5y_town);
  $('#5ymukim').val(z.residence_5y_mukim);
  $('#5ydistrict').val(z.residence_5y_district);
  $('#5ystate').val(z.residence_5y_state_country);

  $('#e14bq').val(z.current_edu);
  $('#highest_edu').val(z.highest_edu);
  $('#highest_cert').val(z.highest_cert);

  $('#e17q').val(z.ipt);
  $('#e18aq').val(z.cert_field);
  $('#e18bq').val(z.cert_field_info);
  $('#e19q').val(z.past_work_7day);
  $('#e20q').val(z.has_work_later);
  $('#e21q').val(z.finding_work);
  $('#e22q').val(z.why_nofindwork);
  $('#e23aq').val(z.occupation);
  $('#e23bq').val(z.nature_of_work);
  $('#e23cq').val(z.work_info);
  $('#e24aq').val(z.employer_name);
  $('#e24bq').val(z.employer_field);
  $('#e24cq').val(z.employer_main_activity_desc);
  $('#e25q').val(z.work_level);
  $('#e26aq').val(z.work_transport);
  $('#e26bq').val(z.work_distance);
  $('#e27bq').val(z.oku);
  $('#e27cq').val(z.oku_edu);
  $('#e28aq').val(z.childbirth);
  $('#e28b1q').val(z.n_male_children_born_alive);
  $('#e28b2q').val(z.n_female_children_born_alive);
  $('#e28c1q').val(z.n_male_children_still_alive);
  $('#e28c2q').val(z.n_female_children_still_alive);

  $("input[name='e27-a-i'][ value = "+z.difficulty_see+" ]").prop('checked', true);
  $("input[name='e27-a-ii'][ value = "+z.difficulty_hear+" ]").prop('checked', true);
  $("input[name='e27-a-iii'][ value = "+z.difficulty_walk+" ]").prop('checked', true);
  $("input[name='e27-a-iv'][ value = "+z.difficulty_memory+" ]").prop('checked', true);
  $("input[name='e27-a-v'][ value = "+z.difficulty_self_manage+" ]").prop('checked', true);
  $("input[name='e27-a-vi'][ value = "+z.difficulty_communicate+" ]").prop('checked', true);

  $("input[name='f2a'][ value = "+z.disease_diabetes+" ]").prop('checked', true);
  $("input[name='f2b'][ value = "+z.disease_hbd+" ]").prop('checked', true);
  $("input[name='f2c'][ value = "+z.disease_strok+" ]").prop('checked', true);
  $("input[name='f2d'][ value = "+z.disease_kidney+" ]").prop('checked', true);
  $("input[name='f2e'][ value = "+z.disease_heart+" ]").prop('checked', true);
  $("input[name='f2f'][ value = "+z.disease_asthma+" ]").prop('checked', true);
  $("input[name='f2g'][ value = "+z.disease_cancer+" ]").prop('checked', true);
  $("input[name='f2h'][ value = "+z.disease_cough+" ]").prop('checked', true);
  $("input[name='f2i'][ value = "+z.disease_kstone+" ]").prop('checked', true);
  $("input[name='f2j'][ value = "+z.disease_alzheimer+" ]").prop('checked', true);

  $("input[name='f5a'][ value = "+z.insurans_employer+" ]").prop('checked', true);
  $("input[name='f5b'][ value = "+z.insurans_org+" ]").prop('checked', true);
  $("input[name='f5c'][ value = "+z.insurans_prev_employer+" ]").prop('checked', true);
  $("input[name='f5d'][ value = "+z.insurans_self+" ]").prop('checked', true);
  $("input[name='f5e'][ value = "+z.insurans_hmember+" ]").prop('checked', true);
  $("input[name='f5f'][ value = "+z.insurans_other+" ]").prop('checked', true);

  $("input[name='g1a'][ value = "+z.social_fb+" ]").prop('checked', true);
  $("input[name='g1b'][ value = "+z.social_whatsapp+" ]").prop('checked', true);
  $("input[name='g1c'][ value = "+z.social_ig+" ]").prop('checked', true);
  $("input[name='g1d'][ value = "+z.social_tweet+" ]").prop('checked', true);
  $("input[name='g1e'][ value = "+z.social_linkd+" ]").prop('checked', true);
  $("input[name='g1f'][ value = "+z.social_telegram+" ]").prop('checked', true);
  $("input[name='g1g'][ value = "+z.social_other+" ]").prop('checked', true);

  $("input[name='g2a'][ value = "+z.net_from_home+" ]").prop('checked', true);
  $("input[name='g2b'][ value = "+z.net_from_work+" ]").prop('checked', true);
  $("input[name='g2c'][ value = "+z.net_from_otherhome+" ]").prop('checked', true);
  $("input[name='g2d'][ value = "+z.net_from_free+" ]").prop('checked', true);
  $("input[name='g2e'][ value = "+z.net_from_community+" ]").prop('checked', true);
  $("input[name='g2f'][ value = "+z.net_from_ip+" ]").prop('checked', true);
  $("input[name='g2g'][ value = "+z.net_from_data+" ]").prop('checked', true);

  $('#f1q').val(z.health_monthly);
  $('#f3q').val(z.healthcare_monthly_frequency);
  $('#f4q').val(z.healthcare_monthly_cost);

  $('#g3ak').val(z.makan_sarapan);
  $('#g3bk').val(z.makan_kudapan);
  $('#g3ck').val(z.makan_tengahari);
  $('#g3dk').val(z.makan_petang);
  $('#g3ek').val(z.makan_malam);
  $('#g3fk').val(z.makan_lewatmlm);

  $('#g4q').val(z.greet);
  $('#h1q').val(z.house_own);
  $('#h2aq').val(z.house_plan);
  $('#h2bq').val(z.house_plan_time);
  $('#h3aq').val(z.house_plan_type);
  $('#h3bq').val(z.house_plan_price);
  $('#h3c1q').val(z.house_plan_district);
  $('#h3c2q').val(z.house_plan_state);

  $('#nama_responden').val(z.responden_name);
  $('#id_responden').val(z.responden_id);
  $('#tarikh_borang').val(z.form_date);
  $('#ulasan').val(z.responden_comment);

  // $('#e12-i').val();
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

function showhideq(fid){
  myObj = JSON.parse(window.localStorage.getItem('b2b'));
  z = myObj.f[(fid-1)];
  //--------1
  if(z.has_identification_document=="2"){
    $("#E-1b").hide();
  }
  else{
    $("#E-1b").show();
  }
  //--------2
  if(z.marr_stat=="1"){
    $("#E7").hide();
  }
  else{
    $("#E7").show();
  }
  //---------3
  $( ".popnext" ).filter(function() {
    return $(this).val() == "non"
  }).next().show();

  //---------4
  if(z.is_malaysian_citizen=="1"){
    $("#E11-b, #E11-c").hide();
  }
  else{
    $("#E11-b, #E11-c").show();
  }
  //---------5
  if(z.current_edu=="0"){
    $("#E14-c").show();
    $("#E15, #E16, #E17, #E18").hide();
  }
  else{
    $("#E14-c").hide();
    $("#E15, #E16, #E17, #E18").show();
  }
  //---------6
  if(z.past_work_7day=="1"){
    $("#E20, #E21, #E22").hide();
  }
  else{
    $("#E20, #E21, #E22").show();
  }
  //---------7
  if(z.has_work_later=="1"){
    $("#E21, #E22").hide();
    $("#E23, #E24, #E25, #E26").show();
  }
  else{
    $("#E21, #E22").show();
    $("#E23, #E24, #E25, #E26").hide();
  }
  //----------8
  if(z.has_work_later=="1"){
    $("#E22").hide();
  }
  else{
    $("#E22").show();
  }
  //----------9
  if(z.house_plan=="2"){
    $("#h2-b, #H3").hide();
  }
  else{
    $("#h2-b, #H3").show();
  }
  //----------10
  //----------11
}


// function agama(op){
//   if(op=="non"){
//     $("#e9agama").next().show();
//   }
//   else{
//     $("#e9agama").next().hide();
//   }
// }
