//javascript for navigation bar effects on scroll
window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle('sticky', window.scrollY > 0);
  });
  
  //javascript for responsive navigation sidebar menu
  const menuBtn = document.querySelector(".menu-btn");
  const navigation = document.querySelector(".navigation");
  const navigationItems = document.querySelectorAll(".navigation a")
  
  menuBtn.addEventListener("click",  () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
  });
  
  navigationItems.forEach((navigationItem) => {
    navigationItem.addEventListener("click", () => {
      menuBtn.classList.remove("active");
      navigation.classList.remove("active");
    });
  });
  
  //javascript for scroll to top button
  const scrollBtn = document.querySelector(".scrollToTop-btn");
  
  window.addEventListener("scroll", function(){
    scrollBtn.classList.toggle("active", window.scrollY > 500);
  });
  
  //javascript for scroll back to top on click scroll-to-top button
  scrollBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
  
  //javascript for reveal website elements on scroll
  window.addEventListener("scroll", reveal);
  
  function reveal(){
    var reveals = document.querySelectorAll(".reveal");
  
    for(var i = 0; i < reveals.length; i++){
      var windowHeight = window.innerHeight;
      var revealTop = reveals[i].getBoundingClientRect().top;
      var revealPoint = 50;
  
      if(revealTop < windowHeight - revealPoint){
        reveals[i].classList.add("active");
      }
    }
  }




document.addEventListener("DOMContentLoaded", function() {
    
    function typeText(element, texts, speed) {
        var index = 0;
        var textIndex = 0;
        var typingText = '';
        var isDeleting = false;

        
        function type() {
            var currentText = texts[textIndex];

            if (isDeleting) {
                typingText = currentText.substring(0, typingText.length - 1);
            } else {
                typingText = currentText.substring(0, typingText.length + 1);
            }

            element.textContent = typingText;

            var typeSpeed = isDeleting ? speed / 2 : speed;

            if (!isDeleting && typingText === currentText) {
                typeSpeed = 1500;
                isDeleting = true;
            } else if (isDeleting && typingText === '') {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
            }

            setTimeout(type, typeSpeed);
        }

        
        type();
    }

  
    var typingElement1 = document.querySelector(".typing");
    typeText(typingElement1, ["Front-End Developer"], 100);

    
    var typingElement2 = document.querySelector(".typing-2");
    typeText(typingElement2, ["Front-End Developer"], 100);
});


document.addEventListener("DOMContentLoaded", function() {
    var resumeBtn = document.getElementById("resumeBtn");

    resumeBtn.addEventListener("click", function(event) {
        event.preventDefault();

        var resumeUrl = "Resume_RishabhKumar.pdf";

        var resumeWindow = window.open(resumeUrl, "_blank");

        var downloadLink = document.createElement("a");
        downloadLink.href = resumeUrl;
        downloadLink.download = "Resume_RishabhKumar.pdf"; 
        downloadLink.target = "_blank";
        downloadLink.click();
    });
});

document.addEventListener("DOMContentLoaded", function() {
  var resumeBtn = document.getElementById("banner-resumeBtn");

  resumeBtn.addEventListener("click", function(event) {
      event.preventDefault();

      var resumeUrl = "Resume_RishabhKumar.pdf";

      var resumeWindow = window.open(resumeUrl, "_blank");

      var downloadLink = document.createElement("a");
      downloadLink.href = resumeUrl;
      downloadLink.download = "Resume_RishabhKumar.pdf"; 
      downloadLink.target = "_blank";
      downloadLink.click();
  });
});

document.addEventListener("DOMContentLoaded", function() {
    var resumeBtn = document.getElementById("about-resumeBtn");

    resumeBtn.addEventListener("click", function(event) {
        event.preventDefault();

        var resumeUrl = "Resume_RishabhKumar.pdf";

        // var resumeWindow = window.open(resumeUrl, "_blank");

        var downloadLink = document.createElement("a");
        downloadLink.href = resumeUrl;
        downloadLink.download = "Resume_RishabhKumar.pdf"; 
        downloadLink.target = "_blank";
        downloadLink.click();
    });
});


document.addEventListener("visibilitychange", function() {
    if (document.visibilityState === 'hidden') {
      document.title = "Come Back to Portfolio!";
    } else {
      document.title = "Portfolio | Rishabh Kumar";
    }
});

// $(document).ready(function(){
//   $('.carousel').owlCarousel({
//       margin: 20,
//       loop: true,
//       autoplay: true,
//       autoplayTimeOut: 2000,
//       autoplayHoverPause: true,
//       responsive: {
//           0:{
//               items: 1,
//               nav: false
//           },
//           600:{
//               items: 2,
//               nav: false
//           },
//           1000:{
//               items: 3,
//               nav: false
//           }
//       }
//   });
// });
$(document).ready(function(){
  $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 1000,
    autoplayHoverPause: true,
    responsive: {
        0:{
            items: 1,
            nav: false
        },
        600:{
            items: 2,
            nav: false
        },
        1000:{
            items: 3,
            nav: false
        }
    }
  });
});