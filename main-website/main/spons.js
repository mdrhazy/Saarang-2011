//document.getElementById('Table_01').style.left = 500+'px';
//alert(document.body.clientWidth);

var timer_is_on = 0;
var t;
var left_parent = 0;
var opacity_parent = 1.0;
//var winW = window.innerWidth;
var winW = document.body.clientWidth;
var cssObj;
$('#Table_01_spons').hide(500);

//////////////////////////////////////////////////////////////////////
//Closing effect for the page

$('#Saarang_Website_Design2_spons_33').css('cursor','hand');
//$('#evtTrig').css('cursor','hand');
//Using the setTimeout method to animate the closing effect
/*
function setTimer(){
	//left = 242
	if(left_parent < (winW-600.0)){
		console.log('setTimer has been called for '+left_parent+' time')
		left_parent = left_parent+30;
		opacity_parent = 1.0-left_parent/(winW-600.0);
		cssObj = {'left':left_parent,'opacity':opacity_parent};
		//cssObj = {'left':left_parent+'px'};
		$('#Table_01').css(cssObj);
		//document.getElementById('Table_01').style.left = left_parent+'px';
		t = setTimeout('setTimer()',2);
		console.log('setTimeout method has been called');
	}
	else{
		$('#Table_01').css('display','none');
		setTimeout('window.location.reload()',600);
	}
}

$('#cancel').click(function(){
	console.log('cancel button has been clicked');
	if(!timer_is_on){
		timer_is_on = 1;
		console.log('timer has been triggered\n\tleft_parent = '+left_parent);
		setTimer();
	}
});
*/

//Using the animate method in jQuery for closing animation

$('#Saarang_Website_Design2_spons_33').click(function(){
	if(jQuery.browser.msie){
		//alert('cancel button has been clicked');  //Somehow the cancel effect is not working without alerting inside the function
		//Somehow its working now!!!
	}
	var animObj = {'left':(winW-100.0),'opacity':0};
	$('#Table_01_spons').animate(animObj,1300,'easeOutQuad');
	setTimeout('hideDiv()',500);
});

function hideDiv(){
	$('#Table_01_spons').css('display','none');
	//setTimeout('window.location.reload()',1200);
	$('#Saarang_Website_Design2_spons_33').css('opacity',0);
	$('#spotlight,#hospitality,#sponsors,#landing5,#main,#random,#proshows').css('opacity',0);
	$("#landing_table").fadeIn("fast");
	landingPageAnimations();
}


//Using the fadeout method in jQuery for closing animaation(does not fixe the opacity issue in IE)
/*
$('#cancel').click(function(){
	console.log('cancel button has been clicked');
	var animObj = {left:((winW-400.0)+'px')};
	$('#Table_01').animate(animObj,150);
});
*/


///////////////////////////////////////////////////////////////////////////
////Transition effect for the boxes
//Transition of #Saarang_Website_Design2_spons_03
//$('#Saarang_Website_Design2_spons_03').css('opacity',0);

//Testing the transition using jquery
//var init_css_prop_Saarang_Website_Design2_spons_03 = {'left':'351px','top':'589px','opacity':0};
//var final_css_prop_Saarang_Website_Design2_spons_03 = {'left':'242px','top':'412px','opacity':1};

