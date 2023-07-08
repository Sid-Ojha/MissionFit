let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');
menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};


// 
var swiper = new Swiper(".home-slider", {
    spaceBetween: 20,
    effect: "fade",
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});


var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
  },
});


var swiper = new Swiper(".blogs-slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

























function calculateBMI() {
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);
  
    if (isNaN(weight) || isNaN(height)) {
      document.getElementById("result").innerHTML = "Please enter valid values for weight and height.";
      return;
    }
  
    // Convert height from cm to meters
    height /= 100;
  
    // Calculate BMI
    var bmi = weight / (height * height);
  
    // Display the result
    document.getElementById("result").innerHTML = "Your BMI is: " + bmi.toFixed(2);
  }

  

  document.getElementById("calculate-btns").addEventListener("click", calculateCalories);

  function calculateCalories() {
    var weight = parseFloat(document.getElementById("weights").value);
    var height = parseFloat(document.getElementById("heights").value);
    var age = parseInt(document.getElementById("ages").value);
    var gender = document.getElementById("gender").value;
  
    if (isNaN(weight) || isNaN(height) || isNaN(age) || weight <= 0 || height <= 0 || age <= 0) {
      displayError("Please enter valid numeric values for Weight, Height, and Age.");
      return;
    }
  
    var calorieIntake;
    if (gender === "male") {
      calorieIntake = 10 * weight + 6.25 * height - 5 * age + 5;
    } else if (gender === "female") {
      calorieIntake = 10 * weight + 6.25 * height - 5 * age - 161;
    }
  
    displayResult("Estimated daily calorie intake: " + calorieIntake.toFixed(2) + " calories");
  
    resetForm();
  }
  
  function displayError(message) {
    var errorElement = document.getElementById("error");
    errorElement.textContent = message;
    errorElement.style.display = "block";
  }
  
  function displayResult(message) {
    var resultElement = document.getElementById("results");
    resultElement.textContent = message;
    resultElement.style.display = "block";
  }
  
  function resetForm() {
    document.getElementById("weights").value = "";
    document.getElementById("heights").value = "";
    document.getElementById("ages").value = "";
    document.getElementById("gender").selectedIndex = 0;
  }
  