$("#landing5").click(function () {
  $("#landing_table").fadeOut("fast");
  $('#cat1,#cat2,#cat3,#cat4,#cat5,#cat6,#cat7,#cat8,#cat9,#cat10,#cat11,#cat12,#cancel,#Events,#mainbox').css('opacity',0);
  var animObj = {'left':0,'opacity':1,'display':'block'};
  $('#Table_01').css(animObj);
  $('#Table_01').show();
  pageAnimations();
  });
  
$("#hospitality").click(function(){
	$("#landing_table").fadeOut("fast");
	$('#hospi-page-03,#hospi-page-06,#hospi-page-07,#hospi-page-10,#hospi-page-13,#hospi-page-15,#hospi-page-18,#hospi-page-20,#hospi-page-22,#hospi-page-26').css('opacity',0);
	var animObj_hospi = {'left':200,'opacity':1,'display':'block'};
	$('#spons_maindiv').css(animObj_hospi);
	$('#spons_maindiv').show();
	hospiAnimations();
	});
	
$("#sponsors").click(function () {
  $("#landing_table").fadeOut("fast");
  $('#Saarang_Website_Design2_spons_03, #Saarang_Website_Design2_spons_05, #Saarang_Website_Design2_spons_07, #Saarang_Website_Design2_spons_11, #Saarang_Website_Design2_spons_14, #Saarang_Website_Design2_spons_16, #Saarang_Website_Design2_spons_18, #Saarang_Website_Design2_spons_21, #Saarang_Website_Design2_spons_24, Saarang_Website_Design2_27,#spons-38, #Saarang_Website_Design2_spons_31, #Saarang_Website_Design2_spons_33, #Saarang_Website_Design2_spons_38, #Saarang_Website_Design2_spons_43, #Saarang_Website_Design2_spons_45, #Saarang_Website_Design2_spons_48, #Saarang_Website_Design2_spons_52, #Saarang_Website_Design2_spons_55').css('opacity',0);
  var animObj_spons = {'left':250,'opacity':1,'display':'block'};
  $('#Table_01_spons').css(animObj_spons);
  $('#Table_01_spons').show();
  sponspageAnimations();
  });
  
  $("#spotlight").click(function () {
  $("#landing_table").fadeOut("fast");
  $('#close_spot,#spotlight_head,#Saarang_Website_Design2_08,#Saarang_Website_Design2_11,#Saarang_Website_Design2_13,#Saarang_Website_Design2_17,#Saarang_Website_Design2_20,#Saarang_Website_Design2_23,#Saarang_Website_Design2_26,#Saarang_Website_Design2_29').css('opacity',0);
  var animObj_spotlight = {'left':250,'opacity':1,'display':'block'};
  $('#spot_maindiv').css(animObj_spotlight);
  $('#spot_maindiv').show();
  spotlightpageAnimations();
  });
  
  
  
  $("#proshows").click(function () {
  $("#landing_table").fadeOut("fast");  $('#Saarang_Websitepro_Design2_03,#Saarang_Websitepro_Design2_06,#Saarang_Websitepro_Design2_08,#Saarang_Websitepro_Design2_13,#Saarang_Websitepro_Design2_16,#Saarang_Websitepro_Design2_23,#Saarang_Websitepro_Design2_26').css('opacity',0);
  var animObj_proshow = {'left':190,'opacity':1,'display':'block'};
  $('#pro_maindiv').css(animObj_proshow);
  $('#pro_maindiv').show();
  propageAnimations();
  });
  
	
disableSelection(document.body) //disable text selection on entire body of page
var timer_is_on = 0;
var t;
var left_parent = 0;
var opacity_parent = 1.0;
var winW = window.innerWidth;
var cssObj;
//Testing the transition using jquery
var init_css_prop_landing1 = {'left':'351px','top':'789px','opacity':0};
var final_css_prop_landing1 = {'left':'175px','top':'127px','opacity':1};
var init_css_prop_landing2 = {'left':'100px','top':'301px','opacity':0};
var final_css_prop_landing2 = {'left':'479px','top':'82px','opacity':1};
var init_css_prop_landing3 = {'left':'300px','top':'789px','opacity':0};
var final_css_prop_landing3 = {'left':'300px','top':'206px','opacity':1};
var init_css_prop_landing4 = {'left':'464px','top':'527px','opacity':0};
var final_css_prop_landing4 = {'left':'175px','top':'386px','opacity':1};
var init_css_prop_landing5 = {'left':'450px','top':'189px','opacity':0};
var final_css_prop_landing5 = {'left':'480px','top':'325px','opacity':1};
var init_css_prop_landing6 = {'left':'600px','top':'-50px','opacity':0};
var final_css_prop_landing6 = {'left':'50px','top':'511px','opacity':1};
var init_css_prop_landing7 = {'left':'270px','top':'35px','opacity':0};
var final_css_prop_landing7 = {'left':'605px','top':'450px','opacity':1};

function landingPageAnimations(){
	$('#spotlight').css(init_css_prop_landing1).animate(final_css_prop_landing1,{duration:750,queue:false});
	setTimeout(function(){$('#landing5').css(init_css_prop_landing2).animate(final_css_prop_landing2,{duration:450,queue:false})},200);
	$('#main').css(init_css_prop_landing3).animate(final_css_prop_landing3,{duration:1050,queue:false}, 700);
	setTimeout(function(){$('#hospitality').css(init_css_prop_landing4).animate(final_css_prop_landing4,{duration:450,queue:false})},400);
	$('#sponsors').css(init_css_prop_landing5).animate(final_css_prop_landing5,{duration:550,queue:false});
	setTimeout(function(){$('#random').css(init_css_prop_landing6).animate(final_css_prop_landing6,{duration:450,queue:false})},150);
	setTimeout(function(){$('#proshows').css(init_css_prop_landing7).animate(final_css_prop_landing7,{duration:450,queue:false})},400);
	
};

$('document').ready(landingPageAnimations());
