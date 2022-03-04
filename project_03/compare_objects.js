// YOUR CODE BELOW
function compareObjects(object1, object2){
    const object1Keys = Object.keys(object1)
    const object2Keys = Object.keys(object2)
    
    console.log(object1Keys, object2Keys)
    
    // if the lengths don't match, we have to return false :)
    if (object1Keys.length !== object2Keys.length){
      return false
    }
    
    // if we get to this part of our function
    // in other words, if we don't end up 
    // returning false above, what do we know for sure?
    for (let i = 0; i < object1Keys.length; i++){
      // we need a way of comparing BOTH the keys and the values at that particular key
      // if either of those conditions doesn't produce a strict equality, we should return false
      const currentKey1 = object1Keys[i]
      const currentKey2 = object2Keys[i]
     
      // first, check keys equality
      if (currentKey1 !== currentKey2){
        return false
      }
      
      // second, check values equality
      if (object1[currentKey1] !== object2[currentKey2]){
        return false
      }
    }
    
    return true
  }
  
  describe('compareObjects', () => {
  
    it('is a function', () => {
      expect(typeof compareObjects).toEqual('function');
    });
  
    it('returns a boolean', () => {
      let returnedValue = compareObjects({}, {});
      expect(typeof returnedValue).toEqual('boolean');
    });
  
    it('returns true if both objects have identical key/value pairs', () => {
      let returnedValue = compareObjects({a: 1, b: 2}, {a: 1, b: 2});
      expect(returnedValue).toEqual(true);
    });
  
    it('returns false if the objects have different keys', () => {
      let returnedValue = compareObjects({a: 1, b: 2}, {a: 1, c: 2});
      expect(returnedValue).toEqual(false);
    });
  
    it('returns false if the objects have different values', () => {
      let returnedValue = compareObjects({a: 1, b: 2}, {a: 1, b: 3});
      expect(returnedValue).toEqual(false);
    });
  
    it('returns false if the first object has an extra key/value pair', () => {
      let returnedValue = compareObjects({a: 1, b: 2}, {a: 1});
      expect(returnedValue).toEqual(false);
    });
  
    it('returns false if the second object has an extra key/value pair', () => {
      let returnedValue = compareObjects({a: 1}, {a: 1, b: 2});
      expect(returnedValue).toEqual(false);
    });
  
  });
  