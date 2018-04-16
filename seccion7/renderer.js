const { webFrame } = require("electron");

let zoom = 0

document.getElementById("zoom_in").addEventListener("click", () => {
    webFrame.setZoomLevel(++zoom)
});



document.getElementById("zoom_out").addEventListener("click", () => {
    webFrame.setZoomLevel(--zoom)
});


document.getElementById("zoom_reset").addEventListener("click", () => {
    webFrame.setZoomLevel(zoom = 0)
});