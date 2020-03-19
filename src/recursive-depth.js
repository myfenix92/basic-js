module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let level = 1
        if (Array.isArray(arr)) {
            for (let el of arr) {
                if (Array.isArray(el)) {
                   level = Math.max(this.calculateDepth(el) + 1, level)
                }
            }
            return (level)
        } else {
            return 0
        }
    }
};