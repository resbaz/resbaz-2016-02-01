$(function () {
  var locationList = $("#location-list");
  function populateLocations(features) {
    locationList.empty();
    $.each(features, function(i, v) {
      $("<li/>").appendTo(locationList)
        .toggleClass("lead", i == 0)
        .html(v.properties.details);
    });
  }
  if (locationList.length > 0) {
    $.getJSON("sites.geojson", function(data) {
      populateLocations(data.features);
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
          d.resolve(data.features);
        },
        function() {
          // use original order
          d.resolve(data.features);
        },
        {
          enableHighAccuracy: false
        }
      );
      d.promise().done(populateLocations);
    });
  }
});
