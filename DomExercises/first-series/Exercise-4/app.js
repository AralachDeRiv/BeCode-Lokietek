const container = document.querySelector(".container");

for (let i = 1; i <= 151; i++) {
  container.innerHTML += `<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png" alt="Pokemon-${i}">`;
}
