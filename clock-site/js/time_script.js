var timeout;
let dayMap=new Map([[0,"Sun"],[1,"Mon"],[2,"Tue"],[3,"Wed"],[4,"Thu"],[5,"Fri"],[6,"Sat"]]);

function output()
{	
	if(document.getElementById("button").innerHTML=="Turn on output time")
	{
		document.getElementById("button").innerHTML="Turn off output time";
		time();
		document.getElementById("warning").innerHTML="Click button to stop output time.";
	}
	
	else
	{
		document.getElementById("button").innerHTML="Turn on output time";
		document.getElementById("time").innerHTML="Click button to output time.";
		document.getElementById("warning").innerHTML="";
		clearTimeout(timeout);
	}
}

function time()
{
	document.getElementById("time").innerHTML=dateToString(new Date());
	timeout=setTimeout(time,1000);
}

function dateToString(date)
{
	return "current time:"+dayToString(date.getDay())+" "+
			necessaryAdd(date.getDate())+"."+necessaryAdd(date.getMonth())+"."+
			date.getFullYear()+" "+necessaryAdd(date.getHours())+":"+
			necessaryAdd(date.getMinutes())+":"+necessaryAdd(date.getSeconds());
}

function dayToString(day)
{
	return dayMap.get(day);
}

function necessaryAdd(number)
{
	return number<10 ? "0"+number : number;
}