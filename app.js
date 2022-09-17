let naruto = document.getElementById("naruto");
let cloneTotal = 0;
let upgrade = document.getElementById("upgrade");
let a = 1;
upgrade.style.display = "none";

upgrade.addEventListener("click", (e) => {
  a = 2;
  cloneCounter.innerHTML = "Total Clones: " + cloneTotal;
});

naruto.addEventListener("click", (e) => {
  cloneTotal = cloneTotal + a;
  cloneCounter.innerHTML = "Total Clones: " + cloneTotal;
  if (cloneTotal >= 5) {
    cloneCounter.innerHTML = "Total Clones: " + cloneTotal;
    upgrade.style.display = "block";
  }
});
