// Array of emojis
const emojis = [
    '😀', '😂',  '😊', '😍', '😎', '😢', '😡', '🥳', '😇', 
    '🤯', '😱', '🤔', '😴',  '🙃', '😉', '😋', '🤪', '🧐',
    '🤓', '🤑', '🤠', '😺', '😸', '😹', '😻', '😼', '😽', '🙀',
    '😿', '😾', '🙈', '🙉', '🙊', '🐶', '🐱', '🐭', '🐹', '🐰'
];


// Function to generate a random emoji
  function generateRandomEmoji() {
     return Math.floor(Math.random() * emojis.length)
  }

 //getting the access to the dom elements
    const generateButton = document.getElementById('generateButton');
    const emojiDisplay = document.getElementById('emojiDisplay');

    
// manupilating the DOM
 generateButton.addEventListener('click', () => {
 emojiDisplay.textContent = emojis[generateRandomEmoji()];
});
    