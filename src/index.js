module.exports = function towelSort (matrix) {
    if(Array.isArray(matrix) && matrix.length && arguments.length > 0) {
        let resarr = [];
        matrix.reduce((_,currentValue,currentIndex) => {
                currentIndex % 2 ? currentValue.reduceRight((_,deepValue) => resarr.push(deepValue), null) :
                    currentValue.reduce((_,deepValue) => resarr.push(deepValue), null)}
            , null);
        return resarr;
    }
    return [];
}