var init_css_prop_Saarang_Website_Design2_spons_03 = {'left':'100px','top':'301px','opacity':0};
var final_css_prop_Saarang_Website_Design2_spons_03 = {'left':'151px','top':'52px','opacity':1};
var init_css_prop_Saarang_Website_Design2_spons_05 = {'left':'791px','top':'589px','opacity':0};
var final_css_prop_Saarang_Website_Design2_spons_05 = {'left':'228px','top':'121px','opacity':1};
var init_css_prop_Saarang_Website_Design2_spons_07 = {'left':'573px','top':'527px','opacity':0};
var final_css_prop_Saarang_Website_Design2_spons_07 = {'left':'396px','top':'120px','opacity':1};
var init_css_prop_Saarang_Website_Design2_spons_11 = {'left':'450px','top':'189px','opacity':0};
var final_css_prop_Saarang_Website_Design2_spons_11 = {'left':'598px','top':'122px','opacity':1};
var init_css_prop_Saarang_Website_Design2_spons_14 = {'left':'600px','top':'-50px','opacity':0};
var final_css_prop_Saarang_Website_Design2_spons_14 = {'left':'296px','top':'189px','opacity':1};
var init_css_prop_Saarang_Website_Design2_spons_16 = {'left':'270px','top':'35px','opacity':0};
var final_css_prop_Saarang_Website_Design2_spons_16 = {'left':'498px','top':'189px','opacity':1};
var init_css_prop_Saarang_Website_Design2_spons_18 = {'left':'500px','top':'-160px','opacity':0};
var final_css_prop_Saarang_Website_Design2_spons_18 = {'left':'667px','top':'189px','opacity':1};
var init_css_prop_Saarang_Website_Design2_spons_21 = {'left':'100px','top':'301px','opacity':0};
var final_css_prop_Saarang_Website_Design2_spons_21 = {'left':'162px','top':'253px','opacity':1};
var init_css_prop_Saarang_Website_Design2_spons_24 = {'left':'791px','top':'589px','opacity':0};
var final_css_prop_Saarang_Website_Design2_spons_24 = {'left':'396px','top':'287px','opacity':1};
var init_css_prop_Saarang_Website_Design2_spons_27 = {'left':'573px','top':'527px','opacity':0};
var final_css_prop_Saarang_Website_Design2_spons_27 = {'left':'95px','top':'322px','opacity':1};
var init_css_prop_Saarang_Website_Design2_spons_31 = {'left':'450px','top':'189px','opacity':0};
var final_css_prop_Saarang_Website_Design2_spons_31 = {'left':'229px','top':'322px','opacity':1};
var init_css_prop_Saarang_Website_Design2_spons_33 = {'left':'600px','top':'-50px','opacity':0};
var final_css_prop_Saarang_Website_Design2_spons_33 = {'left':'599px','top':'356px','opacity':1};
var init_css_prop_Saarang_Website_Design2_spons_38 = {'left':'270px','top':'35px','opacity':0};
var final_css_prop_Saarang_Website_Design2_spons_38 = {'left':'296px','top':'390px','opacity':1};
var init_css_prop_Saarang_Website_Design2_spons_43 = {'left':'500px','top':'-160px','opacity':0};
var final_css_prop_Saarang_Website_Design2_spons_43 = {'left':'96px','top':'488px','opacity':1};
var init_css_prop_spons_38 = {'left':'500px','top':'-160px','opacity':0};
var final_css_prop_spons_38 = {'left':'498px','top':'389px','opacity':1};
var init_css_prop_Saarang_Website_Design2_spons_45 = {'left':'573px','top':'527px','opacity':0};
var final_css_prop_Saarang_Website_Design2_spons_45 = {'left':'231px','top':'487px','opacity':1};
var init_css_prop_Saarang_Website_Design2_spons_48 = {'left':'450px','top':'189px','opacity':0};
var final_css_prop_Saarang_Website_Design2_spons_48 = {'left':'431px','top':'490px','opacity':1};
var init_css_prop_Saarang_Website_Design2_spons_52 = {'left':'600px','top':'-50px','opacity':0};
var final_css_prop_Saarang_Website_Design2_spons_52 = {'left':'163px','top':'555px','opacity':1};
var init_css_prop_Saarang_Website_Design2_spons_55 = {'left':'270px','top':'35px','opacity':0};
var final_css_prop_Saarang_Website_Design2_spons_55 = {'left':'498px','top':'558px','opacity':1};



