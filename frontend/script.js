function pageContent() {
    return `
    <a href="best-beers.json">List of beers</a>
    `;
};

function loadEvent() {
    const rootElement = document.getElementById("root")
    rootElement.innerHTML = pageContent();
}

window.addEventListener("load", loadEvent)