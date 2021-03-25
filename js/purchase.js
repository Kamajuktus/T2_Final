var optionPrice = 0;
var paintPrice = 0;
const checkpoint = 300;

function calculateTotalPrice() {
  var totalPrice = 79990 + optionPrice + paintPrice;

  var totalString = (Math.floor(totalPrice / 1000)) + "," + (totalPrice % 1000);

  $('#total-price').text("$" + totalString);
}

function changeToFirstOption() {
  $('#range').text("412mi");
  $('#speed').text("155mph");
  $('#acceleration').text("3.1sec");

  $('#first-option').addClass("pressed");
  $('#second-option').removeClass("pressed");
  $('#third-option').removeClass("pressed");

  $('#up-title').text("PLAID Upgrades");
  $('#up-subtitle').text("Includes");
  $('#up-one').text("Quickest accelerating car in production today");
  $('#up-two').text("0-60 mph: 1.99s");
  $('#up-three').text("1/4 mile: 9.23@155 mph trap speed");
  $('#up-four').text("1,020 horsepower");
  $('#up-five').text("Three high performance motors with carbon rotors");
  $('#up-six').text("Torque vectoring");

  optionPrice = 0;

  calculateTotalPrice();
}

function changeToSecondOption() {
  $('#range').text("390mi");
  $('#speed').text("200mph");
  $('#acceleration').text("1.99sec");

  $('#first-option').removeClass("pressed");
  $('#second-option').addClass("pressed");
  $('#third-option').removeClass("pressed");

  $('#up-title').text("PLAID Upgrades");
  $('#up-subtitle').text("Includes");
  $('#up-one').text("Quickest accelerating car in production today");
  $('#up-two').text("0-60 mph: 1.99s");
  $('#up-three').text("1/4 mile: 9.23@155 mph trap speed");
  $('#up-four').text("1,020 horsepower");
  $('#up-five').text("Three high performance motors with carbon rotors");
  $('#up-six').text("Torque vectoring");

  optionPrice = 40000;

  calculateTotalPrice();
}

function changeToThirdOption() {
  $('#range').text("520+mi");
  $('#speed').text("200mph");
  $('#acceleration').text("<1.99sec");

  $('#first-option').removeClass("pressed");
  $('#second-option').removeClass("pressed");
  $('#third-option').addClass("pressed");

  $('#up-title').text("PLAID+ Upgrades");
  $('#up-subtitle').text("Includes");
  $('#up-one').text("Quickest 0-60 mph and 1/4 mile acceleration of any production car ever");
  $('#up-two').text("1,100+ horsepower");
  $('#up-three').text("1/4 mile: <9.0s");
  $('#up-four').text("1,100+ horsepower");
  $('#up-five').text("Three high performance motors with carbon rotors");
  $('#up-six').text("Torque vectoring");

  optionPrice = 70000;

  calculateTotalPrice();
}

document.getElementById('white-paint').addEventListener("click", function() {
  $(".car-image").attr("src", "assets/purchase/teslaSWhite.jpg");

  $('#white-paint').addClass("pressed");
  $('#black-paint').removeClass("pressed");
  $('#red-paint').removeClass("pressed");

  $('#paint-name').text("Pearl White Multi-Coat");
  $('#paint-price').text("Included");

  paintPrice = 0;

  calculateTotalPrice();
});

document.getElementById('black-paint').addEventListener("click", function() {
  $(".car-image").attr("src", "assets/purchase/teslaSBlack.jpg");

  $('#white-paint').removeClass("pressed");
  $('#black-paint').addClass("pressed");
  $('#red-paint').removeClass("pressed");

  $('#paint-name').text("Solid Black");
  $('#paint-price').text("$1,500");

  paintPrice = 1500;

  calculateTotalPrice();
});

document.getElementById('red-paint').addEventListener("click", function() {
  $(".car-image").attr("src", "assets/purchase/teslaSRed.jpg");

  $('#white-paint').removeClass("pressed");
  $('#black-paint').removeClass("pressed");
  $('#red-paint').addClass("pressed");

  $('#paint-name').text("Red Multi-Coat");
  $('#paint-price').text("$2,500");

  paintPrice = 2500;

  calculateTotalPrice();
});

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (window.innerWidth <= 1200) {
    if (currentScroll <= checkpoint) {
      opacity = 1 - currentScroll / checkpoint;
    } else {
      opacity = 0;
    }
    document.querySelector(".header__inner").style.opacity = opacity;
  }
});
