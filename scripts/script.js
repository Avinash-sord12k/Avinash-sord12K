const cssRoot = document.querySelector(':root');


var beautifulColors = ['#36f016', '#ecf000', '#07bde6', '#2BFF00'];
var currentColor = beautifulColors[Math.floor(Math.random() * beautifulColors.length)];
cssRoot.style.setProperty('--accent-color-2', currentColor);
console.log('current-color: ' + currentColor);

const accentColor = getComputedStyle(cssRoot).getPropertyValue('--accent-color-2');
const backgroundColor = getComputedStyle(cssRoot).getPropertyValue('--accent-color-1'); 


var skillsPercentage = {
                        'html': 85,
                        'css' : 90,
                        'javascript' : 67,
                        'python' : 70,
                        'php' : 70,
                      }

document.getElementById('html-percent').style.setProperty('--perc-value', skillsPercentage['html']);
document.getElementById('css-percent').style.setProperty('--perc-value', skillsPercentage['css']);
document.getElementById('js-percent').style.setProperty('--perc-value', skillsPercentage['javascript']);
document.getElementById('py-percent').style.setProperty('--perc-value', skillsPercentage['python']);
document.getElementById('php-percent').style.setProperty('--perc-value', skillsPercentage['php']);

///////////////////////////////////
// document.getElementById("html-percent").animate([
//   // key frames
//   { strokeDashOffset: '440'},
//   { transform: 'rotate(90deg)'},
//   { transformOrigin: 'right'}
// ], {
//   // sync options
//   duration: 0,
//   iterations: Infinity
// });
///////////////////////////////////

var scrollIndicatorCircle = document.querySelector('#scroll-indictor-circle');

window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;
  let body = document.querySelector('body');
  amount = (Math.floor(scroll)/(body.offsetHeight - window.innerHeight));
  amount = Math.floor(amount * 1000) / 1000;
  // console.log(amount, window.innerHeight, body.offsetHeight, scroll);
  scrollIndicatorCircle.style.strokeDashoffset = `${125 * amount}`;
  });


/////////////////////////////////////////////
var menuBtn = document.getElementById('menuBtn');
var crossBtn = document.getElementById('nav-cross');
var navItemBox = document.getElementById('nav-item-box');
var menuBtnStatus = 0;

menuBtn.addEventListener('click', function() {
      navItemBox.classList.toggle('active-nav-box');
});
crossBtn.addEventListener('click', function() {
      navItemBox.classList.toggle('active-nav-box');
});







/////////////////////////////////
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  op = (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth + 5 || document.documentElement.clientWidth + 5)
  );
  // console.log(op, [rect.top, 0], [rect.left, 0], [rect.bottom, window.innerHeight], [rect.right, window.innerWidth]);
  return op;
}


$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });

    $(".project >*:not(.project-secondary-info)").click(function(){
      //slide toggle the secondary info
      $(this).parent().find(".project-secondary-info").slideToggle(500);
    });

    // scroll image in image gallery on pressing #left scroll button in it
    // <div class="image-array">
    //               <button class="left-scroll"><</button>
    //               <button class="right-scroll">></button>
    //               <img src="./assets/images/portfolio-page-1.png">
    //               <img src="./assets/images/portfolio-page-2.png">
    //               <img src="./assets/images/portfolio-page-3.png">
    //               <img src="./assets/images/portfolio-page-1.png">
    //               <img src="./assets/images/portfolio-page-2.png">
    //               <img src="./assets/images/portfolio-page-3.png">
    //               <img src="./assets/images/portfolio-page-1.png">
    //               <img src="./assets/images/portfolio-page-2.png">
    //               <img src="./assets/images/portfolio-page-3.png">
    //               <img src="./assets/images/portfolio-page-1.png">
    //               <img src="./assets/images/portfolio-page-2.png">
    //               <img src="./assets/images/portfolio-page-3.png">
    //             </div>
    $(".right-scroll").click(function() {
      var imageArray = $(this).siblings(".image-array");
      var imageWidth = imageArray.find("img").eq(0).width();
      var scrollAmount = imageWidth;
      var maxScroll = imageArray.get(0).scrollWidth - imageArray.outerWidth();
      
      if (imageArray.scrollLeft() < maxScroll) {
        imageArray.animate({ scrollLeft: '+=' + scrollAmount }, 500);
      } else {
        imageArray.animate({ scrollLeft: 0 }, 500); // Reset scroll to beginning
      }
    });
    $(".left-scroll").click(function() {
      var imageArray = $(this).siblings(".image-array");
      var imageWidth = imageArray.find("img").eq(0).width();
      var scrollAmount = imageWidth;
      var maxScroll = imageArray.get(0).scrollWidth - imageArray.outerWidth();      
      imageArray.animate({ scrollLeft: '-=' + scrollAmount }, 500);
    });
    
    

  });



