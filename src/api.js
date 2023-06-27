const api = (() => {

  async function getWeatherData (location = 'london') {
    try {
      const data =  await fetch(`https://api.weatherapi.com/v1/current.json?key=8fbe15dd00be48a2b24214508232406&q=${location}`, {mode: 'cors'});
      const test = await data.json();

      console.log(test);

    } catch (error) {
      console.log(error);
    }
  }

  return {getWeatherData}

})();

export default api;





