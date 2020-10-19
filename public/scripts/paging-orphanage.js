const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

// Pega os valores do HTML
const lat = document.querySelector('span[data-lat]').dataset.lat;
const lng = document.querySelector('span[data-lng]').dataset.lng;

//Cria mapa.
const map = L.map('mapid', options).setView([lat,lng], 15);

//Cria camada no mapa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
    .addTo(map);

//Cria marcador customizado
const icon = L.icon({
    iconUrl: "/images/map-marker.svg", //Localização da imagem que será o novo icone
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
}).setContent('Lar das Meninas <a href="/orphanage?id=1" class="choose-orphanage"> <img src="/images/arrow-white.svg" </a>');

//Adiciona um marcador ao mapa
L.marker([lat,lng], {icon})
.addTo(map)

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