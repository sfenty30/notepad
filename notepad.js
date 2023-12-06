const editor = document.getElementById('editor');

// Save the text in the editor to local storage
function saveText() {
   localStorage.setItem('notepad', editor.value);
}

// Load the saved text from local storage into the editor
function loadText() {
   const savedText = localStorage.getItem('notepad');
   if (savedText) {
      editor.value = savedText;
   }
}

// Clear the text in the editor and remove from local storage
function clearText() {
   editor.value = '';
   localStorage.removeItem('notepad');
}

// Event listener for saving the text
editor.addEventListener('input', saveText);

// Load the saved text on page load
window.addEventListener('load', loadText);
