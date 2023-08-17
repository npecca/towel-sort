
// You should implement your task here.

module.exports = function towelSort (matrix) {
    const newArr = (!matrix) ? [] : matrix.reduce((acc,curr,index)=> {
        acc.push((index % 2 === 1) ? curr.reverse():curr);
        return acc.flat();
    },[]);
    return newArr;
}
