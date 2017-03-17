// locate you.

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 6,
	zoomControl: false,
    scaleControl: false,
    scrollwheel: false,
  });
  
		
  var infoWindow = new google.maps.InfoWindow({map: map});

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };


//hanley cinema
var marker = new google.maps.Marker({
position: new google.maps.LatLng(53.065563662792115, -2.1993255615234375),
   label: "Home Sale",
   map: map,
        });
		
		//newcastle cinema
		 var marker = new google.maps.Marker({
          position: new google.maps.LatLng(53.01313084591289, -2.2281646728515625),
   map: map,
        });
	
		
      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}


function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
}