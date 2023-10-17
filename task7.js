function countWords(sentence) {
    const words = sentence.split(' ');
    return words.length;
    }

const sentence = 'Hello, how are you?';
const wordCount = countWords(sentence);
console.log(wordCount);