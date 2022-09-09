window.onload = addListeners;

// function generateGalaxy(planetCount) {
//     let planetsGenerated = 0;
//     let generator_threshold = 0.1;
//     for (let x = 0; x < planetCount; x++) {
//         for(let y = 0; y < planetCount; y++) {
//             if(Math.random() > generator_threshold)
//         }        
//     }
// }

let test = null;

let starfieldOffset = {x:0,y:0};
let starfieldMargin = {left:'5px', top:'5px'}
let starfieldStepSizePx = 100;

const systemNames = ["Absolutno", "Acamar", "Achernar", "Achird", "Acrab", "Acrux", "Acubens", "Adhafera", "Adhara", "Adhil", "Ain", "Ainalrami", "Aladfar", "Alamak", "Alasia", "Alathfar", "Albaldah", "Albali", "Albireo", "Alchiba", "Alcor", "Alcyone", "Aldebaran", "Alderamin", "Aldhanab", "Aldhibah", "Aldulfin", "Alfirk", "Algedi", "Algenib", "Algieba", "Algol", "Algorab", "Alhena", "Alioth", "Aljanah", "Alkaid", "Al Kalb al Rai", "Alkalurops", "Alkaphrah", "Alkarab", "Alkes", "Almaaz", "Almach", "Al Minliar al Asad", "Alnair", "Alnasl", "Alnilam", "Alnitak", "Alniyat", "Alphard", "Alphecca", "Alpheratz", "Alpherg", "Alrakis", "Alrescha", "Alruba", "Alsafi", "Alsciaukat", "Alsephina", "Alshain", "Alshat", "Altair", "Altais", "Alterf", "Aludra", "Alula Australis", "Alula Borealis", "Alya", "Alzirr", "Amadioha", "Amansinaya", "Anadolu", "Ancha", "Angetenar", "Aniara", "Ankaa", "Anser", "Antares", "Arcalís", "Arcturus", "Arkab Posterior", "Arkab Prior", "Arneb", "Ascella", "Asellus Australis", "Asellus Borealis", "Ashlesha", "Asellus Primus", "Asellus Secundus", "Asellus Tertius", "Aspidiske", "Asterope, Sterope", "Atakoraka", "Athebyne", "Atik", "Atlas", "Atria", "Avior", "Axólotl", "Ayeyarwady", "Azelfafage", "Azha", "Azmidi", "Baekdu", "Barnard's Star", "Baten Kaitos", "Beemim", "Beid", "Belel", "Bélénos", "Bellatrix", "Berehynia", "Betelgeuse", "Bharani", "Bibhā", "Biham", "Bosona", "Botein", "Brachium", "Bubup", "Buna", "Bunda", "Canopus", "Capella", "Caph", "Castor", "Castula", "Cebalrai", "Ceibo", "Celaeno", "Cervantes", "Chalawan", "Chamukuy", "Chaophraya", "Chara", "Chason", "Chechia", "Chertan", "Citadelle", "Citalá", "Cocibolca", "Copernicus", "Cor Caroli", "Cujam", "Cursa", "Dabih", "Dalim", "Deneb", "Deneb Algedi", "Denebola", "Diadem", "Dingolay", "Diphda", "Dìwö", "Diya", "Dofida", "Dombay", "Dschubba", "Dubhe", "Dziban", "Ebla", "Edasich", "Electra", "Elgafar", "Elkurud", "Elnath", "Eltanin", "Emiw", "Enif", "Errai", "Fafnir", "Fang", "Fawaris", "Felis", "Felixvarela", "Flegetonte", "Fomalhaut", "Formosa", "Franz", "Fulu", "Funi", "Fumalsamakah", "Furud", "Fuyue", "Gacrux", "Gakyid", "Garnet Star", "Giausar", "Gienah", "Ginan", "Gloas", "Gomeisa", "Graffias", "Grumium", "Gudja", "Gumala", "Guniibuu", "Hadar", "Haedus", "Hamal", "Hassaleh", "Hatysa", "Helvetios", "Heze", "Hoggar", "Homam", "Horna", "Hunahpú", "Hunor", "Iklil", "Illyrian", "Imai", "Intercrus", "Inquill", "Intan", "Irena", "Itonda", "Izar", "Jabbah", "Jishui", "Kaffaljidhma", "Kakkab", "Kalausi", "Kamuy", "Kang", "Karaka", "Kaus Australis", "Kaus Borealis", "Kaus Media", "Kaveh", "Kekouan", "Keid", "Khambalia", "Kitalpha", "Kochab", "Koeia", "Koit", "Kornephoros", "Kraz", "Kuma", "Kurhah", "La Superba", "Larawag", "Lerna", "Lesath", "Libertas", "Lich", "Liesma", "Lilii Borea", "Lionrock", "Lucilinburhuc", "Lusitânia", "Maasym", "Macondo", "Mago", "Mahasim", "Mahsati", "Maia", "Malmok", "Marfak", "Marfik", "Markab", "Markeb", "Márohu", "Marsic", "Matar", "Mazaalai", "Mebsuta", "Megrez", "Meissa", "Mekbuda", "Meleph", "Menkalinan", "Menkar", "Menkent", "Menkib", "Merak", "Merga", "Meridiana", "Merope", "Mesarthim", "Miaplacidus", "Mimosa", "Minchir", "Minelauva", "Mintaka", "Mira", "Mirach", "Miram", "Mirfak", "Mirzam", "Misam", "Mizar", "Moldoveanu", "Mönch", "Montuno", "Morava", "Moriah", "Mothallah", "Mouhoun", "Mpingo", "Muliphein", "Muphrid", "Muscida", "Musica", "Muspelheim", "Nahn", "Naledi", "Naos", "Nash", "Nashira", "Násti", "Natasha", "Navi", "Nekkar", "Nembus", "Nenque", "Nervia", "Nihal", "Nikawiy", "Nosaxa", "Nunki", "Nusakan", "Nushagak", "Nyamien", "Ogma", "Okab", "Paikauhale", "Parumleo", "Peacock", "Petra", "Phact", "Phecda", "Pherkad", "Phoenicia", "Piautos", "Pincoya", "Pipoltr", "Pipirima", "Pleione", "Poerava", "Polaris", "Polaris Australis", "Polis", "Pollux", "Porrima", "Praecipua", "Prima Hyadum", "Procyon", "Propus", "Proxima Centauri", "Ran", "Rapeto", "Rasalas", "Rasalgethi", "Rasalhague", "Rastaban", "Regor", "Regulus", "Revati", "Rigel", "Rigil Kentaurus", "Rosalíadecastro", "Rotanev", "Ruchbah", "Rukbat", "Sabik", "Saclateni", "Sadachbia", "Sadalbari", "Sadalmelik", "Sadalsuud", "Sadr", "Sagarmatha", "Saiph", "Salm", "Sāmaya", "Sansuna", "Sargas", "Sarin", "Sarir", "Sceptrum", "Scheat", "Schedar", "Secunda Hyadum", "Segin", "Seginus", "Sham", "Shama", "Sharjah", "Shaula", "Sheliak", "Sheratan", "Sika", "Sirius", "Situla", "Skat", "Solaris", "Spica", "Sterrennacht", "Stribor", "Sualocin", "Subra", "Suhail", "Sulafat", "Syrma", "Tabit", "Taika", "Taiyangshou", "Taiyi", "Talitha", "Tangra", "Tania Australis", "Tania Borealis", "Tapecue", "Tarazed", "Tarf", "Taygeta", "Tegmine", "Tejat", "Terebellum", "Tevel", "Thabit", "Theemin", "Thuban", "Tiaki", "Tianguan", "Tianyi", "Timir", "Tislit", "Titawin", "Tojil", "Toliman", "Tonatiuh", "Torcular", "Tuiren", "Tupã", "Tupi", "Tureis", "Ukdah", "Uklun", "Unukalhai", "Unurgunite", "Uruk", "Vega", "Veritate", "Vindemiatrix", "Wasat", "Wazn", "Wezen", "Wurren", "Xamidimura", "Xihe", "Xuange", "Yed Posterior", "Yed Prior", "Yildun", "Zaniah", "Zaurak", "Zavijava", "Zhang", "Zibal", "Zosma", "Zubenelgenubi", "Zubenelhakrabi", "Zubeneschamali"];

