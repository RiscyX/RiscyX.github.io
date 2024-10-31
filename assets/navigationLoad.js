fetch('./assets/navigation.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('Navbar betöltése sikertelen.');
        }
        return response.text();
    })
    .then(data => {
        // Navbar tartalom beillesztése a 'navbar' div-be
        document.getElementById('navbar').innerHTML = data;
    })
    .catch(error => {
        console.error('Hiba történt:', error);
    });