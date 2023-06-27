import dom from "./dom";

const api = (() => {

  async function getWeatherData (location = 'london') {
    try {
      const data =  await fetch(`https://api.weatherapi.com/v1/current.json?key=8fbe15dd00be48a2b24214508232406&q=${location}`, {mode: 'cors'});
      const info = await data.json();

      console.log(info);
      dom.setWeatherInfo(info.location.name, info.current.condition.text, info.current.temp_f);

    } catch (error) {
      console.log(error);
    }
  }

  return {getWeatherData}

})();

export default api;





