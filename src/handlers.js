import api from "./api";

const handlers = (() => {
  const searchBtn = document.getElementById('search-btn');

  function searchClickHandler (value) {
    api.getWeatherData(value);
  }

  searchBtn.addEventListener('click', () => {
    const searchField = document.getElementById('search');
    searchClickHandler(searchField.value);
  });

  return {searchClickHandler};

})();

export default handlers;