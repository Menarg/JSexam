let pageElem = document.querySelector('.page');
let planetInfoElem = document.querySelector('.planetInfo');

let SolenElem = document.querySelector('.Solen');
let MerkuriusElem = document.querySelector('.Merkurius');
let VenusElem = document.querySelector('.Venus');
let JordenElem = document.querySelector('.Jorden');
let MarsElem = document.querySelector('.Mars');
let JupiterElem = document.querySelector('.Jupiter');
let SaturnusElem = document.querySelector('.Saturnus');
let UranusElem = document.querySelector('.Uranus');
let NeptunusElem = document.querySelector('.Neptunus');

async function KEY(){
    let resp = await fetch("https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/keys", {
        method: "POST"
    })
        let data = await resp.json();
        let KEY = data.key;
        console.log(KEY);
        unlock(KEY);
};

async function unlock(API_KEY){
    console.log('nyckeln kom hit! ' + API_KEY);
    try {
        let resp = await fetch("https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies", {
        method: "GET",
        headers: { "x-zocom": API_KEY },
        }); 
        //console.log(resp);
        generatePlanets(resp);
    } catch (error) {console.error();}
};

async function generatePlanets(response){
    let body = '';

    let planet = await response.json();
    console.log(planet.bodies);

    for (let i = 0; i < planet.bodies.length; i++) {
        body = body + `
        <section class="planet ${planet.bodies[i].name}">
        </section>`
    }
    pageElem.innerHTML = body;
    generateInfoPage(planet);
}

KEY();

function generateInfoPage(planet) {
    let planetInfo = planet;

    let info = '';

    for (i = 0; i < planet.bodies.length; i++) {
        info = info + `
        <article class="hidden ${planetInfo.bodies[i].name}"
            <h1>${planetInfo.bodies[i].name}</h1>
            <h2>${planetInfo.bodies[i].latinName}</h2>
            <h3>${planetInfo.bodies[i].type}</h3>
            <p>${planetInfo.bodies[i].desc}</p>
        </article>
        `;
        planetInfoElem.innerHTML = info;
    }
}

// SolenElem.addEventListener('click', () =>{
    // hitta article class "hidden Solen", ta bort hidden
    // document.querySelector('.hidden.Jorden').classList.toggle('hidden');
// });