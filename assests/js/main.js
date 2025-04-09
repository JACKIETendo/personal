AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 900, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


var slider_img = document.querySelector('.slider-img');
var images = ['Untitled-10.jpg', 'Untitled-1.jpg', 'tj.png', 'business card one true.png', 'JOAN.png', 'ARENA.png'];
var i = 0;

function prev(){
  if(i <= 0) i = images.length;
  i--;
  return setImg();
}

function next(){
  if (i >= images.length - 1) i = -1;
  i++;
  return setImg();
}

function setImg(){
  return slider_img.setAttribute('src', 'images/' + images[i]);
}



const scriptURL = 'https://script.google.com/macros/s/AKfycbyo9PQKiA9i1j99fVg49N3_GIb56akuHXiO8yu4-gNfzX0pDFAqT8UoYmVNiB_J3CBUTg/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response =>  {
            msg.innerHTML = "Message sent successfully"
            setTimeout(function(){
                msg.innerHTML = ""
            },3000)
            form.reset()
        })
        .catch(error => console.error('error!', error.message))
    });