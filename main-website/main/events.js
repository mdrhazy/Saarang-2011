//document.getElementById('Table_01').style.left = 500+'px';
//alert(document.body.clientWidth);

var timer_is_on = 0;
var t;
var left_parent = 0;
var opacity_parent = 1.0;
//var winW = window.innerWidth;
var winW = document.body.clientWidth;
var cssObj;
$('#Table_01').hide(500);

//////////////////////////////////////////////////////////////////////
//Closing effect for the page

$('#cancel').css('cursor','hand');
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

$('#cancel').click(function(){
	if(jQuery.browser.msie){
		//alert('cancel button has been clicked');  //Somehow the cancel effect is not working without alerting inside the function
		//Somehow its working now!!!
	}
	var animObj = {'left':(winW-400.0),'opacity':0};
	$('#Table_01').animate(animObj,1000,'easeOutQuad');
	setTimeout('hideDiv()',150);
});

function hideDiv(){
	$('#Table_01').css('display','none');
	//setTimeout('window.location.reload()',1200);
	$('#spotlight,#hospitality,#sponsors,#landing5,#main,#random,#proshows').css('opacity',0);
	$("#landing_table").fadeIn("fast");
	landingPageAnimations();
	$("#landingcancel").show();
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
var init_css_prop_cat1 = {'left':'573px','top':'589px','opacity':0};
var final_css_prop_cat1 = {'left':'462px','top':'409px','opacity':1};
var init_css_prop_cat2 = {'left':'100px','top':'301px','opacity':0};
var final_css_prop_cat2 = {'left':'352px','top':'299px','opacity':1};
var init_css_prop_cat5 = {'left':'791px','top':'589px','opacity':0};
var final_css_prop_cat5 = {'left':'682px','top':'409px','opacity':1};
var init_css_prop_mainbox = {'left':'573px','top':'527px','opacity':0};
var final_css_prop_mainbox = {'left':'572px','top':'299px','opacity':1};
var init_css_prop_cat10 = {'left':'450px','top':'189px','opacity':0};
var final_css_prop_cat10 = {'left':'242px','top':'189px','opacity':1};
var init_css_prop_cat3 = {'left':'600px','top':'-50px','opacity':0};
var final_css_prop_cat3 = {'left':'462px','top':'189px','opacity':1};
var init_css_prop_cat4 = {'left':'270px','top':'35px','opacity':0};
var final_css_prop_cat4 = {'left':'682px','top':'189px','opacity':1};
var init_css_prop_cat6 = {'left':'500px','top':'-160px','opacity':0};
var final_css_prop_cat6 = {'left':'352px','top':'79px','opacity':1};
var init_css_prop_cat7 = {'left':'100px','top':'78px','opacity':0};
var final_css_prop_cat7 = {'left':'572px','top':'79px','opacity':1};
var init_css_prop_cat8 = {'left':'318px','top':'78px','opacity':0};

var final_css_prop_cat8 = {'left':'792px','top':'79px','opacity':1};
var init_css_prop_cat9 = {'left':'464px','top':'-157px','opacity':0};
var final_css_prop_cat9 = {'left':'462px','top':'-31px','opacity':1};
var init_css_prop_Events = {'left':'940px','top':'-32px','opacity':0};
var final_css_prop_Events = {'left':'682px','top':'-32px','opacity':1};
var init_css_prop_cat11 = {'left':'464px','top':'-157px','opacity':0};
var final_css_prop_cat11 = {'left':'792px','top':'299px','opacity':1};
var init_css_prop_cat12 = {'left':'682px','top':'412px','opacity':0};
var final_css_prop_cat12 = {'left':'902px','top':'189px','opacity':1};
//var init_css_prop_cat13 = {'left':'1000px','top':'290px','opacity':0};
//var final_css_prop_cat13 = {'left':'900px','top':'415px','opacity':1};
var init_css_prop_cat14 = {'left':'355px','top':'301px','opacity':0};
var final_css_prop_cat14 = {'left':'969px','top':'322px','opacity':1};
var init_css_prop_cancel = {'left':'1200px','top':'8px','opacity':0};
var final_css_prop_cancel = {'left':'902px','top':'45px','opacity':1};
function pageAnimations(){
	$('#cat1').css(init_css_prop_cat1).animate(final_css_prop_cat1,{duration:550,queue:false});
	setTimeout(function(){$('#cat2').css(init_css_prop_cat2).animate(final_css_prop_cat2,{duration:450,queue:false})},200);
	$('#cat5').css(init_css_prop_cat5).animate(final_css_prop_cat5,{duration:550,queue:false});
	setTimeout(function(){$('#mainbox').css(init_css_prop_mainbox).animate(final_css_prop_mainbox,{duration:450,queue:false})},400);
	$('#Events').css(init_css_prop_Events).animate(final_css_prop_Events,{duration:550,queue:false});
	setTimeout(function(){$('#cat3').css(init_css_prop_cat3).animate(final_css_prop_cat3,{duration:450,queue:false})},150);
	setTimeout(function(){$('#cat4').css(init_css_prop_cat4).animate(final_css_prop_cat4,{duration:450,queue:false})},400);
	setTimeout(function(){$('#cat6').css(init_css_prop_cat6).animate(final_css_prop_cat6,{duration:450,queue:false})},150);
	setTimeout(function(){$('#cat7').css(init_css_prop_cat7).animate(final_css_prop_cat7,{duration:400,queue:false})},350);
	setTimeout(function(){$('#cat8').css(init_css_prop_cat8).animate(final_css_prop_cat8,{duration:400,queue:false})},350);
	setTimeout(function(){$('#cat9').css(init_css_prop_cat9).animate(final_css_prop_cat9,{duration:450,queue:false})},400);
	setTimeout(function(){$('#cat10').css(init_css_prop_cat10).animate(final_css_prop_cat10,{duration:350,queue:false})},400);
	$('#cat11').css(init_css_prop_cat11).animate(final_css_prop_cat11,{duration:450,queue:false});
	setTimeout(function(){$('#cat12').css(init_css_prop_cat12).animate(final_css_prop_cat12,{duration:450,queue:false})},200);
	//setTimeout(function(){$('#cat13').css(init_css_prop_cat13).animate(final_css_prop_cat13,{duration:550,queue:false})},150);
	//setTimeout(function(){$('#cat14').css(init_css_prop_cat14).animate(final_css_prop_cat14,{duration:550,queue:false})},150);
	setTimeout(function(){$('#cancel').css(init_css_prop_cancel).animate(final_css_prop_cancel,{duration:200,queue:false})},750);
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