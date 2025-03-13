const apiKey = 'X7bpxTq2jijvKiltoSbrUAydeagcu6aS7quHihSG';
const fetchButton = document.getElementById('fetchPhotos');
const gallery = document.getElementById('gallery');
const cameraSelect = document.getElementById('camera');
const solSelect = document.getElementById('sol');
const dateInput = document.getElementById('date');

document.addEventListener('DOMContentLoaded', () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    dateInput.value = yesterday.toISOString().split('T')[0];
});

fetchButton.addEventListener('click', async () => {
    const camera = cameraSelect.value;
    const sol = solSelect.value;
    const date = dateInput.value;
    
    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&camera=${camera}&earth_date=${date}&api_key=${apiKey}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayPhotos(data.photos);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});

function displayPhotos(photos) {
    gallery.innerHTML = '';
    if (photos.length === 0) {
        gallery.innerHTML = '<p>No images found for this query.</p>';
        return;
    }
    
    photos.forEach(photo => {
        const imgElement = document.createElement('img');
        imgElement.src = photo.img_src;
        imgElement.alt = `Mars Rover Image - ${photo.earth_date}`;
        gallery.appendChild(imgElement);
    });
}
