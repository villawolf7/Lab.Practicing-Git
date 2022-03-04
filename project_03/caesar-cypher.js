// YOUR CODE BELOW
// YOUR CODE BELOW

function caesarCypher(secret, shift){
  let crypt = "";
  let fromFront;
  let code
  let wrap
  for(let i=0;i<secret.length;i++){
    if (secret[i]===" "){
       crypt+=secret[i];
    }else{
      code =secret.charCodeAt(i)
      if(code+shift>122){
        wrap=122-code
        fromFront=shift-wrap
        wrap=96+fromFront
        crypt+=String.fromCharCode(wrap)
      }else{
        code+=shift
        crypt+=String.fromCharCode(code)
      }
    }
  }return crypt
}


describe('Caesar Cypher', () => {

    it('is a function?', () => {
      expect(typeof caesarCypher).toEqual('function');
    });
  
    it('rotates a letter by the number passed in', () => {
      let returnedValue = caesarCypher('a', 2);
      expect(returnedValue).toEqual('c');
    });
  
    it('rotates every letter in the string by the supplied letter', () => {
      let returnedValue = caesarCypher('doggo', 7);
      expect(returnedValue).toEqual('kvnnv');
    });
  
    it('wraps around to the beginning of the alphabet when necessary', () => {
      let returnedValue = caesarCypher('hello', 13);
      expect(returnedValue).toEqual('uryyb');
    });
  
    it('retains spaces between encrypter world', () => {
      let returnedValue = caesarCypher('hello world', 13);
      expect(returnedValue).toEqual('uryyb jbeyq');
    });
  
  });
  