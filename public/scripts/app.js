$(document).ready(function () {

  $('#flight-search form').on('submit', function (ev) {
    ev.preventDefault();
    let departure = $(this).find('.departure').val();
    let destination = $(this).find('.destination').val();
    if (departure === "" || destination === "") {
      alert('Departure and/or destination code is required!');
    } else {
      window.location.href = `http://localhost:8080/searchFlights/${departure}/${destination}`
    }
  })

})
