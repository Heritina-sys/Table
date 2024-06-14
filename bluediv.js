document.addEventListener("DOMContentLoaded", function() {
    var blueDiv = document.getElementById('bl');
    function afficherReservations() {
        var storedData = localStorage.getItem('reservationData');
        var reservations = storedData ? JSON.parse(storedData) : [];

        blueDiv.innerHTML = "";
        reservations.forEach(function(reservation) {
            var cardHTML = `
		  <div class="col">
		  	<div class="di">
		  		<img src="${reservation.image}" class="listeimage">
		  	<div>
		  	<div class="di">
		  		<p><strong>${reservation.title}</strong></p>
		  	</div>
		  </div>
            `;
            blueDiv.insertAdjacentHTML('beforeend', cardHTML);
        });
    }

    afficherReservations();
});

