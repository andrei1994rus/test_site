const default_max_number=3000;
const zero=0;
const numbers=/[1-9]/;
const notNumbers=/\D/;
var countHasChar;
var maxHasChar;

function output(e)
{
	var count=document.form.input_count.value;
	console.log(`Count:${count}`);

	countHasChar=stringHasChar(count);
	console.log(`countHasChar:${countHasChar}`);

	if(count=="")
	{
		console.log("Left text field has empty string.");
		alert("Don't left empty string in count.");
	}

	else if(countHasChar)
	{
		searchDash(count,document.form.input_count);
		console.log(`countHasChar:${countHasChar}`);
		
		if(countHasChar)
		{
			console.log("Left text field has char.");
			alert("It is neccessary to enter only integer numbers in left text field.");
		}
	}

	if(!countHasChar)
	{
		if(count<=0)
		{
			console.log("Left text field has number <=0.");
			alert("Don't enter number <=0 in left text field.");
		}

		else if(count>0)
		{
			var max_number=document.form.input_max_number.value;
			console.log(`Max number:${max_number}`);
			maxHasChar=stringHasChar(max_number);
			console.log(`maxHasChar:${maxHasChar}`);

			if(maxHasChar)
			{
				searchDash(max_number,document.form.input_max_number);
				if(maxHasChar)
				{
					console.log("Right text field has char.");
					alert("It is neccessary to enter only integer numbers in right text field.");
				}
			}
			
			if(!maxHasChar)
			{
				if(max_number=="")
				{
					alert(`You didn't enter max number in right text field. Default max number is ${default_max_number}.`);
					output_random(default_max_number,zero,count);
				}

				else if(max_number>0)
				{
					output_random(max_number,zero,count);
				}

				else if(max_number<=0)
				{
					console.log("Right text field has number <=0.");
					alert("Don't enter number <=0 in right text field.");
				}
			}
		}
	}
}

function stringHasChar(string)
{
	return notNumbers.test(string) ? true : false;
}

function searchDash(string,input)
{
	if(string.search(/\p{Pd}/gu)==0 && string.length>1)
	{
		console.log("found dashes:"+string.match(/\p{Pd}/gu).length);
		
		if(string.match(/\p{Pd}/gu).length==1)
		{
			string=string.replace(/\p{Pd}/gu,'');
			console.log("changed input:"+string);
			
			if(!stringHasChar(string))
			{
				setHasChar(false,input);
			}
			
			else
			{
				setHasChar(true,input);
			}
		}
		
		else
		{
			setHasChar(true,input);
		}
	}
	
	else
	{
		setHasChar(true,input);
	}
}

function setHasChar(value,input)
{
	if(input==document.form.input_count)
	{
		console.log("input==document.form.input_count");
		countHasChar=value;		
	}
	
	else if(input==document.form.input_max_number)
	{
		console.log("input==document.form.input_max_number");
		maxHasChar=value;
	}
}

function output_random(max,min,count)
{
	var array=[];
	for(var i=0;i<count;i++)
	{
		var rand=Math.floor(Math.random()*(max-min))+min;
		console.log(`Random number [${i}]:${rand}`);
		array[i]=rand;
		console.log(`Row:${array}`);
	}
	document.getElementById("numbers").innerHTML=`<p>Row of random numbers:[${array}]</p>`;
	
}

var button=document.form.rand_button;
button.addEventListener("click",output);