const default_max_number=3000;
const zero=0;
const space=/ /;
const rus_cymbols_l=/а-я/;
const eng_cymbols_l=/a-z/;
const rus_cymbols_u=/А-Я/;
const eng_cymbols_u=/A-Z/;

function output(e)
{
	var count=document.form.input_count.value;
	console.log(`Count:${count}`);

	if(count=="" || space.test(count))
	{
		
		console.log("Left text field has empty string or space.");
		alert("Input number.");
	}

	else if(rus_cymbols_u.test(count) || rus_cymbols_l.test(count) || eng_cymbols_u.test(count) || eng_cymbols_l.test(count))
	{
		console.log("Left text field has cymbols.");
		alert("It is neccessary to input only numbers");
	}

	else
	{
		var max_number=document.form.input_max_number.value;
		console.log(`Max number:${max_number}`);
		
		if(space.test(max_number))
		{
			console.log("Right text field has space.");
			alert("Input number.");
		}

		else if(rus_cymbols_u.test(max_number) || rus_cymbols_l.test(max_number) || eng_cymbols_u.test(max_number) || eng_cymbols_l.test(max_number))
		{
			console.log("Right text field has cymbols.");
			alert("It is neccessary to input only numbers");
		}
		
		else 
		{
			if(max_number=="")
			{
				output_random(default_max_number,zero,count);
			}

			else if(max_number>0)
			{
				output_random(max_number,zero,count);
			}

			else
			{
				console.log("Right text field has negative number.");
				alert("Don't input negative numbers.")
			}
		}
	}
}

function output_random(max,min,count)
{
	var array=[];
	for(var i=0;i<count;i++)
	{
		var rand=Math.floor(Math.random()*(max-min))+min;
		console.log(`Random number:${rand}`);
		array[i]=rand;
		console.log(`Row:${array}`);
	}
	document.getElementById("numbers").innerHTML=`<p>Row of random numbers:[${array}]</p>`;
	
}

var button=document.form.rand_button;
button.addEventListener("click",output);