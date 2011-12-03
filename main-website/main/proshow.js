//document.getElementById('Table_01').style.left = 500+'px';
//alert(document.body.clientWidth);

var timer_is_on = 0;
var t;
var left_parent = 0;
var opacity_parent = 1.0;
//var winW = window.innerWidth;
var winW = document.body.clientWidth;
var cssObj;
$('#pro_maindiv').hide(500);

//////////////////////////////////////////////////////////////////////
//Closing effect for the page

$('#close_pro').css('cursor','hand');
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

$('#close_pro').click(function(){
	if(jQuery.browser.msie){
		//alert('cancel button has been clicked');  //Somehow the cancel effect is not working without alerting inside the function
		//Somehow its working now!!!
	}
	var animObj = {'left':(winW-100.0),'opacity':0};
	$('#pro_maindiv').animate(animObj,1300,'easeOutQuad');
	setTimeout('hideDiv()',500);
});

function hideDiv(){
	$('#pro_maindiv').css('display','none');
	//setTimeout('window.location.reload()',1200);
	$('#close_pro').css('opacity',0);
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
//Transition of #Saarang_Websitepro_Design2_03
//$('#Saarang_Websitepro_Design2_03').css('opacity',0);

//Testing the transition using jquery
//var init_css_prop_Saarang_Websitepro_Design2_03 = {'left':'351px','top':'589px','opacity':0};
//var final_css_prop_Saarang_Websitepro_Design2_03 = {'left':'242px','top':'412px','opacity':1};

var init_css_prop_Saarang_Websitepro_Design2_03 = {'left':'100px','top':'301px','opacity':0};
var final_css_prop_Saarang_Websitepro_Design2_03 = {'left':'259px','top':'129px','opacity':1};
var init_css_prop_Saarang_Websitepro_Design2_06 = {'left':'791px','top':'589px','opacity':0};
var final_css_prop_Saarang_Websitepro_Design2_06 = {'left':'496px','top':'130px','opacity':1};
var init_css_prop_Saarang_Websitepro_Design2_08 = {'left':'573px','top':'527px','opacity':0};
var final_css_prop_Saarang_Websitepro_Design2_08 = {'left':'361px','top':'231px','opacity':1};
var init_css_prop_Saarang_Websitepro_Design2_13 = {'left':'450px','top':'189px','opacity':0};
var final_css_prop_Saarang_Websitepro_Design2_13 = {'left':'259px','top':'366px','opacity':1};
var init_css_prop_Saarang_Websitepro_Design2_16 = {'left':'600px','top':'-50px','opacity':0};
var final_css_prop_Saarang_Websitepro_Design2_16 = {'left':'496px','top':'366px','opacity':1};
var init_css_prop_Saarang_Websitepro_Design2_23 = {'left':'270px','top':'35px','opacity':0};
var final_css_prop_Saarang_Websitepro_Design2_23 = {'left':'158px','top':'468px','opacity':1};
var init_css_prop_Saarang_Websitepro_Design2_26 = {'left':'500px','top':'-160px','opacity':0};
var final_css_prop_Saarang_Websitepro_Design2_26 = {'left':'596px','top':'467px','opacity':1};

var init_css_prop_close_pro = {'left':'318px','top':'78px','opacity':0};
var final_css_prop_close_pro = {'left':'698px','top':'433px','opacity':1};

function propageAnimations(){
	$('#Saarang_Websitepro_Design2_03').css(init_css_prop_Saarang_Websitepro_Design2_03).animate(final_css_prop_Saarang_Websitepro_Design2_03,{duration:550,queue:false});
	setTimeout(function(){$('#Saarang_Websitepro_Design2_06').css(init_css_prop_Saarang_Websitepro_Design2_06).animate(final_css_prop_Saarang_Websitepro_Design2_06,{duration:450,queue:false})},200);
	$('#Saarang_Websitepro_Design2_16').css(init_css_prop_Saarang_Websitepro_Design2_16).animate(final_css_prop_Saarang_Websitepro_Design2_16,{duration:550,queue:false});
	
	setTimeout(function(){$('#Saarang_Websitepro_Design2_08').css(init_css_prop_Saarang_Websitepro_Design2_08).animate(final_css_prop_Saarang_Websitepro_Design2_08,{duration:450,queue:false})},150);
	setTimeout(function(){$('#Saarang_Websitepro_Design2_13').css(init_css_prop_Saarang_Websitepro_Design2_13).animate(final_css_prop_Saarang_Websitepro_Design2_13,{duration:450,queue:false})},400);
	setTimeout(function(){$('#Saarang_Websitepro_Design2_23').css(init_css_prop_Saarang_Websitepro_Design2_23).animate(final_css_prop_Saarang_Websitepro_Design2_23,{duration:450,queue:false})},150);
	setTimeout(function(){$('#Saarang_Websitepro_Design2_26').css(init_css_prop_Saarang_Websitepro_Design2_26).animate(final_css_prop_Saarang_Websitepro_Design2_26,{duration:400,queue:false})},350);
	setTimeout(function(){$('#close_pro').css(init_css_prop_close_pro).animate(final_css_prop_close_pro,{duration:400,queue:false})},350);
	
};

//$('document').ready(pageAnimations());


//Using setTimeout method of javascipt

/*
var main_timer_on = 0;
var left_Saarang_Websitepro_Design2_03 = 351.0;
var top_Saarang_Websitepro_Design2_03 = 489.0;
var opacity_Saarang_Websitepro_Design2_03 = 0;
var cssObj_Saarang_Websitepro_Design2_03;
$('#evtTrig').click(function(){
	if(!main_timer_on){
		main_timer_on = 1;
		var init_css_prop = {'left':'351px','top':'489px','opacity':0};
		var final_css_prop = {'left':'242px','top':'412px','opacity':1};
		$('#Saarang_Websitepro_Design2_03').css(init_css_prop);
		mainTrig();
	}
});

var master_clock = 0;
var t_Saarang_Websitepro_Design2_03;
function mainTrig(){
	if(master_clock<100){
		left_Saarang_Websitepro_Design2_03 = left_Saarang_Websitepro_Design2_03 - 0.109*10;
		top_Saarang_Websitepro_Design2_03 = top_Saarang_Websitepro_Design2_03 - 0.077*10;
		opacity_Saarang_Websitepro_Design2_03 = opacity_Saarang_Websitepro_Design2_03+0.001*10;
		cssObj_Saarang_Websitepro_Design2_03 = {'left':left_Saarang_Websitepro_Design2_03+'px','top':top_Saarang_Websitepro_Design2_03+'px','opacity':opacity_Saarang_Websitepro_Design2_03};
		$('#Saarang_Websitepro_Design2_03').css(cssObj_Saarang_Websitepro_Design2_03);
		master_clock++;
		t = setTimeout('mainTrig()',1);
	};
};

*/// JavaScript Document
