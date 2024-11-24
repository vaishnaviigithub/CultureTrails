const map = L.map('map').setView([20.5937, 78.9629], 5); // Center of India

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

const cities = {
    mumbai: {
        name: 'Mumbai',
        coords: [19.0760, 72.8777],
        places: [
            { 
                name: 'Gateway of India', 
                coords: [18.9218, 72.8347], 
                details: 'Iconic monument built during the British Raj.',
                image: '/virtualguide/images/gateway.jpg'
            },
            { 
                name: 'Marine Drive', 
                coords: [18.9963, 72.8258], 
                details: 'A famous promenade known for scenic views.',
                image: '/virtualguide/images/marine-drive.jpg'
            },
            { 
                name: 'Chhatrapati Shivaji Terminus', 
                coords: [18.9612, 72.8314], 
                details: 'A UNESCO World Heritage Site and historic railway station.',
                image: '/virtualguide/images/cst.jpg'
            }
        ]
    },
    hyderabad: {
        name: 'Hyderabad',
        coords: [17.3850, 78.4867],
        places: [
            { 
                name: 'Charminar', 
                coords: [17.3616, 78.4747], 
                details: 'A historical monument and mosque.',
                image: '/virtualguide/images/charminar.jpg'
            },
            { 
                name: 'Hussain Sagar Lake', 
                coords: [17.4239, 78.4747], 
                details: 'An artificial lake known for its large Buddha statue.',
                image: '/virtualguide/images/sagar.webp'
            },
            { 
                name: 'Golconda Fort', 
                coords: [17.3848, 78.4025], 
                details: 'A historic fort with stunning architecture.',
                image: '/virtualguide/images/golconda.jpg'
            }
        ]
    },
    kolkata: {
        name: 'Kolkata',
        coords: [22.5726, 88.3639],
        places: [
            { 
                name: 'Victoria Memorial', 
                coords: [22.5431, 88.3426], 
                details: 'A large marble building dedicated to Queen Victoria.',
                image: '/virtualguide/images/victoria.jpeg'
            },
            { 
                name: 'Howrah Bridge', 
                coords: [22.5962, 88.3433], 
                details: 'An iconic bridge that connects Howrah and Kolkata.',
                image: '/virtualguide/images/howrah_bridge.jpg'
            },
            { 
                name: 'Dakshineswar Kali Temple', 
                coords: [22.6525, 88.3476], 
                details: 'A famous temple dedicated to the goddess Kali.',
                image: '/virtualguide/images/dakshineswar-kali-temple.avif'
            }
        ]
    },
    varanasi: {
        name: 'Varanasi',
        coords: [25.3176, 82.9739],
        places: [
            { 
                name: 'Kashi Vishwanath Temple', 
                coords: [25.3175, 82.9739], 
                details: 'One of the most famous Hindu temples dedicated to Lord Shiva.',
                image: '/virtualguide/images/kashi.jpg'
            },
            { 
                name: 'Dashashwamedh Ghat', 
                coords: [25.3136, 82.8709], 
                details: 'The main ghat on the Ganges river, famous for Ganga Aarti.',
                image: '/virtualguide/images/dashashwamedh.jpg'
            }
        ]
    },
    agra: {
        name: 'Agra',
        coords: [27.1751, 78.0421],
        places: [
            { 
                name: 'Taj Mahal', 
                coords: [27.1751, 78.0421], 
                details: 'An iconic symbol of love and a UNESCO World Heritage Site.',
                image: '/virtualguide/images/taj.jpg'
            },
            { 
                name: 'Agra Fort', 
                coords: [27.1767, 78.0081], 
                details: 'A UNESCO World Heritage Site and an important fort in India.',
                image: '/virtualguide/images/agra-fort.jpg'
            }
        ]
    },
    kanyakumari: {
        name: 'Kanyakumari',
        coords: [8.0883, 77.5701],
        places: [
            { 
                name: 'Vivekananda Rock Memorial', 
                coords: [8.0884, 77.5705], 
                details: 'A popular tourist spot built in honor of Swami Vivekananda.',
                image: '/virtualguide/images/vivekananda.jpg'
            },
            { 
                name: 'Thiruvalluvar Statue', 
                coords: [8.0883, 77.5700], 
                details: 'A monumental statue of the poet Thiruvalluvar.',
                image: '/virtualguide/images/thiruvalluvar.jpg'
            }
        ]
    },
    jodhpur: {
        name: 'Jodhpur',
        coords: [26.2186, 73.2833],
        places: [
            { 
                name: 'Mehrangarh Fort', 
                coords: [26.2381, 73.3249], 
                details: 'One of the largest forts in India with stunning views.',
                image: '/virtualguide/images/mehrangarh.jpg'
            },
            { 
                name: 'Jaswant Thada', 
                coords: [26.2850, 73.2840], 
                details: 'A beautiful marble cenotaph built in memory of Maharaja Jaswant Singh II.',
                image: '/virtualguide/images/jaswant.jpg'
            }
        ]
    },
    tirupati: {
        name: 'Tirupati',
        coords: [13.6288, 79.4192],
        places: [
            { 
                name: 'Tirumala Venkateswara Temple', 
                coords: [13.6833, 79.3674], 
                details: 'One of the most visited and richest temples in the world.',
                image: '/virtualguide/images/tirupati.jpg'
            }
        ]
    },
    shirdi: {
        name: 'Shirdi',
        coords: [19.7650, 74.4785],
        places: [
            { 
                name: 'Shirdi Sai Baba Temple', 
                coords: [19.7650, 74.4785], 
                details: 'A sacred temple dedicated to Sai Baba, a revered saint.',
                image: '/virtualguide/images/shirdi.jpg'
            }
        ]
    }
};