let selectedSystem = null;
let player = null;

function addListeners() {
    selectedSystem = document.querySelector("rigel-starsystem.selected");
    if(selectedSystem == null) selectedSystem = document.querySelector("rigel-starsystem");
    player = document.querySelector("rigel-races race.player");

    setStarsystemOffsets();

    addStarfieldListeners();
    addBattlefieldListeners();
    addMenuListeners();
    addShipDesignListeners();
    addFleetMenuListeners();
    addMapListeners();
    addRacesScreenListeners();
    addPlanetScreenListeners();
    addTechScreenListeners();
    addButtonBarListeners();
}

function addStarfieldListeners() {
    displayPlanetDetails();

    const starfield = document.querySelector('rigel-starfield');

    starfield.addEventListener('mousedown', (e) => {
        offsetLeft = starfield.offsetLeft;
        offsetTop = starfield.offsetTop;
        starfieldOffset.x = e.clientX - offsetLeft;
        starfieldOffset.y = e.clientY - offsetTop;
        window.addEventListener('mousemove', moveStarfield, true);
    }, false);

    window.addEventListener('mouseup', (e) => {
        window.removeEventListener('mousemove', moveStarfield, true);
    },false)

    const starsystems = starfield.querySelectorAll("rigel-starsystem");
    for (const starsystem of starsystems) {
        starsystem.addEventListener('click', (e) => {
            if(starsystem.classList.contains('selected')) {
                // starsystem.classList.remove('selected');
            } else {
                starfield.querySelectorAll("rigel-starsystem.selected").forEach((element) => element.classList.remove('selected'));
                starsystem.classList.add('selected');
                selectedSystem = starsystem;
            }
            displayPlanetDetails();
        });
    }

    // details panel listeners
    const planetDetailsPanel = document.querySelector(".planet-details");
    const resources = planetDetailsPanel.querySelector(".planet-resources");
    const production = resources.querySelector(".production").querySelectorAll("div");

    for (let i = 0; i < production.length; i++) {
        // locking/unlocking resources
        production[i].querySelector("label").addEventListener("click", (e) => {
            let productionLocks = selectedSystem.getAttribute("production-locks").split(" ").map((lock) => {return lock != "0"});
            productionLocks[i] = !productionLocks[i];
            const finalLocks = productionLocks.map((lock) => {return lock?"1":"0"}).join(" ");
            selectedSystem.setAttribute("production-locks", finalLocks);
            displayPlanetDetails();
        });
        // modifying resources
        production[i].querySelector("input").addEventListener("input", (e) => {
            let productionLevels = selectedSystem.getAttribute("production-levels").split(" ").map((prod) => {return parseFloat(prod)});
            productionLevels[i] = parseFloat(production[i].querySelector("input").value);
            selectedSystem.setAttribute("production-levels", productionLevels.join(" "));
            balanceSystemProduction(i);
            displayPlanetDetails();
        });
    }
    // choosing ship to be produced.
    const shipCarousel = planetDetailsPanel.querySelector("ship-carousel");
    shipCarousel.addEventListener("click", (e) => {
        if(e.layerX >= shipCarousel.offsetWidth/2) {
            setSelectedShip(parseFloat(shipCarousel.getAttribute("focus")) + 1);
        } else {
            setSelectedShip(parseFloat(shipCarousel.getAttribute("focus")) - 1);
        }

    });

}
function addBattlefieldListeners() {
    
}
function addMenuListeners() {
    const menu = document.querySelector("rigel-menu.pause-menu");
    const [continue_button, new_game, save_game, load_game, settings] = menu.querySelectorAll("input");
    // add continue listener
    continue_button.addEventListener("click", (e) => {
        menu.classList.add("hidden");
    });
    menu.addEventListener("click", (e) => {
        if(e.target === menu)
            menu.classList.add("hidden");
    });
    // add new game listeners
    new_game.addEventListener("click", (e) => {
        newGame()
    });
    // add save game listeners
    // add load game listeners
    // add settings listeners
}
function addShipDesignListeners() {
    // for when design added/removed
    shipDesignsUpdated();
}
function addFleetMenuListeners() {
    // for when design removed
    shipDesignsUpdated();
}
function addMapListeners() {
    
}
function addRacesScreenListeners() {
    
}
function addPlanetScreenListeners() {
    
}
function addTechScreenListeners() {
    
}
function addButtonBarListeners() {
    const [menu, design, fleet, map, races, planets, tech, next_turn] = document.querySelectorAll("button-bar input");
    const rigel_menu = document.querySelector("rigel-menu.pause-menu");
    menu.addEventListener("click", (e) => {
        rigel_menu.classList.remove("hidden");
    });
}

