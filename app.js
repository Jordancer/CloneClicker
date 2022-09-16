let naruto = document.getElementById("naruto");
let cloneText = document.getElementById("Clone");
let cloneTotal = 0;

naruto.addEventListener("click", (e) => {
  cloneTotal++;
  cloneCounter.innerHTML = "Total Clones: " + cloneTotal;
});
