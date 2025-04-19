// Converter HTMLCollection para Array
const detailsElements = Array.from(
    document.getElementsByClassName("footer-accordion")
);

const mediaQuery = window.matchMedia("(max-width: 800px)");
function updateDetailsState() {
    detailsElements.forEach((element) => {
        // Se a width da tela for menor que 800px adiciona Open ao details
        element.open = !mediaQuery.matches;
    });
}

// Executa uma vez ao carregar
updateDetailsState();

// Monitora mudanças no tamanho da tela
mediaQuery.addEventListener("change", updateDetailsState);
