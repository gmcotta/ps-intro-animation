const testButton = document.querySelector('.test-button');
const progressBar = document.querySelector('#progress-bar');

const tvScreenTop = document.querySelector(".corner-2");
const tvScreenLeft = document.querySelector(".corner-4");
const tvScreenCenter = document.querySelector(".corner-5");
const tvScreenRight = document.querySelector(".corner-6");
const tvScreenBottom = document.querySelector(".corner-8");

const sonyScreen = document.querySelector('.intro__sony-screen');
const sonyDiamond = document.querySelector('.sony-screen__diamond');
const sonyLeftTriangle = document.querySelector('.triangle-left');
const sonyRightTriangle = document.querySelector('.triangle-right');
const sonyTitle = document.querySelector('.sony-screen__title');
const sonyText = document.querySelector('.sony-screen__text-container');

// main timeline
const mainTl = gsap.timeline({
  onUpdate: () =>
    gsap.set(progressBar, { width: `${mainTl.progress() * 100}%` }),
});

testButton.addEventListener('click', () => {
  mainTl.to([tvScreenTop, tvScreenLeft, tvScreenBottom, tvScreenRight, tvScreenCenter], {
    autoAlpha: 1, backgroundColor: '#fff', duration: 0.5
  });
  mainTl.to(sonyScreen, { 
    autoAlpha: 1, backgroundColor: '#fff', duration: 0.5 
  }, '<');
  mainTl.to([sonyDiamond, sonyLeftTriangle, sonyRightTriangle], { 
    autoAlpha: 1, duration: 0.5 
  });
  mainTl.to(sonyLeftTriangle, { 
    width: '5.5rem',
    height: '5.5rem',
    top: '0.8rem',
    left: '0.8rem',
    duration: 1
  });
  mainTl.to(sonyRightTriangle, { 
    width: '5.5rem',
    height: '5.5rem',
    bottom: '0.8rem',
    right: '0.8rem',
    duration: 1
  }, '<');
  mainTl.to([sonyTitle, sonyText], {
    autoAlpha: 1,
    duration: 0.5
  });
});
