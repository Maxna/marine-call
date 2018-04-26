import $ from 'jquery';
import 'bootstrap';

import $ from 'jquery';
import 'bootstrap';
<<<<<<< HEAD
=======
$(document).ready(function(){
  $('.marineLocator').submit(function(event) {
    event.preventDefault();
    let lat = $('#lat').val();
    let lon = $('#lon').val();

    console.log(lat);
    $.ajax({
      url: `https://api.stormglass.io/forecast?lat=${lat}&lng=${lon}`,
      type: "GET",
      data: {
        format: 'json'
      },
      headers: {
        "Authentication-Token": process.env.SEA_KEY
      },
      success: function(response) {
        $('#output').append("<li>" + `The wind speed in portland is ${response.hours[0].windSpeed[0].value}` + "</li>");
      },
      error: function() {
        $('#errors').text("There was an error processing your request. Please try again.")
      }
    });
  });
});
