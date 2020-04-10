
function initMap() {

  var resturant = {lat: 39.103008, lng: -77.074977}
  var map = new google.maps.Map(document.getElementById('map'), {zoom: 15, center: resturant})
  var marker = new google.maps.Marker({position: resturant, map: map})

}
