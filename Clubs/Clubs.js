const map = L.map('map').setView([50.62881662872753, 26.223160427581846],13);

// Додаємо шар з OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Масив точок
const locations = [
    { coords: [50.62167060548211, 26.244930617838], text: "CLUB GOODLYFE №1"},
    { coords: [50.63890516738303, 26.268182406073223], text: "CLUB GOODLYFE №2" },
    { coords: [50.62014361897474, 26.213151350113577], text: "CLUB GOODLYFE №3" },
    { coords: [50.64029423573902, 26.20630385840552], text: "CLUB GOODLYFE №4" }
];  

// Додаємо маркери з масиву
locations.forEach(loc => {
    L.marker(loc.coords).addTo(map)
        .bindPopup(loc.text);
});
function toggleTheme() {
  document.body.classList.toggle("dark-theme");
}