function moveStarfield(e) {
    const game = document.querySelector("rigel-game");
    const starfield = document.querySelector('rigel-starfield');
    const button_bar = document.querySelector("button-bar");
    const planetDetails = document.querySelector(".planet-details");

    let offsetLeft = e.clientX - starfieldOffset.x + 'px';
    if (parseFloat(offsetLeft) + starfield.clientWidth < game.clientWidth - parseFloat(starfieldMargin.left))
        offsetLeft = game.clientWidth - parseFloat(starfieldMargin.left) - starfield.clientWidth + "px";
    if (parseFloat(offsetLeft) > parseFloat(starfieldMargin.left))
        offsetLeft = starfieldMargin.left;

    let offsetTop = e.clientY - starfieldOffset.y + 'px';
    if (parseFloat(offsetTop) + starfield.clientHeight < game.clientHeight - parseFloat(starfieldMargin.top) - button_bar.clientHeight)
        offsetTop = game.clientHeight - parseFloat(starfieldMargin.top) - starfield.clientHeight - button_bar.clientHeight + "px";
    if (parseFloat(offsetTop) > parseFloat(starfieldMargin.top))
        offsetTop = starfieldMargin.top;
    
    starfield.style.left = offsetLeft;
    starfield.style.top  = offsetTop;
}

