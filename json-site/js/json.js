let user=
{
    name:"Unnamed",
    age:26
};

function serialize()
{
	let name_value=document.getElementById("name").value;
	let age_value=document.getElementById("age").value;
	
	if(name_value=="")
	{
		console.log("Left text field has empty string.");
		alert("Don't left empty string in left text field.");
	}

	if(age_value=="")
	{
		console.log("Right text field has empty string.");
		alert("Don't left empty string in right text field.");
	}

	else if(name_value!=="" && age_value!=="")
	{
		user=
		{
		    name:name_value,
		    age:age_value
		};
		let serializedUser=JSON.stringify(user);
		let maxAge=60*60*24*365;
		document.cookie=`${serializedUser};max-age=${maxAge}`;
		console.log(`serializedUser:${serializedUser}`);
		console.log(`cookie: ${document.cookie}`);
		document.getElementById("message").innerHTML=`<h1>Serialized user:${serializedUser}</h1>`;
		$("#serialize_form [data-dismiss=modal]").trigger({ type: "click" });
	}
}

function parse()
{
	let serializedUser;

	if(document.cookie)
	{
		serializedUser=document.cookie;
		console.log(`from cookie: ${serializedUser}`);
	}

	else
	{
		serializedUser=JSON.stringify(user);
	}

	let parsedUser=JSON.parse(serializedUser);
	console.log('parsedUser:',parsedUser);
	document.getElementById("message").innerHTML=`<h1>Parsed name:${parsedUser.name};parsed age:${parsedUser.age}</h1>`;
}