function sponspageAnimations(){
	$('#Saarang_Website_Design2_spons_03').css(init_css_prop_Saarang_Website_Design2_spons_03).animate(final_css_prop_Saarang_Website_Design2_spons_03,{duration:600,queue:false});
	setTimeout(function(){$('#Saarang_Website_Design2_spons_05').css(init_css_prop_Saarang_Website_Design2_spons_05).animate(final_css_prop_Saarang_Website_Design2_spons_05,{duration:500,queue:false})},200);
	$('#Saarang_Website_Design2_spons_07').css(init_css_prop_Saarang_Website_Design2_spons_07).animate(final_css_prop_Saarang_Website_Design2_spons_07,{duration:600,queue:false});
	
	setTimeout(function(){$('#Saarang_Website_Design2_spons_11').css(init_css_prop_Saarang_Website_Design2_spons_11).animate(final_css_prop_Saarang_Website_Design2_spons_11,{duration:500,queue:false})},150);
	setTimeout(function(){$('#Saarang_Website_Design2_spons_14').css(init_css_prop_Saarang_Website_Design2_spons_14).animate(final_css_prop_Saarang_Website_Design2_spons_14,{duration:500,queue:false})},400);
	setTimeout(function(){$('#Saarang_Website_Design2_spons_16').css(init_css_prop_Saarang_Website_Design2_spons_16).animate(final_css_prop_Saarang_Website_Design2_spons_16,{duration:500,queue:false})},150);
	setTimeout(function(){$('#Saarang_Website_Design2_spons_18').css(init_css_prop_Saarang_Website_Design2_spons_18).animate(final_css_prop_Saarang_Website_Design2_spons_18,{duration:450,queue:false})},350);
	setTimeout(function(){$('#Saarang_Website_Design2_spons_21').css(init_css_prop_Saarang_Website_Design2_spons_21).animate(final_css_prop_Saarang_Website_Design2_spons_21,{duration:500,queue:false})},200);
	$('#Saarang_Website_Design2_spons_24').css(init_css_prop_Saarang_Website_Design2_spons_24).animate(final_css_prop_Saarang_Website_Design2_spons_24,{duration:600,queue:false});
	
	setTimeout(function(){$('#Saarang_Website_Design2_spons_31').css(init_css_prop_Saarang_Website_Design2_spons_31).animate(final_css_prop_Saarang_Website_Design2_spons_31,{duration:500,queue:false})},150);
	setTimeout(function(){$('#Saarang_Website_Design2_spons_27').css(init_css_prop_Saarang_Website_Design2_spons_27).animate(final_css_prop_Saarang_Website_Design2_spons_27,{duration:500,queue:false})},400);
	setTimeout(function(){$('#Saarang_Website_Design2_spons_33').css(init_css_prop_Saarang_Website_Design2_spons_33).animate(final_css_prop_Saarang_Website_Design2_spons_33,{duration:700,queue:false})},150);
	setTimeout(function(){$('#Saarang_Website_Design2_spons_38').css(init_css_prop_Saarang_Website_Design2_spons_38).animate(final_css_prop_Saarang_Website_Design2_spons_38,{duration:450,queue:false})},350);
	
setTimeout(function(){$('#Saarang_Website_Design2_spons_43').css(init_css_prop_Saarang_Website_Design2_spons_43).animate(final_css_prop_Saarang_Website_Design2_spons_43,{duration:500,queue:false})},200);
	$('#spons_38').css(init_css_prop_spons_38).animate(final_css_prop_spons_38,{duration:600,queue:false});
	
	setTimeout(function(){$('#Saarang_Website_Design2_spons_45').css(init_css_prop_Saarang_Website_Design2_spons_45).animate(final_css_prop_Saarang_Website_Design2_spons_45,{duration:500,queue:false})},150);
	setTimeout(function(){$('#Saarang_Website_Design2_spons_48').css(init_css_prop_Saarang_Website_Design2_spons_48).animate(final_css_prop_Saarang_Website_Design2_spons_48,{duration:500,queue:false})},400);
	setTimeout(function(){$('#Saarang_Website_Design2_spons_52').css(init_css_prop_Saarang_Website_Design2_spons_52).animate(final_css_prop_Saarang_Website_Design2_spons_52,{duration:500,queue:false})},150);
	setTimeout(function(){$('#Saarang_Website_Design2_spons_55').css(init_css_prop_Saarang_Website_Design2_spons_55).animate(final_css_prop_Saarang_Website_Design2_spons_55,{duration:450,queue:false})},350);
	
};

//$('document').ready(pageAnimations());


//Using setTimeout method of javascipt

/*
var main_timer_on = 0;
var left_Saarang_Website_Design2_spons_03 = 351.0;
var top_Saarang_Website_Design2_spons_03 = 489.0;
var opacity_Saarang_Website_Design2_spons_03 = 0;
var cssObj_Saarang_Website_Design2_spons_03;
$('#evtTrig').click(function(){
	if(!main_timer_on){
		main_timer_on = 1;
		var init_css_prop = {'left':'351px','top':'489px','opacity':0};
		var final_css_prop = {'left':'242px','top':'412px','opacity':1};
		$('#Saarang_Website_Design2_spons_03').css(init_css_prop);
		mainTrig();
	}
});

var master_clock = 0;
var t_Saarang_Website_Design2_spons_03;
function mainTrig(){
	if(master_clock<100){
		left_Saarang_Website_Design2_spons_03 = left_Saarang_Website_Design2_spons_03 - 0.109*10;
		top_Saarang_Website_Design2_spons_03 = top_Saarang_Website_Design2_spons_03 - 0.077*10;
		opacity_Saarang_Website_Design2_spons_03 = opacity_Saarang_Website_Design2_spons_03+0.001*10;
		cssObj_Saarang_Website_Design2_spons_03 = {'left':left_Saarang_Website_Design2_spons_03+'px','top':top_Saarang_Website_Design2_spons_03+'px','opacity':opacity_Saarang_Website_Design2_spons_03};
		$('#Saarang_Website_Design2_spons_03').css(cssObj_Saarang_Website_Design2_spons_03);
		master_clock++;
		t = setTimeout('mainTrig()',1);
	};
};

*/// JavaScript Document
