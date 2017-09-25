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
		$('#result').empty();
		$('#showPlace').html('Select place');
	}

	getPassengerList() {
		return passenger;
	}
	makeReservation(name, apellido, dni, asiento){	
		let mostrar = document.getElementById("showPlace");
		let mos = mostrar.textContent;
		let res = mos.split('You have selected the seat # ');
		let seatPlace = res[1];
	
		function Passenger(name, lastname, dni, asiento){
			this.name = $("#name").val();
			this.lastname = $("#lastname").val();
			this.dni = $("#dni").val();
			this.asiento = seatPlace;
		}
	
		let newPassenger = new Passenger(name, apellido, dni, asiento);
		this.passenger.push(newPassenger);
		this.toHTML(newPassenger)
		setTimeout(()=>{ this.restart(); }, 3000);
	}

	search(){
		let dniSearch = $("#dniSearch").val();
		dniSearch = parseInt(dniSearch);
		let foundID;
		$.each(this.passenger, function (index, value) {
			if(dniSearch == parseInt(value.dni) && value != undefined){
				foundID = value;				
				$("#name").val(foundID.name);
				$("#lastname").val(foundID.lastname);
				$("#dni").val(foundID.dni);
				return true;
			}
		});
		console.log(foundID);
		setTimeout(()=>{ this.restart(); }, 3500);
	}

	toHTML(pasaj) {
		$('#result').append(`<div class='lista' align='center'>\
								<strong>Nombre: </strong>${pasaj.name}<br>\
								<strong>Apellido: </strong>${pasaj.lastname}<br>\
								<strong>DNI: </strong>${pasaj.dni}<br>\
								<strong>Asiento: </strong> ${pasaj.asiento}\
							</div>`);
	}

	showList(){
		$.each(this.passenger, (index, value)=> {
			this.toHTML(value)
		});
		setTimeout(()=>{ this.restart(); }, 4000);
	}
	
	cancel(){
		this.restart();
	}

	init(){
		var spot = document.getElementsByTagName('td');
		for (var i = 0; i < spot.length; i++) {
			spot[i].addEventListener('click',this.redirect,false);
		}
		$('#btnReservation').click( () => this.makeReservation());
		$('#btnShow').click( () => this.showList());
		$('#btnSearch').click( () => this.search());
	}
}


$(document).ready(()=>{
	var app = new Bus ();
	app.init();
})
