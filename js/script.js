const resultArtist = document.getElementById("result-artist");
const playlistContainer = document.getElementById("result-playlists");
const searchInput = document.getElementById("search-input");

function requestApi(searchTerm) {
  fetch(`http://localhost:3000?name_like=${searchTerm}`)
    .then((response) => response.json())
    .then((results) => displayResults(results));
}

function displayResults(result) {
  playlistContainer.classList.add("hidden")
  const artistName = document.getElementById('artist-name');
  const artistImage = document.getElementById('artist-img');

  result.forEach(element => {
      artistName.innerText = element.name;
      artistImage.src = element.urlImg;
  });

  resultArtist.classList.remove('hidden');
}

function hidePlaylists() {
  playlistContainer.classList.add("hidden");
}

searchInput.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase();
  if (searchTerm === "") {
    resultArtist.classList.add("hidden");
    playlistContainer.classList.remove("hidden");
    return;
  }
  requestApi(searchTerm);
});