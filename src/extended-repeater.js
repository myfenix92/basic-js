module.exports = function repeater(str, options) {
    //throw 'Not implemented';
    let repeatTimesKey = 'repeatTimes'
    let separatorKey = 'separator'
    let additionKey = 'addition'
    let additionRepeatTimesKey = 'additionRepeatTimes'
    let additionSeparatorKey = 'additionSeparator'
    let times = options[repeatTimesKey]
    let separator = options[separatorKey]
    let addition = options[additionKey]
    let additionRepeat = options[additionRepeatTimesKey]
    let additionSeparator = options[additionSeparatorKey]

    if (times === undefined) {
        str = str + addition
    } else {

        if (options.separator === undefined) {
            separator = '+'
        }

        if (options.addition === undefined) {
            addition = ''
        }

        if (options.additionRepeat === null) {
            additionRepeat = 0
        }

        if (options.additionSeparator === undefined) {
            additionSeparator = ''
        }

        addition = (addition + additionSeparator).repeat(additionRepeat)
        addition = addition.slice(0, (addition.length - additionSeparator.length))
        str = (str + addition + separator).repeat(times)
        str = str.slice(0, (str.length - separator.length))
    }

    return str
};