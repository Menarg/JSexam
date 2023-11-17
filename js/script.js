let planetFigureElem = document.querySelector('.page');
let planetInfoElem = document.querySelector('.planetInfo');
let titleElem = document.querySelector('.title');

async function KEY() { // Gets API key and converts it to usable information
    let resp = await fetch("https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/keys", {
        method: "POST"
    })
        let data = await resp.json();
        let KEY = data.key;
        console.log(KEY);
        unlock(KEY);
};

async function unlock(API_KEY) { // Unlocks the information in the API using the API key
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

async function generatePlanets(response) { // Generates the Figures for the planets
    let body = ``;

    let planet = await response.json();
    console.log(planet.bodies);

    for (let i = 0; i < planet.bodies.length; i++) {
        body = body + `
        <section id="${planet.bodies[i].name}Figure" class="planet ${planet.bodies[i].name}">
        </section>`
    }
    planetFigureElem.innerHTML = body;
    generateInfoPage(planet);
}

function generateInfoPage(planet) { // Generates the info pages for each planet
    let planetInfo = planet;

    let info = '';

    for (i = 0; i < planet.bodies.length; i++) {
        info = info + `
        <article id="${planet.bodies[i].name}Info" class="infopage hidden ${planetInfo.bodies[i].name}Info" 
            <h1>${planetInfo.bodies[i].name}</h1> 
            <h2>${planetInfo.bodies[i].latinName}</h2>
            <p>${planetInfo.bodies[i].desc}</p>
            <section class="subinfo">
                <article class="stats">
                    <h3>OMKRETS</h3>
                    <p>${planetInfo.bodies[i].circumference}</p>
                </article>
                <article class="stats">
                    <h3>KM FRÅN SOLEN</h3>
                    <p>${planetInfo.bodies[i].distance}</p>
                </article>
                <article class="stats">
                    <h3>MAX TEMPERATURE</h3>
                    <p>${planetInfo.bodies[i].temp.day}</p>
                </article>
                <article class="stats">
                    <h3>MIN TEMPERATURE</h3>
                    <p>${planetInfo.bodies[i].temp.night}</p>
                </article>
            </section>
            <article class="moons">
                <h3>MÅNAR</h3>
                <p>${planetInfo.bodies[i].moons}</p>
            </article>
        </article>
        `; //av någon anledning avslutas inte h1:an??
        planetInfoElem.innerHTML = info;
    }

    addEventListeners();
}

function addEventListeners() { // adds events listeners to the planet figures and info pages, have to be in a function so they get added after the figures and info pages get made

    // selectors for the planets figures on the main page
    let SolenElem = document.querySelector('#SolenFigure');
    let MerkuriusElem = document.querySelector('#MerkuriusFigure');
    let VenusElem = document.querySelector('#VenusFigure');
    let JordenElem = document.querySelector('#JordenFigure');
    let MarsElem = document.querySelector('#MarsFigure');
    let JupiterElem = document.querySelector('#JupiterFigure');
    let SaturnusElem = document.querySelector('#SaturnusFigure');
    let UranusElem = document.querySelector('#UranusFigure');
    let NeptunusElem = document.querySelector('#NeptunusFigure');

    // Selectors for the info pages for the planets
    let SolenInfoElem = document.querySelector('#SolenInfo');
    let MerkuriusInfoElem = document.querySelector('#SolenInfo');
    let VenusInfoElem = document.querySelector('#SolenInfo');
    let JordenInfoElem = document.querySelector('#SolenInfo');
    let MarsInfoElem = document.querySelector('#SolenInfo');
    let JupiterInfoElem = document.querySelector('#SolenInfo');
    let SaturnusInfoElem = document.querySelector('#SolenInfo');
    let UranusInfoElem = document.querySelector('#SolenInfo');
    let NeptunusInfoElem = document.querySelector('#SolenInfo');

    SolenElem.addEventListener('click' , () => {
        planetFigureElem.classList.toggle('hidden');
        SolenInfoElem.classList.toggle('hidden');
        titleElem.classList.toggle('hidden');
    });

    SolenInfoElem.addEventListener('click' , () => {
        planetFigureElem.classList.toggle('hidden');
        SolenInfoElem.classList.toggle('hidden');
        titleElem.classList.toggle('hidden');
    });

    MerkuriusElem.addEventListener('click' , () => {
        planetFigureElem.classList.toggle('hidden');
        MerkuriusInfoElem.classList.toggle('hidden');
        titleElem.classList.toggle('hidden');
    });

    MerkuriusInfoElem.addEventListener('click' , () => {
        planetFigureElem.classList.toggle('hidden');
        MerkuriusInfoElem.classList.toggle('hidden');
        titleElem.classList.toggle('hidden');
    });

    VenusElem.addEventListener('click' , () => {
        planetFigureElem.classList.toggle('hidden');
        VenusInfoElem.classList.toggle('hidden');
        titleElem.classList.toggle('hidden');
    });

    VenusInfoElem.addEventListener('click' , () => {
        planetFigureElem.classList.toggle('hidden');
        VenusInfoElem.classList.toggle('hidden');
        titleElem.classList.toggle('hidden');
    });

    JordenElem.addEventListener('click' , () => {
        planetFigureElem.classList.toggle('hidden');
        JordenInfoElem.classList.toggle('hidden');
        titleElem.classList.toggle('hidden');
    });

    JordenInfoElem.addEventListener('click' , () => {
        planetFigureElem.classList.toggle('hidden');
        JordenInfoElem.classList.toggle('hidden');
        titleElem.classList.toggle('hidden');
    });

    MarsElem.addEventListener('click' , () => {
        planetFigureElem.classList.toggle('hidden');
        MarsInfoElem.classList.toggle('hidden');
        titleElem.classList.toggle('hidden');
    });

    MarsInfoElem.addEventListener('click' , () => {
        planetFigureElem.classList.toggle('hidden');
        MarsInfoElem.classList.toggle('hidden');
        titleElem.classList.toggle('hidden');
    });

    JupiterElem.addEventListener('click' , () => {
        planetFigureElem.classList.toggle('hidden');
        JupiterInfoElem.classList.toggle('hidden');
        titleElem.classList.toggle('hidden');
    });

    JupiterInfoElem.addEventListener('click' , () => {
        planetFigureElem.classList.toggle('hidden');
        JupiterInfoElem.classList.toggle('hidden');
        titleElem.classList.toggle('hidden');
    });

    SaturnusElem.addEventListener('click' , () => {
        planetFigureElem.classList.toggle('hidden');
        SaturnusInfoElem.classList.toggle('hidden');
        titleElem.classList.toggle('hidden');
    });

    SaturnusInfoElem.addEventListener('click' , () => {
        planetFigureElem.classList.toggle('hidden');
        SaturnusInfoElem.classList.toggle('hidden');
        titleElem.classList.toggle('hidden');
    });

    UranusElem.addEventListener('click' , () => {
        planetFigureElem.classList.toggle('hidden');
        UranusInfoElem.classList.toggle('hidden');
        titleElem.classList.toggle('hidden');
    });

    UranusInfoElem.addEventListener('click' , () => {
        planetFigureElem.classList.toggle('hidden');
        UranusInfoElem.classList.toggle('hidden');
        titleElem.classList.toggle('hidden');
    });

    NeptunusElem.addEventListener('click' , () => {
        planetFigureElem.classList.toggle('hidden');
        NeptunusInfoElem.classList.toggle('hidden');
        titleElem.classList.toggle('hidden');
    });

    NeptunusInfoElem.addEventListener('click' , () => {
        planetFigureElem.classList.toggle('hidden');
        NeptunusInfoElem.classList.toggle('hidden');
        titleElem.classList.toggle('hidden');
    });
    // bara Solen som funkar??
}

KEY(); //GO!