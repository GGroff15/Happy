//Cria mapa.
const map = L.map('mapid').setView([-23.5308492,-46.7846366], 13);

//Cria camada no mapa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
    .addTo(map);

//Cria marcador customizado
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg", //Localização da imagem que será o novo icone
    iconSize: [58, 68],                        //Tamanho do icone
    iconAncher: [29, 68]
})

let marker;

//Cria e adiciona um marcador
map.on('click',(event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;
    
    // Remove marcador
    marker && map.removeLayer(marker);

    // adiciona camada icone
    marker = L.marker([lat, lng], {icon}).addTo(map);
});
    
// adicionar campo de fotos
function addFotoField() {
    // pegar o container de fotos #images
    const container = document.querySelector('#images');
    // pegar o container para duplicar .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload');
    // realizar o colne da ultima imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length-1].cloneNode(true);
    const input = newFieldContainer.children[0];
    // Verifica se o campo esta vazio
    if(input.value === "") {
        return
    }
    // Limpa o campo antes de adicionar ao container de imagens
    input.value = "";
    // adicioanr o clone ao container de #images
    container.appendChild(newFieldContainer);
}

// Remover fotos
function deleteField(event) {
    const span = event.currentTarget;
    const fieldsContainer = document.querySelectorAll('.new-upload');

    if(fieldsContainer.length < 2) {
        // Limpar o valor do campo
        span.parentNode.children[0].value = "";
        return;
    }

    // deletar o campo
    span.parentNode.remove();
}

// Selecionar sim ou não
function toggleSelect(event) {
    // retirar a classe .active (dos botões)
    document.querySelectorAll('.button-select button')
    .forEach((button) => button.classList.remove('active'));
    // colocar a classe .active
    const button = event.currentTarget;
    button.classList.add('active');
    // atualizar o input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]');
    // verificar se sim ou não
    input.value = button.dataset.value;
}