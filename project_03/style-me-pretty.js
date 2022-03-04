// TYPE CODE BELOW
function styleMePretty() 
  let truth = '';
  
  function innerBeauty(count) {
    let result = '';

    while(count > 0) {
      count--;

      if(count===2) {
        result += 'Unformatted code';
      }
    } 

    result += ' is difficult to parse';
    return result;
  } 
    truth += innerBeauty(5);
    truth += ' for humans if not for machines';
    return truth;
}

describe('styleMePretty', function() {

it('is a function', function() {
  expect(typeof styleMePretty).toEqual('function');
});

it('returns a string', function() {
  let returnedValue = styleMePretty();
  expect(typeof returnedValue).toEqual('string');
});

it('returns the correct message', function() {
  let returnedValue = styleMePretty();
  expect(returnedValue).toEqual(
    'Unformatted code is difficult to parse for humans if not for machines'
  );
});

});
