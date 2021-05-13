import './styles.css';

const timer = {
  start() {
    const targetDate = new Date('Jul 17, 2022');
    setInterval(() => {
      const currentDate = Date.now();
      const deltaTime = targetDate - currentDate;
      const {days, hours, mins, secs} = getTimeComponents(deltaTime);
      console.log(`${ days }:${ hours }:${ mins }:${ secs }`);
    }, 1000);
  }
}

timer.start()

// class CountdownTimer {
//   constructor() {
//   }
// }

// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate = new Date('Jul 17, 2021');
// });

function getTimeComponents(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
  return {days, hours, mins, secs}
}

function pad(value) {
  return String(value).padStart(2,'0')
}