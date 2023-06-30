const dom = (() => {
  const location = document.querySelector('.location ');
  const condition = document.querySelector('.weather');
  const temp = document.querySelector('.temp');
  const icon = document.querySelector('.icon');

  let tempC = '';
  let tempF = '';

  function setWeatherInfo (locationV, conditionV, tempCel, tempFah, iconV) {
    location.textContent = locationV;
    condition.textContent = conditionV;
    icon.src = iconV;
    tempC = Math.round(tempCel);
    tempF = Math.round(tempFah);
    temp.textContent = tempF;
    
  }

  function tempatureToggle (value) {
    if (value === 'fah') {
      temp.textContent = tempF;
    }
    else if (value === 'cel') {
      temp.textContent = tempC;
    }
    
  }

  return {setWeatherInfo, tempatureToggle}

})();

export default dom;