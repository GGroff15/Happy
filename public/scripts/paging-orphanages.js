//Cria mapa.
const map = L.map('mapid').setView([-23.5308492,-46.7846366], 13);

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

function addMarker({id, name, lat, lng}) {
    //Cria popup
    const popup = L.popup({
        closeButton: false,                     //Desabilita o botão de fechar
        className: 'map-popup',                 //Nome
        minWidth: 240,                          //Largura minima
        minHeight: 240                          //Altura minima
    }).setContent(`${name} <a href="/orphanage?id=${id}"> <img src="/images/arrow-white.svg" </a>`);  //Usar craze para poder substituir partes do texto por variaveis
    
    //Adiciona um marcador ao mapa
    L.marker([lat, lng], {icon}).addTo(map)
        .bindPopup(popup)
      
}

const orphanageSpan = document.querySelectorAll('.orphanages span')
orphanageSpan.forEach( orphanageElement => {
    const orphanage = {
        id: orphanageElement.dataset.id,
        name: orphanageElement.dataset.name,
        lat: orphanageElement.dataset.lat,
        lng: orphanageElement.dataset.lng
    }
    addMarker(orphanage)
})