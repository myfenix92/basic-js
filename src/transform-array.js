module.exports = function transform(arr) {
    //throw 'Not implemented';
    if (!Array.isArray(arr)) throw new Error()
    
    let newArr = []
    
    for (i = 0; i < arr.length; i++) {
        if( arr[i] === '--discard-next') {
            i++ 
            continue
        } 

        if( arr[i] === '--discard-prev') {
            newArr.pop()
            continue
        }

        if( arr[i] === '--double-next') {
            newArr.push(arr[i+1])
            continue
        }
    
        if( arr[i] === '--double-prev') {
            newArr.push(arr[i-1])
            continue
        }
        newArr.push(arr[i])
    }
    newArr = newArr.filter( item => item != undefined)

    return newArr
};
