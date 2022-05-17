class AutomaticCounter extends Counter {

  constructor(mode = 'up', count) {
    super(count);
    this.mode = mode;
    this.intervalId = undefined;
  }

  start() {
    if (!this.intervalId) {
      this.intervalId = setInterval(() => {
        this.performCount();
      }, 1000)
    }
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = undefined;
  }

  performCount() {
    switch (this.mode) {
      case 'up':
        this.countUp();
        break;
      case 'down':
        this.countDown();
        break;
      default:
        console.log(`Invalid counter mode ${this.mode}`)
    }
  }

}
