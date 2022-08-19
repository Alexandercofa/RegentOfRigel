window.onload = addStarfieldListeners;

// function generateGalaxy(planetCount) {
//     let planetsGenerated = 0;
//     let generator_threshold = 0.1;
//     for (let x = 0; x < planetCount; x++) {
//         for(let y = 0; y < planetCount; y++) {
//             if(Math.random() > generator_threshold)
//         }        
//     }
// }

let starfieldOffset = {x:0,y:0};
let starfieldMargin = {left:'25px', top:'25px'}
let starfieldStepSizePx = 100;

let selectedSystem = document.querySelector("rigel-starsystem.selected");
if(selectedSystem == null) selectedSystem = document.querySelector("rigel-starsystem");

function addStarfieldListeners() {
    selectedSystem = document.querySelector("rigel-starsystem.selected");
    if(selectedSystem == null) selectedSystem = document.querySelector("rigel-starsystem");

    displayPlanetDetails();

    const starfield = document.querySelector('rigel-starfield');

    starfield.addEventListener('mousedown', (e) => {
        // offsetLeft = starfield.style.left == "" ? 0 : parseFloat(starfield.style.left);
        // offsetTop  = starfield.style.top  == "" ? 0 : parseFloat(starfield.style.top);
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
    setStarsystemOffsets();
}

function moveStarfield(e) {
    const starfield = document.querySelector('rigel-starfield');
    let offsetLeft = e.clientX - starfieldOffset.x + 'px';
    if (parseFloat(offsetLeft) > parseFloat(starfieldMargin.left))
        offsetLeft = starfieldMargin.left;
    let offsetTop = e.clientY - starfieldOffset.y + 'px';
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
    planetDetails.classList.toggle("hidden")
    planetDetails.querySelector(".toggle-details-text").classList.toggle("left-chevron");
}

function displayPlanetDetails() {
    if(selectedSystem != null) {
        const systemDetailView = document.querySelector(".planet-details");
        const name = systemDetailView.querySelector(".planet-name");
        const [image, habitability, resources, max_pop] = systemDetailView.querySelectorAll(".planet-summary>div");
        const allProduction = systemDetailView.querySelectorAll(".production>div");
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