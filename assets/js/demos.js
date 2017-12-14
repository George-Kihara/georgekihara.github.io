document.addEventListener('DOMContentLoaded', function () {
  var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 100,
    backSpeed: 50,
    startDelay: 1000,
    loop: true,
    loopCount: Infinity,
    onComplete: function (self) { prettyLog('onComplete ' + self) },
    preStringTyped: function (pos, self) { prettyLog('preStringTyped ' + pos + ' ' + self); },
    onStringTyped: function (pos, self) { prettyLog('onStringTyped ' + pos + ' ' + self) },
    onLastStringBackspaced: function (self) { prettyLog('onLastStringBackspaced ' + self) },
    onTypingPaused: function (pos, self) { prettyLog('onTypingPaused ' + pos + ' ' + self) },
    onTypingResumed: function (pos, self) { prettyLog('onTypingResumed ' + pos + ' ' + self) },
    onReset: function (self) { prettyLog('onReset ' + self) },
    onStop: function (pos, self) { prettyLog('onStop ' + pos + ' ' + self) },
    onStart: function (pos, self) { prettyLog('onStart ' + pos + ' ' + self) },
    onDestroy: function (self) { prettyLog('onDestroy ' + self) }
  });


  var typed2 = new Typed('#typed2', {
    strings: ['Mobile No: +254 713220636 <br> Email: gegohcomp@gmail.com'],
    typeSpeed: 100,
    backSpeed: 100,
    fadeOut: false,
    loop: 1
  });

  

function prettyLog(str) {
  console.log('%c ' + str, 'color: green; font-weight: bold;');
};

function toggleLoop(typed) {
  if (typed.loop) {
    typed.loop = false;
  } else {
    typed.loop = true;
  }
}});