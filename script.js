const containerSlider = document.querySelector(".container");

document.querySelector("#home").addEventListener("click", () => {
    containerSlider.style.marginLeft = "0";
});
document.querySelector("#about").addEventListener("click", () => {
    containerSlider.style.marginLeft = "-100%";
});
document.querySelector("#projects").addEventListener("click", () => {
    containerSlider.style.marginLeft = "-200%";
});
