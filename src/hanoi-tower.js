module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    //throw 'Not implemented';
    let turns = Math.pow(2, disksNumber) - 1
    let seconds = turns / (turnsSpeed / 3600)
    return {turns, seconds}
}