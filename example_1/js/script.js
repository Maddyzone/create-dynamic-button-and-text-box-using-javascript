var i = 1; // define global variable i to loop the button click event as much as we want

function addButton(){
	
	var new_line = document.createElement("br");
	var new_line_2 = document.createElement("br");

	// these both of the lines will create dynamically new lines before putting any new textbox and button control.

	// create new text box control below using attribute of input type text box and assign name and id dynamically by using variable i defined as global variable above.

	var textbox = document.createElement("input");
	textbox.type= "text";
	textbox.name= "txt_" + i;
	textbox.id= "txtid" + i;
	textbox.placeholder ="txt_"+i;

	var btn = document.createElement("input");
	btn.type = "button";
	btn.name = "button"+i;
	btn.value = "Click Me";
	btn.id = "id"+i;

	// assign click event for each new button element created dynamically using attribiute of input type button and assign name and id dynamically using variable i defined as global variable above.

	btn.setAttribute("onclick","showMessage()");

	//on click on every newly created button a "showMessage" javascript function will call, which will show us the value of their corresponding text box.

	// assign both of these textbox and button controls to blank div by id "object_data"  in html document using below code.

	document.getElementById("object_data").appendChild(textbox);
	document.getElementById("object_data").appendChild(btn);
	document.getElementById("object_data").appendChild(new_line);
	document.getElementById("object_data").appendChild(new_line_2);


	i++ //increment the counter
}



function showMessage(){
	
	var currID = showMessage.caller.arguments[0].target.id; 

	// this statement will returns us the value ofid attribute of button on which we currently click among dynamically created buttons.

	// this "docuemnt.getElementById("txt"+currId).value" statement , will get the value of corresponding text box to button on behalf of "id" attribute.
	
	alert(document.getElementById("txt"+currID).value);

}
