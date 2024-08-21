const r = document.querySelector(":root");
let theme = "white";

function blueTheme() {
    r.style.setProperty('--background', 'rgb(35, 49, 120)');
    r.style.setProperty('--text-color', 'white');
    r.style.setProperty('--text-hover-color', 'rgb(0, 213, 255)');

    r.style.setProperty('--btnHover', ' rgb(40, 61, 167)');
    r.style.setProperty('--btnBackground', 'rgb(35, 49, 120)');
    r.style.setProperty('--btnBorder', 'rgb(35, 49, 120)');
    r.style.setProperty('--btnColor', 'white');
    theme = "blue";
}

function whiteTheme() {
    r.style.setProperty('--background', 'white');
    r.style.setProperty('--text-color', 'black');
    r.style.setProperty('--text-hover-color', 'blue');

    r.style.setProperty('--btnHover', 'rgb(242, 242, 242)');
    r.style.setProperty('--btnBackground', 'white');
    r.style.setProperty('--btnBorder', 'black');
    r.style.setProperty('--btnColor', 'black');
    theme = "white";
}

const btnRef = document.querySelector("#change");
btnRef.addEventListener("click", () => {
    if(theme == "blue") {
        whiteTheme();
    } else if (theme == "white") {
        blueTheme();
    }
})