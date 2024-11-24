function toggleInfo(id) {
    const content = document.getElementById(id);
    content.style.display = content.style.display === 'none' ? 'block' : 'none';
  }
  
  
  var map = L.map('map').setView([17.3616, 78.4747], 16);
  
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  
  
  var locations = [
    {name: 'Charminar', coords: [17.3616, 78.4747]},
    {name: 'Laad Bazaar', coords: [17.362, 78.475]},
    {name: 'Pathar Gatti', coords: [17.3615, 78.4745]},
    {name: 'Meena Bazaar', coords: [17.3622, 78.4752]},
    {name: 'Moti Chowk', coords: [17.3618, 78.4748]},
    {name: 'Shahran Market', coords: [17.3624, 78.4755]},
    {name: 'Sultan Bazaar', coords: [17.3617, 78.4749]},
    {name: 'Perfume Market', coords: [17.3621, 78.4753]}
  ];
  
  locations.forEach(function(location) {
    L.marker(location.coords)
      .addTo(map)
      .bindPopup('<b>' + location.name + '</b>');
  });
  
  
  document.querySelectorAll('.info-content').forEach((element) => {
    element.style.display = 'none';
  });