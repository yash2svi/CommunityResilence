// Initialize the map
const map = L.map('map').setView([51.505, -0.09], 13);

// Create a tile layer using OpenStreetMap data
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

// Sample rescue center data with name, latitude, and longitude
const rescueCenters = [
    { name: 'Rescue Center 1', lat: 51.505, lng: -0.09 },
    { name: 'Rescue Center 2', lat: 51.51, lng: -0.1 },
    { name: 'Rescue Center 3', lat: 51.515, lng: -0.095 },
    // Add more rescue centers as needed
];

// Function to calculate distance between two points using Haversine formula
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers
    return distance;
}

// Function to find the nearest rescue center
function findNearestRescueCenter(userLat, userLng) {
    let nearestCenter = null;
    let nearestDistance = Infinity;

    rescueCenters.forEach(centerData => {
        const distance = calculateDistance(userLat, userLng, centerData.lat, centerData.lng);
        if (distance < nearestDistance) {
            nearestDistance = distance;
            nearestCenter = centerData;
        }
    });

    return nearestCenter;
}

// Function to handle the "Find Nearest Rescue Center" button click
function findNearestRescueCenter() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const userLat = position.coords.latitude;
            const userLng = position.coords.longitude;

            const nearestCenter = findNearestRescueCenter(userLat, userLng);

            if (nearestCenter) {
                alert(`The nearest rescue center is ${nearestCenter.name}`);
            } else {
                alert('No rescue center found');
            }
        }, function(error) {
            console.error('Error getting user location:', error);
            alert('Error getting user location. Please enable location services.');
        });
    } else {
        alert('Geolocation is not supported by your browser.');
    }
}
