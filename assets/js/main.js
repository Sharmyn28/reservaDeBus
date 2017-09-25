'use strict';

class Bus{
	constructor () {
		this.passenger = [];
		this.seat = undefined;
	}
	
	redirect(event){
		/*function nAsiento(){
			this.retornaAsiento= function (asiento){
				this.asiento= asiento;
			}
		}
		var numero = new nAsiento();*/
		let asiento = event.target.textContent;
		//numero.retornaAsiento(asiento);
	
		this.seat = parseInt(asiento);
		let mostrar = document.getElementById("mostrar");
		mostrar.innerHTML = "Seleccionó el asiento " + asiento;
		(event.target).style.backgroundColor = ((event.target).style.backgroundColor=='rgb(248, 237, 80)') ? 'transparent' : '#F8ED50';
		
		return this.seat;
		// crear funcion que traiga caja
	}

	reinicia(){
		document.getElementById("nombre").value = "";
		document.getElementById("apellido").value = "";
		document.getElementById("dni").value = "";
		document.getElementById("dniBuscar").value ="";
		document.getElementById("resultado").value ="";
		document.getElementById("mostrar").innerHTML = "Seleccione asiento";
	}

	obtenerListaPasajeros() {
		return passenger;
	}
	reservar(name, apellido, dni, asiento){	
		var name = document.getElementById("nombre").value;
		var apellido = document.getElementById("apellido").value;
		var dni = document.getElementById("dni").value;
		var asiento = this.seat;
	
		function Pasajero(nombre, apellido, dni, asiento){
			this.nombre = nombre;
			this.apellido = apellido;
			this.dni = dni;
			this.asiento = asiento;
		}
	
		var nuevoP = new Pasajero(name, apellido, dni, asiento);
		this.passenger.push(nuevoP);
		console.log(this.passenger);
		alert("Pasajero registrado"+ "\n"+"Nombre: " + nuevoP.nombre + "\n"+"Apellido: " + nuevoP.apellido + "\n"+ "DNI: "+ nuevoP.dni + "\n"+ "Asiento: "+ nuevoP.asiento);
		this.reinicia();
		//return true;
	}

	buscar(){
		var dniBuscar = document.getElementById("dniBuscar").value;
		dniBuscar = parseInt(dniBuscar);
		var encontrado;
		for(var i in this.passenger){
			if(dniBuscar == this.passenger[i].dni && passenger[i] != undefined){
				encontrado = this.passenger[i];				
				document.getElementById("nombre").value = encontrado.nombre;
				document.getElementById("apellido").value = encontrado.apellido;
				document.getElementById("dni").value = encontrado.dni;
				return true;
			}
		}
		console.log(encontrado);
		this.reinicia();
	}

	mostrar(pasaj) {
		this.reinicia();
		var rpta = document.getElementById("resultado");
		var res="";
	
		var nam = "<strong>Nombre: </strong>" + pasaj.nombre + "<br>";
		var las = "<strong>Apellido: </strong>" + pasaj.apellido + "<br>";
		var i = "<strong>DNI: </strong>" + pasaj.dni + "<br>";
		var as = "<strong>Asiento: </strong>"+ pasaj.asiento;
		res += "<div class='lista' align='center'>"+ nam+ las + i+ as+"</div>";
		rpta.innerHTML += res;
	}

	listar(){
		var res = [];
		for(var i of this.passenger){
			res += this.mostrar(i);
		}
		return res;
	}
	
	cancelar(){
		this.reinicia();
	}

	iniciar(){
		var asientos = document.getElementsByTagName('td');
		for (var i = 0; i < asientos.length; i++) {
			asientos[i].addEventListener('click',this.redirect,false);
		}
		$('#btnReservar').click( () => this.reservar());
		$('#btnListar').click( () => this.listar());
	}
}


