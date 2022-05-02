const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
    if (!Array.isArray(arr))
        throw new Error("'arr' parameter must be an instance of the Array!");
    let newArr = [...arr];
    for (let idx = 0; idx < arr.length; idx++) {
        switch (newArr[idx]) {
            case '--discard-next':
                if (newArr[idx + 1]) {
                    newArr.splice(idx + 1, 1);
                }
                break;
            case '--discard-prev':
                if (newArr[idx - 1]) {
                    newArr.splice(idx - 1, 1);
                    idx -= 1;
                }
                break;
            case '--double-next':
                if (newArr[idx + 1]) {
                    newArr[idx] = newArr[idx + 1];
                }
                break;
            case '--double-prev':
                if (newArr[idx - 1]) {
                    newArr[idx] = newArr[idx - 1];
                }
                break;
            default:
                break;
        }
    }
    for (let i = newArr.length - 1; i >= 0; i--) {
        let el = newArr[i].toString();
        if (
            el.includes('--discard-next') ||
            el.includes('--double-prev') ||
            el.includes('--discard-prev') ||
            el.includes('--double-next')
        )
            newArr.splice(i, 1);
    }

    return newArr;
}

module.exports = {
    transform,
};
