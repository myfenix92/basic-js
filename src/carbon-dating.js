const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  //throw 'Not implemented';
  let n
  if (typeof(sampleActivity) === 'string' && parseFloat(sampleActivity) > 0 && parseFloat(sampleActivity) < 15 && parseFloat(sampleActivity) !== NaN)
  {
    n = Math.ceil((HALF_LIFE_PERIOD * Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity))) / 0.693)
    return n
  } else {return false}
};