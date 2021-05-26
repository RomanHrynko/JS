const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  time: 0,
  startTimer() {
    this.time = setInterval(() => {
      this.secondsPassed += 1;
      if (this.secondsPassed === 60) {
        this.minsPassed += 1;
        this.secondsPassed = 0;
      }
    }, 1000);
  },
  getTime() {
    if (this.secondsPassed < 10) {
      return `${this.minsPassed}:0${this.secondsPassed}`;
    }
    return `${this.minsPassed}:${this.secondsPassed}`;
  },
  stopTimer() {
    clearInterval(this.time);
  },
  resetTimer() {
    this.minsPassed = 0;
    this.secondsPassed = 0;
  },
};

timer.startTimer();
console.log(timer.getTime());

console.log(timer.minsPassed);
console.log(timer.secondsPassed);
console.log(timer.getTime());
console.log(timer.minsPassed);
console.log(timer.secondsPassed);
console.log(timer.getTime());
