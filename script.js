const btn = document.getElementById("btn");
const carta = document.getElementById("carta");

btn.addEventListener("click", () => {
  carta.classList.toggle("hidden");
});