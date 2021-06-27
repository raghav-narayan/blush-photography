const heroImage = document.querySelector(".hero-image");

const {
    x,y,width,height
} = heroImage.getBoundingClientRect();

const cx = x + width/2,
    cy = y + height/2;

function handleMove(e){
    const {pageX,pageY} = e;

    const dx = (cx - pageX)/(width/2);
    const dy = (cy - pageY)/(height/2);
    
    this.style.transform = `rotateX(${10 * dy * -1}deg) rotateY(${10 * dx}deg)`;
}

function handleOut(){
    this.style.transform = 'initial';
}

heroImage.addEventListener('mousemove',handleMove);
heroImage.addEventListener('mouseout',handleOut);
/* -------------------- scroll animation */
var scroll = window.requestAnimationFrame ||
             // IE Fallback
             function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll'); 

function loop() {

    Array.prototype.forEach.call(elementsToShow, function(element){
      if (isElementInViewport(element)) {
        element.classList.add('is-visible');
      } else {
        element.classList.remove('is-visible');
      }
    });

    scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}