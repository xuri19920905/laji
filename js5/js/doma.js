function datedate(){
	var date = new Date();
	document.getElementById('textArea1').innerHTML = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
}


function gainDays(){
	var monthnumber = document.getElementById('textArea21').value;
	var daysgroup = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31,];
	document.getElementById('textArea2').innerHTML = daysgroup[monthnumber - 1];
}

function Stringdate(){
	var date = new Date('2015-11-23 19:35:36');
	document.getElementById('textArea3').innerHTML = date;
}

function groupString(){
	var arr =[23, 3, 56, 90, 4, 8];
	var dstr = arr.join('-');
	//var group = arr.sep('+');
	document.getElementById('textArea41').innerHTML = dstr;
	//document.getElementById('textArea42').innerHTML = group;
}


function judge(){
	var date = new Date();
    document.getElementById('textArea5').innerHTML = (Date.parse('2015/10/23') - Date.parse('2014/10/23'))/(24*60*60*1000);
}


function gainDate(){
	var date = new Date();
	var daysnumber = document.getElementById('textArea61').value;
	document.getElementById('textArea6').innerHTML = new Date(Date.parse('2015/10/23') + daysnumber*24*60*60*1000);
}



//window.onload = function(){
//	getTimes();
//	setInterval(getTimes, 1000);
//}
//var date = new Date();
//document.write('系统当前时间：' + date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + '&nbsp;' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds());
//var hours = date.getHours();
//var minutes = date.getMinutes();
//var seconds = date.getSeconds();
//var timesgroup = [];
//timesgroup.push(parseInt(hours / 10));
//timesgroup.push(hours % 10);
//timesgroup.push(parseInt(minutes / 10));
//timesgroup.push(minutes % 10);
//timesgroup.push(parseInt(seconds / 10));
//timesgroup.push(seconds % 10);
//function getTimes(){
//	for(var attr in timesgroup){		
//		text = timesgroup[0] + timesgroup[1] + '小时' + timesgroup[2] + timesgroup[3] + '分' + timesgroup[4] + timesgroup[5] + '秒';	
// }
// document.getElementById('textArea72').innerHTML ='当前页面已停留时间：' + text;	
//}                


/*   
var second=0; 
var minute=0; 
var hour=0; 
 
{ 
second++; 
if(second==60) 
{ 
second=0;minute+=1; 
} 
if(minute==60) 
{ 
minute=0;hour+=1; 
} 
document.getElementById('textArea72').innerHTML ='当前页面已停留时间：' + hour+"时"+minute+"分"+second+"秒"; 
window.setTimeout("interval();",1000);     
}



window.onload = function(){
	getTimes();
	setInterval(getTimes, 1000);
}
function getTimes(){
	var dates = new Date();
	var year = dates.getFullYear();
	var month = dates.getMonth() + 1;
	var date = dates.getDate();
	var hours = dates.getHours();
	var minutes = dates.getMinutes();
	var seconds = dates.getSeconds();
	var timesgroup = [];
	timesgroup.push(parseInt(year / 1000));
	timesgroup.push(parseInt((year % 1000)/100));
	timesgroup.push(parseInt(((year % 1000)%100)/10));
	timesgroup.push(parseInt(year % 10));
	timesgroup.push(parseInt(month / 10));
	timesgroup.push(month % 10);
	timesgroup.push(parseInt(date / 10));
	timesgroup.push(date % 10);
	timesgroup.push(parseInt(hours / 10));
	timesgroup.push(hours % 10);
	timesgroup.push(parseInt(minutes / 10));
	timesgroup.push(minutes % 10);
	timesgroup.push(parseInt(seconds / 10));
	timesgroup.push(seconds % 10);
	var text = '';
	for(i = 1; i <= 14; i++){
		document.getElementById('textArea71').innerHTML ='系统当前时间：' + timesgroup[0] + timesgroup[1] + timesgroup[2] + timesgroup[3] + '-' + timesgroup[4] + timesgroup[5] + '-' + timesgroup[6] + timesgroup[7] + '  ' + timesgroup[8] + timesgroup[9] + ':' + timesgroup[10] + timesgroup[11] + ':' + timesgroup[12] + timesgroup[13];			
	}
}
*/


window.onload = function(){
	getTimes();
	setInterval(getTimes, 1000);
}
function getTimes(){
	var dates = new Date();
	var year = dates.getFullYear();
	var month = dates.getMonth() + 1;
	var date = dates.getDate();
	var hours = dates.getHours();
	var minutes = dates.getMinutes();
	var seconds = dates.getSeconds();
	var timesgroup = [];
	timesgroup.push(parseInt(hours / 10));
	timesgroup.push(hours % 10);
	timesgroup.push(parseInt(minutes / 10));
	timesgroup.push(minutes % 10);
	timesgroup.push(parseInt(seconds / 10));
	timesgroup.push(seconds % 10);
	 document.getElementById('textArea71').innerHTML ='当前页面已停留时间：' + year + '-' + month + '-' + date + '  ' + timesgroup[0] + timesgroup[1] + ':' + timesgroup[2] + timesgroup[3] + ':' + timesgroup[4] + timesgroup[5];	
}


window.setTimeout("interval();",1000);      
var hours = 0;
var minutes = 0;
var seconds = 0; 
function interval(){
	seconds++
	if(seconds == 60){
		seconds = 0;
		minutes++;
	}
	if( minutes == 60){
		 minutes = 0;
		hours++;
	}
	document.getElementById('textArea72').innerHTML ='当前页面已停留时间：' + hours + '时' + minutes + '分' + seconds + '秒';
window.setTimeout("interval();",1000); 	
}


function searchReplace(){
	var searchWord = document.getElementById('textArea81').value;
	var replaceWord = document.getElementById('textArea82').value;
	var word = document.getElementById('textArea83').innerHTML;
    var searchWordgroup = [];
    var pos = word.indexOf(searchWord);
    word = word.replace(searchWord,replaceWord);
    while(pos > -1){
    	searchWordgroup.push(pos);  	 	
    	pos = word.indexOf(searchWord, pos + 1);
        word = word.replace(searchWord,replaceWord);
    }
    document.getElementById('textArea83').innerHTML = word;
}


//function searchReplace(){
//	var searchWord = document.getElementById('textArea81').value;
//	var replaceWord = document.getElementById('textArea82').value;
//	var word = document.getElementById('textArea83').innerHTML;
//  var index = word.search(searchWord);
//  while(index > -1){
//  	word = word.replace(searchWord,replaceWord);
//  	index = word.search(searchWord);
//  }
// document.getElementById('textArea83').innerHTML = word; 
//}	