function setStarsystemOffsets() {
    const starfield = document.querySelector('rigel-starfield');
    const starsystems = starfield.querySelectorAll('rigel-starsystem')
    for (const starsystem of starsystems) {
        starsystem.style.left = starsystem.getAttribute('x') * starfieldStepSizePx +'px';
        starsystem.style.top = starsystem.getAttribute('y') * starfieldStepSizePx +'px';
    }
}

function togglePlanetDetails() {
    const planetDetails = document.querySelector(".planet-details");
    planetDetails.classList.toggle("hidden");
    planetDetails.querySelector(".toggle-details").classList.toggle("left-chevron");
}

function displayPlanetDetails() {
    if(selectedSystem != null) {
        const planetDetailsPanel = document.querySelector(".planet-details");
        const name = planetDetailsPanel.querySelector(".planet-name");
        const [image, habitability, resources, max_pop] = planetDetailsPanel.querySelectorAll(".planet-summary>div");
        const allProduction = planetDetailsPanel.querySelectorAll(".production>div");
        const [ship, defense, industry, ecology, technology] = allProduction;
        name.innerHTML = selectedSystem.getAttribute("name");
        

        //production locks and production levels
        let productionLocks = selectedSystem.getAttribute("production-locks").split(" ").map((lock) => {return lock != "0"});

        balanceSystemProduction()
        let productionLevels = selectedSystem.getAttribute("production-levels").split(" ").map((prod) => {return parseFloat(prod)});
        
        for (let i = 0; i < allProduction.length; i++) {
            const element = allProduction[i];
            if (productionLocks[i]) {
                const icon = element.querySelector("icon");
                icon.classList.add("locked");
                icon.classList.remove("unlocked");
                element.querySelector("input").setAttribute("disabled", "");
            } else {
                const icon = element.querySelector("icon");
                icon.classList.add("unlocked");
                icon.classList.remove("locked");
                element.querySelector("input").removeAttribute("disabled");
            }
            const input = element.querySelector("input");
            //input.value changes the displayed value, setting the attribute value keeps the html up-to-date with the displayed value.
            input.value = productionLevels[i];
            input.setAttribute("value", productionLevels[i]);
        }
        populateShipCarousel();
        setShipProductions(selectedSystem);
        setSelectedShip(parseFloat(selectedSystem.getAttribute("ship-focus")))
    }
}

