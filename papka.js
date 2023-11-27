function setCookies() {
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;
  var expiryDays = document.getElementById("expiryDays").value;

  var expiryDate = new Date();
  expiryDate.setDate(expiryDate.getDate() + parseInt(expiryDays));

  document.cookie =
    "name=" +
    encodeURIComponent(name) +
    "; expires=" +
    expiryDate.toUTCString();
  document.cookie =
    "age=" + encodeURIComponent(age) + "; expires=" + expiryDate.toUTCString();

  document.write(
    "Кука name: " + decodeURIComponent(getCookie("name")) + "<br>"
  );
  document.write("Кука age: " + decodeURIComponent(getCookie("age")) + "<br>");
}

function getCookie(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = cookie.substring(name.length + 1);
        break;
      }
    }
  }
  return cookieValue;
}
