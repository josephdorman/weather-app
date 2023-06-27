const dom = (() => {
  const location = document.querySelector('.location ');
  const condition = document.querySelector('.weather');
  const temp = document.querySelector('.temp');

  function setWeatherInfo (locationV, conditionV, tempV) {
    location.textContent = locationV;
    condition.textContent = conditionV;
    temp.textContent = `${tempV} F`;
    
  }

  return {setWeatherInfo}

})();

export default dom;