document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll('.btn.btn-outline-dark');
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            var cardTitle = this.parentElement.parentElement.parentElement.querySelector('.card-title').textContent;

            var imagePath = this.parentElement.parentElement.parentElement.querySelector('.card-img-top').getAttribute('src');

            var data = {
                title: cardTitle,
                image: imagePath
            };

            var storedData = localStorage.getItem('reservationData');
            var reservations = storedData ? JSON.parse(storedData) : [];

            var exists = reservations.some(function(reservation) {
                return reservation.title === data.title && reservation.image === data.image;
            });

            if (!exists) {
                reservations.push(data);

                localStorage.setItem('reservationData', JSON.stringify(reservations));

                console.log(JSON.stringify(reservations));
            } else {
                console.log("La réservation existe déjà : " + JSON.stringify(data));
            
            }
        });
    });
});
