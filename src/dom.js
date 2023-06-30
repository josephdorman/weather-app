const dom = (() => {
  const location = document.querySelector('.location ');
  const condition = document.querySelector('.weather');
  const temp = document.querySelector('.temp');
  const icon = document.querySelector('.icon');

  function setWeatherInfo (locationV, conditionV, tempV, iconV) {
    location.textContent = locationV;
    condition.textContent = conditionV;
    icon.src = iconV;
    temp.textContent = Math.round(tempV);
    
  }

  return {setWeatherInfo}

})();

export default dom;