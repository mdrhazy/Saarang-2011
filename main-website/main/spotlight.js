//document.getElementById('Table_01').style.left = 500+'px';
//alert(document.body.clientWidth);

var timer_is_on = 0;
var t;
var left_parent = 0;
var opacity_parent = 1.0;
//var winW = window.innerWidth;
var winW = document.body.clientWidth;
var cssObj;
$('#spot_maindiv').hide(500);

//////////////////////////////////////////////////////////////////////
//Closing effect for the page

$('#close_spot').css('cursor','hand');
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

$('#close_spot').click(function(){
	if(jQuery.browser.msie){
		//alert('cancel button has been clicked');  //Somehow the cancel effect is not working without alerting inside the function
		//Somehow its working now!!!
	}
	var animObj = {'left':(winW-400.0),'opacity':0};
	$('#spot_maindiv').animate(animObj,1000,'easeOutQuad');
	setTimeout('hideDiv()',150);
});

function hideDiv(){
	$('#spot_maindiv').css('display','none');
	//setTimeout('window.location.reload()',1200);
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
//Transition of #cat1
//$('#cat1').css('opacity',0);

//Testing the transition using jquery
//var init_css_prop_cat1 = {'left':'351px','top':'589px','opacity':0};
//var final_css_prop_cat1 = {'left':'242px','top':'412px','opacity':1};
var init_css_prop_spotlight_head = {'left':'0px','top':'0px','opacity':0};
var final_css_prop_spotlight_head = {'left':'228px','top':'201px','opacity':1};
var init_css_prop_Saarang_Website_Design2_08 = {'left':'700px','top':'400px','opacity':0};
var final_css_prop_Saarang_Website_Design2_08 = {'left':'430px','top':'201px','opacity':1};
var init_css_prop_Saarang_Website_Design2_11 = {'left':'791px','top':'589px','opacity':0};
var final_css_prop_Saarang_Website_Design2_11 = {'left':'127px','top':'305px','opacity':1};
var init_css_prop_Saarang_Website_Design2_13 = {'left':'5px','top':'100px','opacity':0};
var final_css_prop_Saarang_Website_Design2_13 = {'left':'330px','top':'302px','opacity':1};
var init_css_prop_Saarang_Website_Design2_17 = {'left':'800px','top':'200px','opacity':0};
var final_css_prop_Saarang_Website_Design2_17 = {'left':'533px','top':'302px','opacity':1};
var init_css_prop_Saarang_Website_Design2_20 = {'left':'24px','top':'350px','opacity':0};
var final_css_prop_Saarang_Website_Design2_20 = {'left':'229px','top':'404px','opacity':1};
var init_css_prop_Saarang_Website_Design2_23 = {'left':'700px','top':'650px','opacity':0};
var final_css_prop_Saarang_Website_Design2_23 = {'left':'430px','top':'404px','opacity':1};
var init_css_prop_Saarang_Website_Design2_26 = {'left':'0px','top':'850px','opacity':0};
var final_css_prop_Saarang_Website_Design2_26 = {'left':'127px','top':'505px','opacity':1};
var init_css_prop_Saarang_Website_Design2_29 = {'left':'700px','top':'800px','opacity':0};
var final_css_prop_Saarang_Website_Design2_29 = {'left':'533px','top':'505px','opacity':1};
var init_css_prop_close_spot = {'left':'0px','top':'500px','opacity':0};
var final_css_prop_close_spot = {'left':'195px','top':'171px','opacity':1};

function spotlightpageAnimations(){
	//$('#cat1').css(init_css_prop_cat1).animate(final_css_prop_cat1,{duration:550,queue:false});
	//setTimeout(function(){$('#cat2').css(init_css_prop_cat2).animate(final_css_prop_cat2,{duration:450,queue:false})},200);
	//$('#cat5').css(init_css_prop_cat5).animate(final_css_prop_cat5,{duration:550,queue:false});
	//setTimeout(function(){$('#mainbox').css(init_css_prop_mainbox).animate(final_css_prop_mainbox,{duration:450,queue:false})},400);
	//$('#Events').css(init_css_prop_Events).animate(final_css_prop_Events,{duration:550,queue:false});
	
	setTimeout(function(){$('#spotlight_head').css(init_css_prop_spotlight_head).animate(final_css_prop_spotlight_head,{duration:450,queue:false})},150);
	setTimeout(function(){$('#close_spot').css(init_css_prop_close_spot).animate(final_css_prop_close_spot,{duration:400,queue:false})},600);
	setTimeout(function(){$('#Saarang_Website_Design2_08').css(init_css_prop_Saarang_Website_Design2_08).animate(final_css_prop_Saarang_Website_Design2_08,{duration:450,queue:false})},400);
	setTimeout(function(){$('Saarang_Website_Design2_11').css(init_css_prop_Saarang_Website_Design2_11).animate(final_css_prop_Saarang_Website_Design2_11,{duration:450,queue:false})},150);
	setTimeout(function(){$('#Saarang_Website_Design2_13').css(init_css_prop_Saarang_Website_Design2_13).animate(final_css_prop_Saarang_Website_Design2_13,{duration:450,queue:false})},350);
	setTimeout(function(){$('#Saarang_Website_Design2_17').css(init_css_prop_Saarang_Website_Design2_17).animate(final_css_prop_Saarang_Website_Design2_17,{duration:400,queue:false})},400);
	setTimeout(function(){$('#Saarang_Website_Design2_20').css(init_css_prop_Saarang_Website_Design2_20).animate(final_css_prop_Saarang_Website_Design2_20,{duration:450,queue:false})},450);
	setTimeout(function(){$('#Saarang_Website_Design2_23').css(init_css_prop_Saarang_Website_Design2_23).animate(final_css_prop_Saarang_Website_Design2_23,{duration:400,queue:false})},400);
	setTimeout(function(){$('#Saarang_Website_Design2_26').css(init_css_prop_Saarang_Website_Design2_26).animate(final_css_prop_Saarang_Website_Design2_26,{duration:450,queue:false})},400);
	setTimeout(function(){$('#cat6').css(init_css_prop_cat6).animate(final_css_prop_cat6,{duration:450,queue:false})},150);
	setTimeout(function(){$('#Saarang_Website_Design2_29').css(init_css_prop_Saarang_Website_Design2_29).animate(final_css_prop_Saarang_Website_Design2_29,{duration:400,queue:false})},350);
	
	
	
};

//$('document').ready(pageAnimations());


//Using setTimeout method of javascipt

/*
var main_timer_on = 0;
var left_cat1 = 351.0;
var top_cat1 = 489.0;
var opacity_cat1 = 0;
var cssObj_cat1;
$('#evtTrig').click(function(){
	if(!main_timer_on){
		main_timer_on = 1;
		var init_css_prop = {'left':'351px','top':'489px','opacity':0};
		var final_css_prop = {'left':'242px','top':'412px','opacity':1};
		$('#cat1').css(init_css_prop);
		mainTrig();
	}
});

var master_clock = 0;
var t_cat1;
function mainTrig(){
	if(master_clock<100){
		left_cat1 = left_cat1 - 0.109*10;
		top_cat1 = top_cat1 - 0.077*10;
		opacity_cat1 = opacity_cat1+0.001*10;
		cssObj_cat1 = {'left':left_cat1+'px','top':top_cat1+'px','opacity':opacity_cat1};
		$('#cat1').css(cssObj_cat1);
		master_clock++;
		t = setTimeout('mainTrig()',1);
	};
};

*/// JavaScript Document