Object.keys(cities).forEach(cityKey => {
    const city = cities[cityKey];
    const cityMarker = L.marker(city.coords).addTo(map);
    cityMarker.bindPopup(`<b>${city.name}</b>`);
});

document.getElementById('mumbai-btn').addEventListener('click', () => {
    selectCity('mumbai');
});
document.getElementById('hyderabad-btn').addEventListener('click', () => {
    selectCity('hyderabad');
});
document.getElementById('kolkata-btn').addEventListener('click', () => {
    selectCity('kolkata');
});
document.getElementById('varanasi-btn').addEventListener('click', () => {
    selectCity('varanasi');
});
document.getElementById('agra-btn').addEventListener('click', () => {
    selectCity('agra');
});
document.getElementById('kanyakumari-btn').addEventListener('click', () => {
    selectCity('kanyakumari');
});
document.getElementById('jodhpur-btn').addEventListener('click', () => {
    selectCity('jodhpur');
});
document.getElementById('tirupati-btn').addEventListener('click', () => {
    selectCity('tirupati');
});
document.getElementById('shirdi-btn').addEventListener('click', () => {
    selectCity('shirdi');
});

function selectCity(cityKey) {
    const city = cities[cityKey];
    map.setView(city.coords, 12); 

    map.eachLayer(layer => {
        if (layer instanceof L.Marker) {
            map.removeLayer(layer);
        }
    });

    city.places.forEach(place => {
        const marker = L.marker(place.coords).addTo(map);
        marker.bindPopup(place.name);

        // Show details on marker click
        marker.on('click', () => {
            showDetails(place);
        });
    });

    const localLanguageHelpBtn = document.getElementById('local-language-help-btn');
    if (cityKey === 'hyderabad') {
        localLanguageHelpBtn.style.display = 'inline-block';
    } else {
        localLanguageHelpBtn.style.display = 'none';
    }
}

function showDetails(place) {
    const placeName = document.getElementById('place-name');
    const placeDescription = document.getElementById('place-description');
    const placeImage = document.getElementById('place-image');
    const knowMoreBtn = document.getElementById('know-more-btn');
    const localLanguageHelpBtn = document.getElementById('local-language-help-btn');

    placeName.textContent = place.name;
    placeDescription.textContent = place.details;
    placeImage.src = place.image;
    placeImage.style.display = 'block'; 

    knowMoreBtn.style.display = 'inline-block'; 

    knowMoreBtn.onclick = function () {
        if (place.name === 'Charminar') {
            window.location.href = '/virtualguide/charminar/index.html';
        } else if (place.name === 'Golconda Fort') {
            window.location.href = 'golconda.html';
        } else if (place.name === 'Hussain Sagar Lake') {
            window.location.href = 'hussain-sagar.html';
        } 
    };

    localLanguageHelpBtn.style.display = 'none';
}

document.getElementById('local-language-help-btn').addEventListener('click', function() {
    window.location.href = 'local.html'; 
});

