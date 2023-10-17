function reverseStringWithException(str, exception) {
    const words = str.split(' ');
    const reversedWords = words.map(word => (word === exception ? word : reverseWord(word)));
    return reversedWords.join(' ');
    }
    
    function reverseWord(word) {
    return word.split('').reverse().join('');
    }
    
    const phrase = 'Hello, World!';
    const exceptionWord = 'World';
    const reversedString = reverseStringWithException(phrase, exceptionWord);
    console.log(reversedString);