document.getElementById("range-slider-entertainment").addEventListener("input", function() {
    document.getElementById("output-entertainment").textContent = this.value;
});

document.getElementById("range-slider-gaming").addEventListener("input", function() {
    document.getElementById("output-gaming").textContent = this.value;
});

document.getElementById("range-slider-tech").addEventListener("input", function() {
    document.getElementById("output-tech").textContent = this.value;
});
document.getElementById("range-slider-finance").addEventListener("input", function() {
    document.getElementById("output-finance").textContent = this.value;
});

document.getElementById("range-slider-health").addEventListener("input", function() {
    document.getElementById("output-health").textContent = this.value;
});

document.getElementById("range-slider-sport").addEventListener("input", function() {
    document.getElementById("output-sport").textContent = this.value;
});