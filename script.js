const marriage = new Date("September 19, 2025");

const countdown = setInterval(() => {
 const now = new Date();
 let delta = marriage.getTime() - now.getTime();
 const days = Math.floor(delta / (1000 * 60 * 60 * 24));
 delta -= days * 1000 * 60 * 60 * 24;
 const hours = Math.floor(delta / (1000 * 60 * 60));
 delta -= hours * 1000 * 60 * 60;
 const minutes = Math.floor(delta / (1000 * 60));
 delta -= minutes * 1000 * 60;
 const seconds = Math.floor(delta / 1000);
 console.log(`${days} Days, ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds`);
 if(delta < 0) {
  clearInterval(countdown);
  console.log("Finished");
 }
}, 1000);