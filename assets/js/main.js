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

	showForm(){
		$('#flight_details').hide();
		$('#upgrade').addClass("complete");
		$('#passenger_info').removeAttr("hidden");
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
		$('#flight_details').hide();
		$('#passenger_info').hide();
		$('#payment_details').hide();
		this.toHTML(newPassenger)
		setTimeout(()=>{ this.restart(); 
			$('#ticket').empty();
		}, 45000);
	}

	pay(){
		$('#payment').addClass("complete");
		$('#payment_details').removeAttr("hidden");
		$('#passenger_info').hide();
		setTimeout(()=>{ this.restart();
			$('#finish').addClass("complete");
			$('#flight_details').show();
		}, 1000);
	}

	searchPassenger(){
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
		$('#ticket').append(`<article class="ticket">\
								<section class="date-ticket">\
									<time datetime="27th sept">\
										<span>27</span><span>Sept</span>\
									</time>\
								</section>\
								<section class="ticket-cont">\
									<small>small airline</small>\
									<h3 id="place_namePassenger">${pasaj.name}  ${pasaj.lastname}</h3>\
									<p>DNI ${pasaj.dni}</p>\
									<div class="even-date">\
										<i class="fa fa-calendar"></i>\
										<time>\
											<p>friday 29 september 2017 &nbsp;&nbsp;</p>\
											<p>9 am</p>\
										</time>\
									</div>\
									<div class="even-info">\
										<i class="fa fa-map-marker"></i>\
										<p>Jorge Chavez International Airport, LIMA</p>\
										<p>GATE 8 </p>\
										<p>SEAT  ${pasaj.asiento}</p>\
									</div>\
								</section>\
							</article>`);
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
		$('#btnSearch').click( () => this.searchPassenger());
		$('#btn_next').click( () => this.showForm());
		$('#btn_pay').click( () => this.pay());
	}
}


$(document).ready(()=>{
	var app = new Bus ();
	app.init();
})
