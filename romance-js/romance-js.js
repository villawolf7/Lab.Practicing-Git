// let's store some sample text to test our functions
const poem = "you need my love and me onme we just dont need my cell phone late nightneed my love call me on the cityused to always stay atthat can only meanjust dont need my love call me"

// parseText should take an input text
// and return an array of comma-separated words
function parseText(text){
    // we're storing the output array from CALLING
    // the string built-in method .split()
    // and by supplying a "delimiter" which is really just a fancy word that tells the method HOW to divide up the string...
    // we get our array of words "for free"!
    const words = text.split(' ')

    // we're logging that array stored to the CONSTANT VARIABLE words here
    console.log(words)

    // we're returning the array, so that 
    // we can do stuff with the output
    return words;
    // how could we leverage an existing string method
    // to generate our array of words?
    // hint hint checkout String.prototype.split
}

const wordsArray = parseText(poem)

// you won't exactly need this code to solve the function
// BUT, you will need to iterate the array and do something special to create your Markov Chain
for (let i = 0; i < wordsArray.length; i++){
    console.log(`iterator is i=${i}, word is ${wordsArray[i]}`)
}

const wordPairs = parseText(poem)

    for (let i = 0; i < wordPairs.length; i++){
        console.log(`iterator is i=${i}, word is $
        {wordPairs[i]}`)

        