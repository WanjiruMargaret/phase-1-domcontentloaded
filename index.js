// Your code goes here
document.addEventListener('DOMContentLoaded', () => {
  // Find the paragraph element with id="text"
  const textParagraph = document.getElementById('text');
  
  // Modify the text content of the paragraph
  if (textParagraph) {
    textParagraph.textContent = 'This is really cool!';
  }
});
