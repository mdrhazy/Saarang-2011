var timer_is_on = 0;
var t;
var left_parent = 0;
var opacity_parent = 1.0;
//var winW = window.innerWidth;
var winW = window.innerWidth;
var cssObj;
$('#spons_maindiv').hide(500);

$('#hospi-page-18').click(function(){
	if(jQuery.browser.msie){
		//alert('cancel button has been clicked');  //Somehow the cancel effect is not working without alerting inside the function
		//Somehow its working now!!!
	}
	//alert("crap");
	console.log('cancel button has been pressed');
	var animObj = {'left':(winW-300.0),'opacity':0};
	$('#spons_maindiv').animate(animObj,1000,'easeOutQuad');
	setTimeout('hideDiv()',150);
});


var init_css_prop_hospipage03 = {'left':'128px','top':'0px','opacity':0};
var final_css_prop_hospipage03 = {'left':'128px','top':'130px','opacity':1};
var init_css_prop_hospipage06 = {'left':'0px','top':'381px','opacity':0};
var final_css_prop_hospipage06 = {'left':'229px','top':'231px','opacity':1};
var init_css_prop_hospipage07 = {'left':'630px','top':'431px','opacity':0};
var final_css_prop_hospipage07 = {'left':'430px','top':'231px','opacity':1};
var init_css_prop_hospipage10 = {'left':'629px','top':'531px','opacity':0};
var final_css_prop_hospipage10 = {'left':'629px','top':'231px','opacity':1};
var init_css_prop_hospipage13 = {'left':'600px','top':'100px','opacity':0};
var final_css_prop_hospipage13 = {'left':'329px','top':'330px','opacity':1};
var init_css_prop_hospipage15 = {'left':'0px','top':'100px','opacity':0};
var final_css_prop_hospipage15 = {'left':'530px','top':'330px','opacity':1};
var init_css_prop_hospipage18 = {'left':'195px','top':'598px','opacity':0};
var final_css_prop_hospipage18 = {'left':'195px','top':'398px','opacity':1};
var init_css_prop_hospipage20 = {'left':'0px','top':'431px','opacity':0};
var final_css_prop_hospipage20 = {'left':'228px','top':'431px','opacity':1};
var init_css_prop_hospipage22 = {'left':'0px','top':'581px','opacity':0};
var final_css_prop_hospipage22 = {'left':'431px','top':'431px','opacity':1};
var init_css_prop_hospipage26 = {'left':'730px','top':'330px','opacity':0};
var final_css_prop_hospipage26 = {'left':'530px','top':'530px','opacity':1};

function hospiAnimations(){
	console.log('hospiAnimations');
	setTimeout(function(){$('#hospi-page-03').css(init_css_prop_hospipage03).animate(final_css_prop_hospipage03,{duration:350,queue:false})},500);
	//$('#hospi-page-05').css(init_css_prop_hospi-page-05).animate(final_css_prop_hospi-page-05,{duration:550,queue:false});
	console.log('hospiAnimations');
	setTimeout(function(){$('#hospi-page-06').css(init_css_prop_hospipage06).animate(final_css_prop_hospipage06,{duration:350,queue:false})},400);
	setTimeout(function(){$('#hospi-page-07').css(init_css_prop_hospipage07).animate(final_css_prop_hospipage07,{duration:350,queue:false})},400);
	setTimeout(function(){$('#hospi-page-10').css(init_css_prop_hospipage10).animate(final_css_prop_hospipage10,{duration:450,queue:false})},400);
	setTimeout(function(){$('#hospi-page-13').css(init_css_prop_hospipage13).animate(final_css_prop_hospipage13,{duration:350,queue:false})},300);
	$('#hospi-page-15').css(init_css_prop_hospipage15).animate(final_css_prop_hospipage15,{duration:350,queue:false});
	setTimeout(function(){$('#hospi-page-18').css(init_css_prop_hospipage18).animate(final_css_prop_hospipage18,{duration:350,queue:false})},650);
	setTimeout(function(){$('#hospi-page-20').css(init_css_prop_hospipage20).animate(final_css_prop_hospipage20,{duration:300,queue:false})},700);
	setTimeout(function(){$('#hospi-page-22').css(init_css_prop_hospipage22).animate(final_css_prop_hospipage22,{duration:450,queue:false})},200);
	setTimeout(function(){$('#hospi-page-26').css(init_css_prop_hospipage26).animate(final_css_prop_hospipage26,{duration:400,queue:false})},100);
}

//$('document').ready(hospiAnimations());
// JavaScript Document