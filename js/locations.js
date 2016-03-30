$(function () {
  var locationList = $("#location-list");
  function populateLocations(data) {
    locationList.empty();
    $.each(data.features, function(i, v) {
      $("<li/>").appendTo(locationList)
        .toggleClass("lead", i == 0 && data.locationKnown)
        .html(v.properties.details);
    });
  }
  if (locationList.length > 0) {
    $.getJSON("sites.geojson", function(data) {
      populateLocations({
        locationKnown: false,
        features: data.features
      });
      var d = $.Deferred();
      navigator.geolocation.getCurrentPosition(
        function(position) {
          var distanceTo = function(feature) {
            return geolib.getDistance({
              'longitude': position.coords.longitude,
              'latitude': position.coords.latitude
            },
            {
              'longitude': feature.geometry.coordinates[0],
              'latitude': feature.geometry.coordinates[1]
            });
          };
          // sort features by distance
          data.features.sort(function(a, b) {
            return distanceTo(a) - distanceTo(b);
          });
          d.resolve({
            locationKnown: true,
            features: data.features
          });
        },
        function() {
          function name(feature) {
            var details = feature.properties.details;
            return $('<div>'+details+'</div>').text();
          }
          // sort features by distance
          data.features.sort(function(a, b) {
            return name(a).localeCompare(name(b));
          });
          d.resolve({
            locationKnown: false,
            features: data.features
          });
        },
        {
          enableHighAccuracy: false
        }
      );
      d.promise().done(populateLocations);
    });
  }
});
