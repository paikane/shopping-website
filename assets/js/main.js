var countDownDate = new Date("November 5,2025 23:59:59").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // document.getElementById("demo").innerHTML =
  //   "<span id='days'>" +
  //   days +
  //   "</span>" +
  //   "<span id='hours'>" +
  //   hours +
  //   "</span>" +
  //   "<span id='minutes'>" +
  //   minutes +
  //   "</span>" +
  //   "<span id='seconds'>" +
  //   seconds +
  //   "</span>";
  var z = document.getElementsByClassName("demos");
  for (var i = 0; i < z.length; i++) {
    z[i].innerHTML =
      "<span id='days'>" +
      days +
      "</span>" +
      "<span id='hours'>" +
      hours +
      "</span>" +
      "<span id='minutes'>" +
      minutes +
      "</span>" +
      "<span id='seconds'>" +
      seconds +
      "</span>";
  }

  if (distance <= 0) {
    clearInterval(x);
    // document.getElementById("demo").innerHTML = "";
    var y = document.getElementsByClassName("demos");
    for (var i = 0; i < z.length; i++) {
      y[i].innerHTML = "";
    }
    // document.getElementById("after-expire").setAttribute("id", "offer-expire-text");
    var g = document.getElementsByClassName("after-expire");
    for (var i = 0; i < z.length; i++) {
      g[i].classList.add("after-expire-text");
    }
    // document.getElementById("offer-expire-text-inner").innerHTML =
    //   "پیشنهاد ویژه به پایان رسید";
    var d = document.getElementsByClassName("offer-expire-text-inner");
    for (var i = 0; i < z.length; i++) {
      d[i].innerHTML = "پیشنهاد ویژه به پایان رسید";
    }

    // document.getElementById("offer-blur").style.filter = "blur(2px)";
    var t = document.getElementsByClassName("offer-blur");
    for (var i = 0; i < z.length; i++) {
      t[i].style.filter = "blur(2px)";
    }
  }
}, 1000);

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    // rtl:true,
    // navigation : true,
    // loop: true,
    center: true,
    autoplay: true,
    autoPlaySpeed: 5000,
    autoPlayTimeout: 5000,
    autoplayHoverPause: true,
  });
});
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
