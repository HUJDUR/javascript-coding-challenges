function whereAmI(lat, lng) {
    const nadir = fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`).then(response => {
        if (!response.ok) throw new Error('You reached the maximum amount of requests!')
        return response.json();
    }).then(data => {
        console.log(data);
        console.log(`You are in ${data.city}, ${data.country}!`);
    }).catch(err => {
        console.error(`There was an error! ${err.message}`)
    })
}

whereAmI(52.508, 13.381); 