$(document).ready(()=>{
	var app = new Bus ();
	app.iniciar();
})
/*function redirect(event){
    var asiento = event.target.textContent;
    numero.retornaAsiento(asiento);

    var seat = parseInt(asiento);
    var mostrar = document.getElementById("mostrar");
    mostrar.innerHTML = "Seleccionó el asiento " + asiento;
    (event.target).style.backgroundColor = ((event.target).style.backgroundColor=='rgb(248, 237, 80)') ? 'transparent' : '#F8ED50';
    
    return seat;
    // crear funcion que traiga caja
}

function nAsiento(){
    this.retornaAsiento= function (asiento){
        this.asiento= asiento;
    }
}*/


//**********FUNCIONES DE BOTONES********
/*function obtenerListaPasajeros() {
    return passenger;
}
function reinicia(){
	document.getElementById("nombre").value = "";
	document.getElementById("apellido").value = "";
	document.getElementById("dni").value = "";
	document.getElementById("dniBuscar").value ="";
	document.getElementById("resultado").value ="";
	document.getElementById("mostrar").innerHTML = "Seleccione asiento";
}

function reservar(name, apellido, dni, asiento){	
	var name = document.getElementById("nombre").value;
	var apellido = document.getElementById("apellido").value;
	var dni = document.getElementById("dni").value;
	var asiento = numero.asiento;

	function Pasajero(nombre, apellido, dni, asiento){
	    this.nombre = nombre;
	    this.apellido = apellido;
	    this.dni = dni;
	    this.asiento = asiento;
	}

	var nuevoP = new Pasajero(name, apellido, dni, asiento);
	passenger.push(nuevoP);
	console.log(passenger);
	alert("Pasajero registrado"+ "\n"+"Nombre: " + nuevoP.nombre + "\n"+"Apellido: " + nuevoP.apellido + "\n"+ "DNI: "+ nuevoP.dni + "\n"+ "Asiento: "+ nuevoP.asiento);
	reinicia();
	//return true;
}

function buscar(){
	var dniBuscar = document.getElementById("dniBuscar").value;
	dniBuscar = parseInt(dniBuscar);
	var encontrado;
	for(var i in passenger){
		if(dniBuscar == passenger[i].dni && passenger[i] != undefined){
			encontrado = passenger[i];				
			document.getElementById("nombre").value = encontrado.nombre;
			document.getElementById("apellido").value = encontrado.apellido;
			document.getElementById("dni").value = encontrado.dni;
			return true;
		}
	}
	console.log(encontrado);
	reinicia();
}

function mostrar(pasaj) {
    reinicia();
    var rpta = document.getElementById("resultado");
    var res="";

    var nam = "<strong>Nombre: </strong>" + pasaj.nombre + "<br>";
    var las = "<strong>Apellido: </strong>" + pasaj.apellido + "<br>";
    var i = "<strong>DNI: </strong>" + pasaj.dni + "<br>";
    var as = "<strong>Asiento: </strong>"+ pasaj.asiento;
    res += "<div class='lista' align='center'>"+ nam+ las + i+ as+"</div>";
    rpta.innerHTML += res;
};*/

/*function listar(){
	var res = [];
	for(var i of passenger){
		res += mostrar(i);
	}
	return res;
}


function cancelar(){

	reinicia();
}*/


/*
var celdas = document.getElementsByTagName('td');
for (var i = 0; i < celdas.length; i++) {
    //celdas[i].addEventListener('click',redirect,false);
    celdas[i].addEventListener('click',cambiarColor,false);
} */
/*function redirect(event){
    document.getElementById("mostrar").innerHTML=(event.target.textContent);
}*/

/*
function cambiarColor(){
	var celdas = document.getElementsByTagName('td');
	for (var i = 0; i < celdas.length; i++) {
    //celdas[i].addEventListener('click',redirect,false);
    	celdas[i].addEventListener('click',cambiarColor,false);
	}
	celda.style.backgroundColor = "#008000";
} */