function balanceSystemProduction(preferredIndex = 0) {
    let totalProductionPercent = 100;
    let productionLevels = selectedSystem.getAttribute("production-levels").split(" ").map((prod) => {return parseFloat(prod)});
    let productionLocks = selectedSystem.getAttribute("production-locks").split(" ").map((lock) => {return lock != "0"});
    const processProduction = (i) => {
        productionLevels[i] = Math.min(productionLevels[i], 100);
        productionLevels[i] = Math.max(productionLevels[i], 0);

        if(totalProductionPercent - productionLevels[i] <= 0) {
            productionLevels[i] = totalProductionPercent;
            totalProductionPercent = 0;
        } else {
            totalProductionPercent -= productionLevels[i];
        }
    }
    // check locked values first so they don't change with other values.
    for (let i = 0; i < productionLevels.length; i++) {
        if (productionLocks[i] && i != preferredIndex) {
            processProduction(i)
        }
    }
    processProduction(preferredIndex);
    for (let i = 0; i < productionLevels.length; i++) {
        if (!productionLocks[i] && i != preferredIndex) {
            processProduction(i)
        }
    }
    if (totalProductionPercent > 0) {
        for (let i = productionLevels.length - 1; i >= 0; i--) {
            if(i != preferredIndex || i == 0) {
                if (!productionLocks[i]) {
                    if (productionLevels[i] + totalProductionPercent > 100) {
                        totalProductionPercent = productionLevels[i] + totalProductionPercent - 100;
                        productionLevels[i] = 100;
                    } else {
                        productionLevels[i] += totalProductionPercent;
                        totalProductionPercent = 0;
                    }
                }
            }
        }
    }
    const fixedLevels = productionLevels.join(" ");
    selectedSystem.setAttribute("production-levels", fixedLevels);
}

function systemDetailsChanged() {
    const selectedSystem = document.querySelector("rigel-starfield .selected");
    
    const icon = element.querySelector("icon");
    icon.classList.add("unlocked");
    icon.classList.remove("locked");
}
//<ship-spec shipID="0" name="Colony Ship" size="cruiser" shape="shape1" computer="0" shield="0" ecm="0" armour="0" engine="1" maneuvre="1" weapons="0 0 0" specials="0 0"></ship-spec>

function populateShipCarousel() {
    const carousel = document.querySelector("ship-carousel");
    const ship_specs = player.querySelectorAll("ship-spec");
    const ship_count = ship_specs.length;
    test = carousel;
    while(carousel.lastChild != null){
        carousel.removeChild(carousel.lastChild);
    };
    for (const spec of ship_specs) {
        let ship = document.createElement("ship");
        for (let i = 0; i < spec.attributes.length; i++) {
            const a = spec.attributes.item(i);
            ship.setAttribute(a.name, a.value);
        }
        carousel.appendChild(ship);
    }
}

function setSelectedShip(shipID) {
    const carousel = document.querySelector("ship-carousel");
    const ship_count = carousel.children.length;
    _shipID = (shipID + ship_count) % ship_count;
    carousel.setAttribute("focus", _shipID)
    carousel.scrollLeft = (carousel.scrollWidth/ship_count) * _shipID;
}
// TODO: get actor from system, then update ship productions for that actor
function updateShipProductions(system) {
    // const ships = planetDetailsPanel.querySelectorAll("ship-carousel ship");
    let ship_production = system.getAttribute("ship-production").split(" ").map((s) => {parseFloat(s)});
    for (let i = 0; i < ships.length; i++) {
        if(ship_production[i] == null) {
            ship_production[i] = 0;
        }
        ships[i].setAttribute("production", ship_production[i]);
    }
    // deal with old production
    if(ship_production.length > ships.length) {
        for (let i = ships.length; i < ship_production.length; i++) {
            system.setAttribute("surplus-production", parseFloat(system.getAttribute("surplus-production")) + ship_production[i]);
        }
        ship_production.length = ships.length;
    }
    system.setAttribute("ship-production", ship_production.join(" "));
}

