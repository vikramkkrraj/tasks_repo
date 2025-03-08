const characterCard = document.getElementById("charater-card");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
let page = 1;
const baseUrl = "https://rickandmortyapi.com/api";
const charEndPoint = "https://rickandmortyapi.com/api/character";

window.addEventListener("DOMContentLoaded", () => {
  const fetchData = async (page) => {
    const res = await fetch(`${charEndPoint}?page=${page}`);
    const data = await res.json();
    // console.log(data);

    characterCard.innerHTML = "";
    data.results.forEach((character) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
                <img src="${character.image}" alt="${character.name}">
                <h3>${character.name}</h3>
                <p>${character.species} - ${character.status}</p>
            `;

            card.addEventListener("click", () => {
                window.open(`character.html?id=${character.id}`, "_blank")
            })
            characterCard.appendChild(card);
    });
    prev.disabled = !data.info.prev
    next.disabled = !data.info.next
  };

  prev.addEventListener("click", () => {
    if(page > 1) {
        page--;
        fetchData(page)
    }
  })
  next.addEventListener("click", () => {
    page++;
    fetchData(page);
  })

  function updateClock() {
    const now = new Date();
    document.getElementById('clock').textContent = now.toLocaleTimeString() + " " + now.toLocaleDateString()
  }

  setInterval(updateClock,1000)

  fetchData(page);
});


