/*********  Mouse Scroll ***********/
let scrollActive = true;
let selectedSection = 0;
let mainScreen = 'hero-cont';

function nextScreen() {
     if (selectedSection === 0) {

     }
     if (selectedSection === 1) {
          gsap.to('.second-cont', { y: 0, duration: 1, ease: 'power1.inOut', overflow: 'hidden' });
          gsap.to('.work-img-one', { y: '0%', duration: 1, ease: 'power1.inOut', overflow: 'hidden' });
     }
     if (selectedSection === 2) {
          gsap.to('.img-wrap', { scale: 0.85, duration: 1, ease: 'power2.inOut' });
          gsap.to('.work-img-one', { x: '-100%', duration: 1, delay: 0.5, ease: 'power2.inOut' });
          gsap.to('.work-img-two', { x: '0%', duration: 1, delay: 0.5, ease: 'power2.inOut' });
          gsap.to('.work-img-three', { x: '100%', duration: 1, delay: 0.5, ease: 'power2.inOut' });
          gsap.to('.img-wrap', { scale: 1, duration: 1, delay: 1.1, ease: 'power2.inOut' });
     }
     if (selectedSection === 3) {
          gsap.to('.img-wrap', { scale: 0.85, duration: 1, ease: 'power2.inOut' });
          gsap.to('.work-img-one', { x: '-200%', duration: 1, delay: 0.5, ease: 'power2.inOut' });
          gsap.to('.work-img-two', { x: '-100%', duration: 1, delay: 0.5, ease: 'power2.inOut' });
          gsap.to('.work-img-three', { x: '0%', duration: 1, delay: 0.5, ease: 'power2.inOut' });
          gsap.to('.img-wrap', { scale: 1, duration: 1, delay: 1.1, ease: 'power2.inOut' });
     }
}

function prevScreen() {
     if (selectedSection === 0) {
          gsap.to('.second-cont', { y: '100%', duration: 1, ease: 'power1.inOut', overflow: 'hidden' });
     }

     if (selectedSection === 1) {
          gsap.to('.img-wrap', { scale: 0.85, duration: 1, ease: 'power2.inOut' });
          gsap.to('.work-img-one', { x: '0%', duration: 1, delay: 0.5, ease: 'power2.inOut' });
          gsap.to('.work-img-two', { x: '100%', duration: 1, delay: 0.5, ease: 'power2.inOut' });
          gsap.to('.work-img-three', { x: '200%', duration: 1, delay: 0.5, ease: 'power2.inOut' });
          gsap.to('.img-wrap', { scale: 1, duration: 1, delay: 1.1, ease: 'power2.inOut' });
     }
     if (selectedSection === 2) {
          gsap.to('.img-wrap', { scale: 0.85, duration: 1, ease: 'power2.inOut' });
          gsap.to('.work-img-one', { x: '-100%', duration: 1, delay: 0.5, ease: 'power2.inOut' });
          gsap.to('.work-img-two', { x: '0%', duration: 1, delay: 0.5, ease: 'power2.inOut' });
          gsap.to('.work-img-three', { x: '100%', duration: 1, delay: 0.5, ease: 'power2.inOut' });
          gsap.to('.img-wrap', { scale: 1, duration: 1, delay: 1.1, ease: 'power2.inOut' });

     }

}
function toContact() {
     if (mainScreen !== 'contact') {
          scrollActive = false
          mainScreen = 'contact'
          gsap.fromTo('.footer-cont', { y: '100%' }, { y: 0, duration: 1, ease: 'power2.inOut' });
          setTimeout(() => {
               scrollActive = true
          }, 1000)
     }
}
function backScreen() {
     scrollActive = false
     mainScreen = 'hero-cont'
     gsap.fromTo('.footer-cont', { y: 0 }, { y: '100%', duration: 1, ease: 'power2.inOut' });

     setTimeout(() => {
          scrollActive = true
     }, 1000)
}
document.addEventListener('mousewheel', (event) => {

     if (event.wheelDelta > 0) {
          console.log("wheel" + event.wheelDelta)

          if (mainScreen === 'hero-cont') {

               if (selectedSection > 0) {
                    if (scrollActive) {
                         scrollActive = false
                         selectedSection -= 1
                         prevScreen()
                         console.log('Scroll up', selectedSection);
                         setTimeout(() => {
                              scrollActive = true
                         }, 1500)
                    }
               }
          }
          if (mainScreen === 'contact') {
               if (scrollActive) {
                    scrollActive = false
                    backScreen()
                    console.log('Scroll up contact', selectedSection);
                    setTimeout(() => {
                         scrollActive = true
                    }, 1500)
               }
          }
     } else {
          if (mainScreen === 'hero-cont') {
               if (selectedSection < 3) {
                    if (scrollActive) {
                         scrollActive = false
                         selectedSection += 1
                         nextScreen()
                         console.log('Scroll down hero', selectedSection);
                         setTimeout(() => {
                              scrollActive = true
                         }, 1500)
                    }
               } else {
                    if (scrollActive) {
                         toContact()
                    }
               }

          }
     }
});
/*********  Mouse Scroll ***********/



/*********  Touch Scroll ***********/

let start = 0
let end = 0
document.addEventListener('touchstart', (event) => {
     start = Math.round(event.changedTouches[0].clientY)
});
document.addEventListener('touchmove', (event) => {
     end = Math.round(event.changedTouches[0].clientY)
     // console.log(start, '-', end, '-', end-100)
     if (start >= end + 70) {
          if (mainScreen === 'hero-cont') {
               if (selectedSection < 3) {
                    if (scrollActive) {
                         scrollActive = false
                         selectedSection += 1
                         nextScreen()
                         console.log('Scroll down', selectedSection);
                         setTimeout(() => {
                              scrollActive = true
                         }, 1500)
                    }
               }
               else {
                    if (scrollActive) {
                         toContact()
                    }
               }
          }
     }
     if (start < end - 70) {
          if (mainScreen === 'hero-cont') {
               if (selectedSection > 0) {
                    if (scrollActive) {
                         scrollActive = false
                         selectedSection -= 1
                         prevScreen()
                         console.log('Scroll up', selectedSection);
                         setTimeout(() => {
                              scrollActive = true
                         }, 1500)
                    }
               }
          }
          if (mainScreen === 'contact') {
               if (scrollActive) {
                    scrollActive = false
                    backScreen()
                    console.log('Scroll up', selectedSection);
                    setTimeout(() => {
                         scrollActive = true
                    }, 1500)
               }
          }
     }
});

/*********  Touch Scroll ***********/

