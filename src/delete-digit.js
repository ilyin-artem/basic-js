const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    if (isNaN(n)) {
        return 'not a number';
    } else {
        n = n.toString();
    }

    let max = 0;

    for (let i = 0; i < n.length; i++) {
        if (n.slice(0, i) + n.slice(i + 1) > max) {
            max = n.slice(0, i) + n.slice(i + 1);
        }
    }

    return Number(max);
}

module.exports = {
    deleteDigit,
};
