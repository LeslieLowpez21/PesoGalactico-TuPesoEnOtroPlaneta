function validar() {
	// declarar las variables 
	var u,c;
	//recuperar los datos
	u=document.getElementById("usuario").value;
	c=document.getElementById("pass").value;
	//validar los datos
	if (u=="Leslie"&&c=="110120") {
		alert("Usuario y Password Correctos");
		window.open("PesoGalactico.html");
		document.getElementById("usuario").value="";
		document.getElementById("pass").value="";
	}
	else{
		alert("Sus datos son incorrectos");
		document.getElementById("usuario").value;
		document.getElementById("pass").value;
	}
}