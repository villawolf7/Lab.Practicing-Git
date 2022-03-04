// YOUR CODE BELOW
function maxOfThree(num1, num2, num3){
  if(num1 > num2 && num3) {
    return num1;
  } else if(num2 > num1 && num2 > num3){
    return num2
  } else {
    return num3;
  }
 }



describe('maxOfThree', () => {

    it('is a function', () => {
      expect(typeof maxOfThree).toEqual('function');
    });
  
    it('returns a number', () => {
      let returnedValue = maxOfThree(1, 2, 3);
      expect(typeof returnedValue).toEqual('number');
    });
  
    it('returns the first number if it is the largest', () => {
      let returnedValue = maxOfThree(10, 8, 6);
      expect(returnedValue).toEqual(10);
    });
  
    it('returns the second number if it is the largest', () => {
      let returnedValue = maxOfThree(20, 40, 10);
      expect(returnedValue).toEqual(40);
    });
  
    it('returns the third number if it is the largest', () => {
      let returnedValue = maxOfThree(3, 6, 9);
      expect(returnedValue).toEqual(9);
    });
  
  });
  