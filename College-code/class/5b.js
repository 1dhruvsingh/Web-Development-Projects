let count = 10; 
const counter = document.getElementById("counter");

document.getElementById("increase").addEventListener("click", () => {
    count++;
    counter.textContent = count;
});

document.getElementById("decrease").addEventListener("click", () => {
    count--;
    counter.textContent = count;
});