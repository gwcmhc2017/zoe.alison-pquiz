$(document).ready(function() {
  var timesAButtonClicked = 0;
  var timesBButtonClicked = 0;

  $(".A").click(function() {
    timesAButtonClicked++;
  });
  $(".B").click(function() {
    timesBButtonClicked++;
  });
  $("#submit").click(function() {
    if (timesAButtonClicked > timesBButtonClicked) {
      // console.log("poop");
      $("#mickey").show();
      $("#submit").hide();
    } else if (timesAButtonClicked < timesBButtonClicked) {
      $("#Olaf").show();
      $("#submit").hide();
    }
  });

  $("#submit").click(function() {
    if (timesAButtonClicked > timesBButtonClicked) {
      $("#mickey").show();
      $("#submit").hide();
      // console.log("poop");
    } else if (timesAButtonClicked < timesBButtonClicked) {
      $("#Olaf").show();
      $("#submit").hide();
    }
  });
});
