
exports.min = function min(array) {
    let min;
    if (array == undefined || array.length == 0) min = 0;
    else {
        min = array[0];
        for (i = 0; i < array.length; i++) {
            if (array[i] < min) min = array[i];
        }
    }
    return min;
}

exports.max = function max(array) {
    let max;
    if (array == undefined || array.length == 0) max = 0;
    else {
        max = array[0];
        for (i = 0; i < array.length; i++) {
            if (array[i] > max) max = array[i];
        }
    }
    return max;
}

exports.avg = function avg(array) {
    let avg, sum = 0;
    if (array == undefined || array.length == 0) avg = 0;
    else {
        for (i = 0; i < array.length; i++) {
            sum += array[i];
        }
        avg = sum / array.length;
    }
    return avg;
}
