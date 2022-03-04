// YOUR CODE BELOW
function evenAndOdd(array){
    const evenArray = [];
    const oddArray = [];
    for (i = 0; i < array.length; i ++){
      let value = array[i];
      if (value % 2 === 0){
        evenArray.push(value);
      } else{
        oddArray.push(value);
      }
    }
    return [evenArray, oddArray];
    // multidimensional arrays look like this
    /*
    // this is a 2 x 3 array
    // 2 subarrays, with 3 values apiece
    const ticTacToeBoard = [
      ['X', null, null], // if we want to add a move to a game board, a multi-dimensional array is a great model for that sort of thing :)
      [null, 'O', null], // adding a move is targeting a sub-array index (column-index) as well as the row-index, ticTacToeBoard[1][1]
      [null, null, 'X'] // what if i want to add an 'X' to board square number 9, ie, the bottom right corner? ticTacToeBoard[2][2]
    ]
    */
  }


describe('evenAndOdd', () => {

    it('is a function', () => {
      expect(typeof evenAndOdd).toEqual('function');
    });
  
    it('returns an array', () => {
      let returnedValue = evenAndOdd([1, 2, 3]);
      expect(Array.isArray(returnedValue)).toEqual(true);
    });
  
    it('returns an array where the first element has all the even numbers from the original array', () => {
      let returnedValue = evenAndOdd([10, 15, 20, 25, 30]);
      expect(returnedValue[0]).toEqual([10, 20, 30]);
    });
  
    it('returns an array where the second element has all the odd numbers from the original array', () => {
      let returnedValue = evenAndOdd([7, 14, 21, 28, 35]);
      expect(returnedValue[1]).toEqual([7, 21, 35]);
    });
  
  });
  