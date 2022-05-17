const automaticCounter = new AutomaticCounter('up');
automaticCounter.start();

setInterval(() => {
  if (automaticCounter.count === 0) {
    automaticCounter.mode = 'up';
  } else if (automaticCounter.count >= 10) {
    automaticCounter.mode = 'down';
  }
  console.log('current count', automaticCounter.count);
}, 1000);
