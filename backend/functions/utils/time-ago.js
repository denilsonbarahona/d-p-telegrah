/* const intl = new Intl.RelativeTimeFormat("en"); */
const option = {year: "numeric", month: "short", day: "numeric"};
const getDaysAgo = (time) => Math.floor(time / (1000 * 60 * 60 * 24));


const getTimeFormat = (time) => {
  const diff = Date.now() - time;
  switch (true) {
    case getDaysAgo(diff) < 1:
      return "today";
    case getDaysAgo(diff) === 1:
      return "yesterday";
    default: {
      const date = new Date(1970, 0, 1).setSeconds(time/1000);
      return new Intl.DateTimeFormat("en", {option}).format(date);
    }
  }
};


module.exports = {
  getTimeFormat,
};
