export default function fetchQuote(apiSkeleton, themeSet) {
  const options = {
    cache: 'default',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    method: 'GET'
  };
  const url =
    'https://cors-anywhere.herokuapp.com/http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json&json=?';

  return apiSkeleton(url, options)
    .then((res) => {
      const theme = Math.floor(Math.random() * themeSet.length);
      return {
        currentQuote: res.quoteText,
        currentAuthor: res.quoteAuthor,
        theme: themeSet[theme]
      };
    })
    .catch((err) => {
      console.warn(err);
    });
}
