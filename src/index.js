// You should implement your task here.

module.exports = function towelSort(matrix) {
    let result = [];
    if (!Array.isArray(matrix)) {
        return result;
    }
    for (let i = 0; i < matrix.length; i++) {
        i % 2 === 0 ? result.push(matrix[i]) : result.push(matrix[i].reverse());
    }
    return result.flat();
};
