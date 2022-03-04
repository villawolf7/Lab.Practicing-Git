// YOUR CODE BELOW
function myReverse(myArray){
    let newArray ={};
    for(let i=myArray.length-1; i>=0; 1--){
        
    }
}


describe('myReverse', () => {

    it('is a function', () => {
      expect(typeof myReverse).toEqual('function');
    });
  
    it('returns an array', () => {
      let returnedValue = myReverse([1, 1]);
      expect(Array.isArray(returnedValue)).toEqual(true);
    });
  
    it('returns an array with reversed elements', () => {
      let returnedValue = myReverse(['first', 'second', 'third']);
      expect(returnedValue).toEqual(['third', 'second', 'first']);
    });
  
  });
  