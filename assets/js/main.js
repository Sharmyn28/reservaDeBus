'use strict';

class Bus{
	constructor () {
		this.passenger = [];
		this.seat = undefined;
	}
	
	redirect(event){
		let place = event.target.textContent;
		this.seat = parseInt(place);
		$('#showPlace').html("You have selected the seat # " + place);
		(event.target).style.backgroundColor = ((event.target).style.backgroundColor=='rgb(248, 237, 80)') ? 'transparent' : '#F8ED50';
		return this.seat;
	}

	restart(){
		$('#name').val('');
		$('#lastname').val('');
		$('#dni').val('');
		$('#dniSearch').val('');
		$('#result').val('');
		$('#showPlace').html('Select place');
	}

	getPassengerList() {
		return passenger;
	}
	reservar(name, apellido, dni, asiento){	
		let mostrar = document.getElementById("showPlace");
		let mos = mostrar.textContent;
		let res = mos.split('You have selected the seat # ');
		let seatPlace = res[1];
	
		function Pasajero(nombre, apellido, dni, asiento){
			this.nombre = $("#name").val();
			this.apellido = $("#lastname").val();
			this.dni = $("#dni").val();
			this.asiento = seatPlace;
		}
	
		let nuevoP = new Pasajero(name, apellido, dni, asiento);
		this.passenger.push(nuevoP);
		console.log(this.passenger);
		alert("Pasajero registrado"+ "\n"+"Nombre: " + nuevoP.nombre + "\n"+"Apellido: " + nuevoP.apellido + "\n"+ "DNI: "+ nuevoP.dni + "\n"+ "Asiento: "+ nuevoP.asiento);
		this.restart();
		//return true;
	}

	buscar(){
		let dniSearch = $("#dniSearch").val();
		dniSearch = parseInt(dniSearch);
		let foundID;
		for(var i in this.passenger){
			if(dniSearch == this.passenger[i].dni && this.passenger[i] != undefined){
				foundID = this.passenger[i];				
				$("#name").val(foundID.nombre);
				$("#lastname").val(foundID.apellido);
				$("#dni").val(foundID.dni);
				return true;
			}
		}
		console.log(foundID);
		this.restart();
	}

	mostrar(pasaj) {
		this.restart();
		var rpta = document.getElementById("result");
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
		this.restart();
	}

	iniciar(){
		var asientos = document.getElementsByTagName('td');
		for (var i = 0; i < asientos.length; i++) {
			asientos[i].addEventListener('click',this.redirect,false);
		}
		$('#btnReservation').click( () => this.reservar());
		$('#btnShow').click( () => this.listar());
		$('#btnSearch').click( () => this.buscar());
	}
}


$(document).ready(()=>{
	var app = new Bus ();
	app.iniciar();
})

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