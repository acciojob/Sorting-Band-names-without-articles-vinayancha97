//your code here
const bands=['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

 function sortBandNames(bandNames) {
    // Regular expression to match articles ('a', 'an', 'the') at the beginning of the band names
    const articleRegex = /^(a|an|the)\s/i;

    return bandNames.sort((a, b) => {
      // Remove articles from band names for comparison
      const bandNameA = a.replace(articleRegex, '');
      const bandNameB = b.replace(articleRegex, '');

      // Compare the band names without articles in lexicographic order
      return bandNameA.localeCompare(bandNameB);
    });
  }

  function displayBandNamesInUL(bandNames) {
    const sortedBandNames = sortBandNames(bandNames);
    const ulElement = document.getElementById("band");

    // Clear existing contents of the ul element
    ulElement.innerHTML = '';

    // Generate and append li elements for each band name
    sortedBandNames.forEach((bandName) => {
      const liElement = document.createElement("li");
      liElement.textContent = bandName;
      ulElement.appendChild(liElement);
    });
  }

  // Call the function to display the sorted band names inside the ul element
  displayBandNamesInUL(bandNames);
