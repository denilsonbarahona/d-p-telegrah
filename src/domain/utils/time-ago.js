const intl = new Intl.RelativeTimeFormat("en");

const getDaysAgo = (time) => Math.floor(time / (1000 * 60 * 60 * 24));

const getTimeFormat = (time) => {
  const diff = Date.now() - time;
  switch (true) {
    case getDaysAgo(diff) < 1:
      return "today";
    case getDaysAgo(diff) === 1:
      return "yesterday";
    default:
      return intl.format(diff, "d");
  }
};

export default getTimeFormat;
