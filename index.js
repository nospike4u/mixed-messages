const messageUpdate = () => {
  const time = new Date().getHours();

  if (time >= 0 && time < 12) {
    console.log(`It is now in the morning`);
  } else if (time >= 12 && time < 18) {
    console.log(`It is now in the afternoon`);
  } else if (time >= 18 && time <= 23) {
    console.log(`It is now at night`);
  }
};

console.log(messageUpdate());