function setShipProductions(system) {
    const planetDetailsPanel = document.querySelector(".planet-details");
    const ships = planetDetailsPanel.querySelectorAll("ship-carousel ship");
    let ship_production = system.getAttribute("ship-production").split(" ").map((s) => {parseFloat(s)});
    for (let i = 0; i < ships.length; i++) {
        if(ship_production[i] == null) {
            ship_production[i] = 0;
        }
        ships[i].setAttribute("production", ship_production[i]);
    }
    // deal with old production
    if(ship_production.length > ships.length) {
        for (let i = ships.length; i < ship_production.length; i++) {
            system.setAttribute("surplus-production", parseFloat(system.getAttribute("surplus-production")) + ship_production[i]);
        }
        ship_production.length = ships.length;
    }
    system.setAttribute("ship-production", ship_production.join(" "));
}

function shipDesignsUpdated() {
    // TODO: update production values for all systems
    populateShipCarousel();
    setShipProductions(selectedSystem);
    setSelectedShip(0)
}
//TODO: make star types actually distinct.
const starClassifications = [
    {colour:"yellow", habitabilityPercent: [0, 5, 10, 10, 10, 10, 10, 10, 10, 5, 5, 5, 5, 5, 5], resourcePercent:[0,2.5,2.5,5,85,5,0]}, 
    {colour:"green",  habitabilityPercent: [0, 5, 10, 10, 10, 10, 10, 10, 10, 5, 5, 5, 5, 5, 5], resourcePercent:[0,2.5,2.5,5,85,5,0]},
    {colour:"red",    habitabilityPercent: [0, 5, 10, 10, 10, 10, 10, 10, 10, 5, 5, 5, 5, 5, 5], resourcePercent:[0,2.5,2.5,5,85,5,0]},
    {colour:"blue",   habitabilityPercent: [0, 5, 10, 10, 10, 10, 10, 10, 10, 5, 5, 5, 5, 5, 5], resourcePercent:[0,2.5,2.5,5,85,5,0]},
    {colour:"white",  habitabilityPercent: [0, 5, 10, 10, 10, 10, 10, 10, 10, 5, 5, 5, 5, 5, 5], resourcePercent:[0,2.5,2.5,5,85,5,0]},
    {colour:"purple", habitabilityPercent: [0, 5, 10, 10, 10, 10, 10, 10, 10, 5, 5, 5, 5, 5, 5], resourcePercent:[0,2.5,2.5,5,85,5,0]}
];

// TODO: properly balance these values
const potentialMaxPopulation =        [250,120,115,110,105,100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15];
const starHabitability = [
    {name: "Paradise", maxPopPercent: [100,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]},
    {name: "Fertile",  maxPopPercent: [  0, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]},
    {name: "Terran",   maxPopPercent: [  0,  5,  5, 10, 15, 20, 15, 10,  5,  5,  5,2.5,2.5,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]},
    {name: "Jungle",   maxPopPercent: [  0,  5,  5, 10, 15, 20, 15, 10,  5,  5,  5,2.5,2.5,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]},
    {name: "Ocean",    maxPopPercent: [  0,  5,  5, 10, 15, 20, 15, 10,  5,  5,  5,2.5,2.5,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]},
    {name: "Arid",     maxPopPercent: [  0,  5,  5, 10, 15, 20, 15, 10,  5,  5,  5,2.5,2.5,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]},
    {name: "Steppe",   maxPopPercent: [  0,  5,  5, 10, 15, 20, 15, 10,  5,  5,  5,2.5,2.5,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]},
    {name: "Desert",   maxPopPercent: [  0,  0,2.5,2.5,  5, 10, 15, 20, 15, 10,  5,  5,  5,2.5,2.5,  0,  0,  0,  0,  0,  0,  0,  0]},
    {name: "Minimal",  maxPopPercent: [  0,  0,  0,  0,  0,  0,  0,  0,  5,  5, 10, 15, 20, 15, 10,  5,  5,  5,2.5,2.5,  0,  0,  0]},
    {name: "Barren",   maxPopPercent: [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  5,  5, 10, 15, 20, 15, 10,  5,  5,  5,2.5,1.3,1.2]},
    {name: "Tundra",   maxPopPercent: [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  5,  5, 10, 15, 20, 15, 10,  5,  5,  5,2.5,1.3,1.2]},
    {name: "Dead",     maxPopPercent: [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,2.5,  5, 10, 15, 20, 15, 10,  5,  5,7.5,2.5,2.5]},
    {name: "Inferno",  maxPopPercent: [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,2.5,  5, 10, 15, 20, 15, 10,  5,  5,7.5,2.5,2.5]},
    {name: "Toxic",    maxPopPercent: [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,2.5,  5, 10, 15, 20, 15, 10,  5,  5,7.5,2.5,2.5]},
    {name: "Radiated", maxPopPercent: [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,2.5,  5, 10, 15, 20, 15, 10,  5,  5,7.5,2.5,2.5]}
];

