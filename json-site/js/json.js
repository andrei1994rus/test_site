var user=
{
    name:"Unnamed",
    age:26
};

function serialize()
{
	var name_value=document.getElementById("name").value;
	var age_value=document.getElementById("age").value;
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
	else
	{
		user=
		{
		    name:name_value,
		    age:age_value
		};
		var serializedUser=JSON.stringify(user);
		console.log(`serializedUser:${serializedUser}`);
		document.getElementById("message").innerHTML=`<h1>Serialized user:${serializedUser}</h1>`;
		$("#serialize_form [data-dismiss=modal]").trigger({ type: "click" });
	}
}

function parse()
{
	var serializedUser=JSON.stringify(user);
	var parsedUser=JSON.parse(serializedUser);
	console.log(`${parsedUser}`);
	document.getElementById("message").innerHTML=`<h1>Parsed name:${parsedUser.name};parsed age:${parsedUser.age}</h1>`;
}