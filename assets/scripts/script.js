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

const psScreen = document.querySelector('.intro__ps-screen');
const psScreenLogoImage = document.querySelector('.ps-screen__ps-logo-image');
const psScreenLogoText = document.querySelector('.ps-screen__ps-logo-text');
const psScreenText = document.querySelector('.ps-screen__text-container');
const psScreenTextSCEA = document.querySelector('.ps-screen__scea-text');

const psIntroAudio = document.querySelector('#playstation-intro-audio');

// main timeline
const mainTl = gsap.timeline({
  onUpdate: () =>
    gsap.set(progressBar, { width: `${mainTl.progress() * 100}%` }),
});

testButton.addEventListener('click', () => {
  mainTl.to([tvScreenTop, tvScreenLeft, tvScreenBottom, tvScreenRight, tvScreenCenter, sonyScreen], {
    autoAlpha: 1, backgroundColor: '#fff', duration: 1
  });
  mainTl.call(() => {
    psIntroAudio.play();
  }, [], '<+=0.1');
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
  mainTl.to([sonyDiamond, sonyLeftTriangle, sonyRightTriangle, sonyTitle, sonyText], {
    autoAlpha: 0,
    duration: 0.1,
    delay: 4
  });
  mainTl.to([sonyScreen, tvScreenTop, tvScreenLeft, tvScreenBottom, tvScreenRight, tvScreenCenter], {
    backgroundColor: '#000',
    duration: 0.1
  })
  mainTl.to(psScreen, { 
    autoAlpha: 1, backgroundColor: '#000', duration: 0.5 
  }, '<');
  mainTl.to(psScreenLogoImage, {
    autoAlpha: 1,
    duration: 0.2
  });
  mainTl.to([psScreenText, psScreenTextSCEA], {
    autoAlpha: 1,
    duration: 0.1
  });
  mainTl.to(psScreenLogoText, {
    autoAlpha: 1,
    duration: 0.2
  });
  mainTl.call(() => {
    psIntroAudio.pause();
  }, [], '>+=7')
});
