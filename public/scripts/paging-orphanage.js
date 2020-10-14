const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

//Cria mapa.
const map = L.map('mapid', options).setView([-23.5308492,-46.7846366], 13);

//Cria camada no mapa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
    .addTo(map);

//Cria marcador customizado
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg", //Localização da imagem que será o novo icone
    iconSize: [58, 68],                        //Tamanho do icone
    iconAncher: [29, 68],
    popupAnchor: [170,2]
})

//Cria popup
const popup = L.popup({
    closeButton: false,                     //Desabilita o botão de fechar
    className: 'map-popup',                 //Nome
    minWidth: 240,                          //Largura minima
    minHeight: 240                          //Altura minima
}).setContent('Lar das Meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg" </a>');

//Adiciona um marcador ao mapa
L.marker([-23.5308492,-46.7846366], {icon}).addTo(map)
    .bindPopup(popup)

//Galeria de imagens
function selectImage(event) {
    const button = event.currentTarget; //Salva o botão precionado

    // remover todas as classes .active
    const buttons = document.querySelectorAll(".images button");
    buttons.forEach(removeActiveClass);

    function removeActiveClass(button) {
        button.classList.remove("active");
    }

    // seleciona a imagem clicada
    const image = button.children[0];
    const imageContainer = document.querySelector(".orphanage-details > img");

    // atualizar o container de imagem
    imageContainer.src = image.src;

    // adicionar a classe .active para o botão clicado
    button.classList.add("active");
}