function clickedButton(){
	const windowInput = document.getElementById("window-input");
	windowInput.innerHTML = "";
	const iframeinput = document.createElement("IFRAME");
	iframeinput.setAttribute("id", "iframe-input");
	
	if(event.target.value === "startseite"){
		iframeinput.setAttribute("src", "./Modelldok.html");
		changeButtonInput("modelldok");
	} else {
		iframeinput.setAttribute("src", "./entrypage.html");
		changeButtonInput("Startseite");
	}
	windowInput.appendChild(iframeinput);	
}

function changeButtonInput(inputPage){
	const buttonChange = document.getElementById("button-change");
	if(inputPage === "modelldok"){
		buttonChange.setAttribute("value","modelldok");
	} else {
		buttonChange.setAttribute("value","startseite");	
	}
}