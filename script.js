const btn = document.getElementById("Throttle");

const throttleFunction = (func, delay) => {
  // Previously called time of the function
  //زمان کلیک شدن قبلی ما
  let prev = 0;
  return (...args) => {
    // Current called time of the function
    //زمانی که الان اون کلیک انجام میشه
    let now = new Date().getTime();

    // Logging the difference
    // between previously
    // called and current called timings
    //نشون میده چه وقتی کلیک انجام شده و زمان که باید صبر کنیم چقدر هست
    console.log(now - prev, delay);

    // If difference is greater
    // than delay call
    // the function again.
    //اگر زمان بعد از تاخیر بود میتونیم دوباره کلیک کنیم و نتیجه رو ببینیم
    if (now - prev > delay) {
      prev = now;

      // "..." is the spread
      // operator here
      // returning the function with the
      // array of arguments
      return func(...args);
    }
  };
};
btn.addEventListener(
  "click",
  throttleFunction(() => {
    console.log("button is clicked adn every 3 sec you will see me");
  }, 3000)
);
