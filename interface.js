$(document).ready(function() {
  var pushResults = new PushResults();
  displayResults();

  function displayResults() {

    $('#pushResults').text(pushResults.results);
  };

});
