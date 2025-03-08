const params = new URLSearchParams(window.location.search);
const characterId = params.get("id");
const detailsDiv = document.getElementById("character-details");

fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
  .then((response) => response.json())
  .then((character) => {
    detailsDiv.innerHTML = `
            <img src="${character.image}" alt="${character.name}">
            <h2>${character.name}</h2>
            <p><strong>Status:</strong> ${character.status}</p>
            <p><strong>Species:</strong> ${character.species}</p>
            <p><strong>Type:</strong> ${character.type || "N/A"}</p>
            <p><strong>Gender:</strong> ${character.gender}</p>
            <p><strong>Origin:</strong> ${character.origin.name}</p>
            <p><strong>Location:</strong> ${character.location.name}</p>
        `;
  });

function updateClock() {
  const now = new Date();
  document.getElementById("clock").textContent =
    now.toLocaleTimeString() + " " + now.toLocaleDateString();
}

setInterval(updateClock, 1000);
