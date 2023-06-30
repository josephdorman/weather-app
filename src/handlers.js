import api from "./api";
import dom from "./dom";

const handlers = (() => {
  const searchBtn = document.getElementById('search-btn');
  const tempBtn = document.querySelectorAll('.temp-toggle button');

  function searchClickHandler (value) {
    api.getWeatherData(value);
  }

  searchBtn.addEventListener('click', () => {
    const searchField = document.getElementById('search');
    searchClickHandler(searchField.value);
  });

  // temp toggle between C and F
  tempBtn.forEach(btn => {
    btn.addEventListener('click', () => {
      dom.tempatureToggle(btn.id);
    })
  });
  

  return {searchClickHandler};

})();

export default handlers;