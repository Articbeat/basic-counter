const increasebtn = document.getElementById('increasebtn');
const decreasebtn = document.getElementById('decreasebtn');
const resetbtn = document.getElementById('resetbtn');
const counterDisplay = document.getElementById('counter');
let count = 0;
increasebtn.onclick = function() {
    count++;
    counterDisplay.textContent = count;
}
decreasebtn.onclick = function() {
    count--;
    counterDisplay.textContent = count;
}
resetbtn.onclick = function() {
    count = 0;
    counterDisplay.textContent = count;
}