const starResources = [
    {name: "Rigel", productionMult: 1, researchMult: 4},
    {name: "Artefacts", productionMult: 1, researchMult: 2},
    {name: "Very Rich", productionMult: 3, researchMult: 1},
    {name: "Rich", productionMult: 2, researchMult: 1},
    {name: "Normal", productionMult: 1, researchMult: 1},
    {name: "Poor", productionMult: 1/2, researchMult: 1},
    {name: "Very Poor", productionMult: 1/3, researchMult: 1}
]

function newGame(size = 24, difficulty = "simple", opponents = 1) {
    // --- create new galaxy ---
    // margin must be >20rem from nearest system, so the planet details bar doesn't obscure any planets
    const starfield = document.querySelector("rigel-starfield");
    while(starfield.lastChild != null) 
        starfield.removeChild(starfield.lastChild)
    const gridSpacing = 15;
    const gridSize = size/5;
    const starfieldMargin = 20;
    starfield.style.width = gridSize * gridSpacing + starfieldMargin * 2 + "rem"
    starfield.style.height = gridSize * gridSpacing + starfieldMargin * 2 + "rem"
    starfield.style.left = starfieldMargin;
    starfield.style.top = starfieldMargin;
    const getResultFromPercentList = (percentList, percentage) => {
        //normalise percentList
        let listTotal = percentList.reduce((a,b) => {return a+b});
        normalisedPercentList = percentList.map((val) => {Math.floor((val/listTotal) * 100)});

        // get result
        for (let i = 0; i < normalisedPercentList.length; i++) {
            percentage -= normalisedPercentList[i];
            if(percentage <= 0)
                return i;
        }
        return percentList.length - 1;
    }
    // generate new planets
    let nameIndecies = [];
    let usedCoords = [];
    for(let i = 0; i < size; i++) {
        // get unique name
        let nameIndex = null;
        do {
            nameIndex = getRndInteger(0, systemNames.length);
        } while(nameIndecies.includes(nameIndex));
        nameIndecies.push(nameIndex);

        const star = document.createElement("rigel-starsystem");
        star.setAttribute("name", systemNames[nameIndex]);
        
        let coords = {}
        do {
            coords = {x: getRndInteger(0, gridSize), y: getRndInteger(0, gridSize)};
        } while(usedCoords.reduce((acc, usedCoord) => {
            acc |= (usedCoord.x == coords.x) && (usedCoord.y = coords.y);
        }, false));
        usedCoords.push(coords);
        star.setAttribute("x", coords.x);
        star.setAttribute("y", coords.y);
        
        star.setAttribute("fleetID", "none");
        let classification = starClassifications[getRndInteger(0, starClassifications.length)];
        star.setAttribute("classification", classification.colour);
        //TODO: weight according to classification:

        let habitability = starHabitability[getResultFromPercentList(classification.habitabilityPercent, getRndInteger(0, 101))];
        star.setAttribute("habitability", habitability.name);
        //TODO: determine based on habitability
        let maxPop = potentialMaxPopulation[getResultFromPercentList(habitability.maxPopPercent, getRndInteger(0, 101))];
        star.setAttribute("max-population", maxPop);

        let resource = starResources[getResultFromPercentList(classification.resourcePercent, getRndInteger(0, 101))];
        star.setAttribute("resource-level", resource.name);

        //fleetID="0"
        star.setAttribute("production-locks", "0 0 0 0 0");
        star.setAttribute("production-level", "20 20 20 20 20");
        
        star.setAttribute("owner", "none");
        setShipProductions(star);
        star.setAttribute("ship-focus", "0");

        star.setAttribute("fleetID", "none");

        starfield.appendChild(star);
    }
    // --- randomly choose opponents ---
    // --- set ai level ---

}

function getRndInteger(min, max) {
    // returns random number between min (included) and max (excluded)
    return Math.floor(Math.random() * (max - min) ) + min;
} 