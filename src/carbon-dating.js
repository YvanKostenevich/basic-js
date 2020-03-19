const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {

    if (typeof sampleActivity !== 'string' || isNaN(parseFloat(sampleActivity)) || 1 > parseFloat(sampleActivity) || parseFloat(sampleActivity) > 15) {
        return false;
    }

    let k = 0.693 / HALF_LIFE_PERIOD;
    let log1 = Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity));
    let t = Math.ceil(log1 / k);
    return t;

};
