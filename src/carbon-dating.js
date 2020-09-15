const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const LN = 0.693;

module.exports = function dateSample(sampleActivity) {
  let result;
  if (typeof(sampleActivity) != 'string') {
    return false;
  }

  sampleActivity = parseFloat(sampleActivity);

  if ((sampleActivity <= 15) && (sampleActivity > 0)) {
    result = (Math.log(MODERN_ACTIVITY / sampleActivity)) / (LN / HALF_LIFE_PERIOD);
  } else {
    return false;
  }

  return (Math.ceil(result));
};
