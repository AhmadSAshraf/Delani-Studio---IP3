// mouseOver display hidden div
$(document).ready(function() {
  $(".detail")
    .mouseover(function() {
      $(this)
        .children(".icon")
        .hide();
      $(this)
        .children(".moredetail")
        .show();
    })
    .mouseout(function() {
      $(this)
        .children(".icon")
        .show();
      $(this)
        .children(".moredetail")
        .hide();
    });
});

// Validate form for entry
function validateForm() {
  var cname = document.forms["cform"]["name"].value;
  if (cname == "") {
    alert("Name not entered");
    return false;
  }
  var mail = document.forms["cform"]["email"].value;
  if (mail == "") {
    alert("Email not entered");
    return false;
  }
  var message = document.forms["coform"]["btn"].value;
  if (message == "") {
    alert("You have no message to send");
    return false;
  }
}
