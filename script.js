const bands = ['The Beatles', 'Led Zeppelin', 'Pink Floyd', 'Aerosmith'];

// Define the strip function to remove common words from band names
function strip(word) {
const regex = /^(a |the |an )/i;
return word.replace(regex, '').trim();
}

// Sort the bands array using the strip function to ignore common words
const sortedBands = bands.sort((a, b) => (strip(a) > strip(b)) ? 1 : -1);

// Update the DOM with the sorted band names
const bandList = document.getElementById('band');
sortedBands.forEach(band => {
const listItem = document.createElement('li');
listItem.textContent = band;
bandList.appendChild(listItem);
});