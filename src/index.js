import './styles.css';

const refs = {
  clockfaceDays: document.querySelector('span[data-value="days"]'),
  clockfaceHours: document.querySelector('span[data-value="hours"]'),
  clockfaceMins: document.querySelector('span[data-value="mins"]'),
  clockfaceSecs: document.querySelector('span[data-value="secs"]'),
}

const timer = {
  start() {
    const targetDate = new Date('May 13, 2022');
    const intervalId = setInterval(() => {
      const currentDate = Date.now();
      const deltaTime = targetDate - currentDate;
      const {days, hours, mins, secs} = getTimeComponents(deltaTime);
      // console.log(`${days}:${hours}:${mins}:${secs}`);
      updateClockface({days, hours, mins, secs});
      if (deltaTime <= 0) {
        clearInterval(intervalId);
        console.log('Акция окончена')
};
    }, 1000);
  }
}

timer.start()

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

function updateClockface({days, hours, mins, secs}) {
  refs.clockfaceDays.textContent = `${days}`;
  refs.clockfaceHours.textContent = `${hours}`;
  refs.clockfaceMins.textContent = `${mins}`;
  refs.clockfaceSecs.textContent = `${secs}`;
}