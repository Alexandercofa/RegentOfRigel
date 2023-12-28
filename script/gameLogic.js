const Global = Object.freeze({
    game: document.querySelector("rigel-game"),
    getSettings(ancestor = Global.game)
    {
        //TODO: recover from missing settings.
        return ancestor.querySelector("rigel-global-settings");
    },
    starfieldMargin(settings)
    {
        return parseFloat(settings.getAttribute("starfield-margin"));
    },
    starfieldEdge(settings)
    {
        return settings.getAttribute("starfield-edge").split(" ").map(parseFloat);
    },
    gridSpacing(settings)
    {
        return parseFloat(settings.getAttribute("grid-spacing"));
    },
    //TODO: make star types actually distinct.
    starClassifications: [
        {colour:"yellow", habitabilityPercent: [0, 5, 10, 10, 10, 10, 10, 10, 10, 5, 5, 5, 5, 5, 5], resourcePercent:[0,2.5,2.5,5,85,5,0]}, 
        {colour:"green",  habitabilityPercent: [0, 5, 10, 10, 10, 10, 10, 10, 10, 5, 5, 5, 5, 5, 5], resourcePercent:[0,2.5,2.5,5,85,5,0]},
        {colour:"red",    habitabilityPercent: [0, 5, 10, 10, 10, 10, 10, 10, 10, 5, 5, 5, 5, 5, 5], resourcePercent:[0,2.5,2.5,5,85,5,0]},
        {colour:"blue",   habitabilityPercent: [0, 5, 10, 10, 10, 10, 10, 10, 10, 5, 5, 5, 5, 5, 5], resourcePercent:[0,2.5,2.5,5,85,5,0]},
        {colour:"white",  habitabilityPercent: [0, 5, 10, 10, 10, 10, 10, 10, 10, 5, 5, 5, 5, 5, 5], resourcePercent:[0,2.5,2.5,5,85,5,0]},
        {colour:"purple", habitabilityPercent: [0, 5, 10, 10, 10, 10, 10, 10, 10, 5, 5, 5, 5, 5, 5], resourcePercent:[0,2.5,2.5,5,85,5,0]}
    ],

    // TODO: properly balance these values
    potentialMaxPopulation:               [250,120,115,110,105,100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15],
    starHabitability: [
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
    ],
    starResources: [
        {name: "Rigel", productionMult: 1, researchMult: 4},
        {name: "Artefacts", productionMult: 1, researchMult: 2},
        {name: "Very Rich", productionMult: 3, researchMult: 1},
        {name: "Rich", productionMult: 2, researchMult: 1},
        {name: "Normal", productionMult: 1, researchMult: 1},
        {name: "Poor", productionMult: 1/2, researchMult: 1},
        {name: "Very Poor", productionMult: 1/3, researchMult: 1}
    ],
});

const Utils = Object.freeze({
    clearClasses(element)
    {
        while(element.classList.length > 0) element.classList.remove(element.classList[0]);
    },
    clearChildren(element)
    {
        while(element.childElementCount > 0) element.removeChild(element.firstChild);
    },
    getResultFromPercentList(percentList, percentage)
    {
        // //normalise percentList TODO: fix this
        // let listTotal = percentList.reduce((a,b) => {return a+b});
        // let normalisedPercentList = percentList.map((val) => {(val/listTotal) * 100});
        // console.log(normalisedPercentList)
        let normalisedPercentList = percentList;
        // get result
        for (let i = 0; i < normalisedPercentList.length; i++) {
            percentage -= normalisedPercentList[i];
            if(percentage < 0)
                return i;
        }
        return percentList.length - 1;
    },
    getRndInteger(min, max) {
        // returns random number between min (included) and max (excluded)
        return Math.floor(Math.random() * (max - min) ) + min;
    },
    equalArrays(a1, a2) {
        return (a1.length === a2.length) && a1.every((element, i) => element === a2[i]);
    },
    identityFunction(subject)
    {
        return subject;
    },
    readListAttribute(attributeText, mapFunction=Utils.identityFunction, length=null)
    {
        let array = attributeText.split(" ").map(mapFunction);
        array = array.slice(0, length??array.length);
        //TODO: handle: 1. single value in string (repeat till length (no repeat if null)), 2. empty string, 3. null
        return array;
    },
    readListAttributeByName(element, attributeName, mapFunction=Utils.identityFunction, length=null)
    {
        return Utils.readListAttribute(element.getAttribute(attributeName), mapFunction, length)??[mapFunction("")];
    },
    readAttributeByName(element, attributeName, mapFunction=Utils.identityFunction)
    {
        return Utils.readAttributeByName(element, attributeName, mapFunction, 1)[0]??mapFunction("");
    },
})

const Game = Object.freeze({
    getGame(ancestor = document)
    {
        return ancestor.querySelector("rigel-game");
    },
    addListeners(game)
    {
        const starfield = Starfield.getStarfield(game);
        Starfield.addListeners(starfield);
        const battlefield = Battlefield.getBattlefield(game);
        Battlefield.addListeners(battlefield);
        
        Menu.addPauseListeners(Menu.getMenu("pause", game));
        Menu.addNewGameListeners(Menu.getMenu("new-game", game));
        Menu.addSaveGameListeners(Menu.getMenu("save-game", game));
        Menu.addLoadGameListeners(Menu.getMenu("load-game", game));
        Menu.addSettingsListeners(Menu.getMenu("settings", game));
        ShipDesignScreen.addListeners(ShipDesignScreen.getShipDesignScreen(game));
        FleetMenu.addListeners(FleetMenu.getFleetMenu(game));
        MapScreen.addListeners(MapScreen.getMapScreen(game));
        RacesScreen.addListeners(RacesScreen.getRacesScreen(game));
        PlanetScreen.addListeners(PlanetScreen.getPlanetScreen(game));
        TechScreen.addListeners(TechScreen.getTechScreen(game));
        ButtonBar.addListeners(ButtonBar.getButtonBar(game));
    },
    newGame(size = 24, difficulty = "simple", opponents = 1) {
        //TODO: finish reviewing this function fully.
        // --- create new galaxy ---
        // margin must be >20rem from nearest system, so the planet details bar doesn't obscure any planets
        const settings = Global.getSettings();
        const starfield = Starfield.getStarfield();
        const starfieldMargin = Starfield.getMargin(starfield);
        const gridSize = size/2;
        Utils.clearChildren(starfield);
        const gridSpacing = Global.gridSpacing(settings);
        starfield.style.width = gridSize * gridSpacing + starfieldMargin * 2 + "rem"
        starfield.style.height = gridSize * gridSpacing + starfieldMargin * 2 + "rem"
        
        // generate new planets
        let nameIndecies = [];
        let usedCoords = [];
        for(let i = 0; i < size; i++) {
            // get unique name
            let nameIndex = null;
            do {
                nameIndex = Utils.getRndInteger(0, systemNames.length);
            } while(nameIndecies.length < systemNames.length && nameIndecies.includes(nameIndex));
            nameIndecies.push(nameIndex);
    
            let name = systemNames[nameIndex];
            if(nameIndex == null) {
                name = "Planet " + i;
            }
            const star = document.createElement("rigel-starsystem");
            star.setAttribute("name", name);
            
            //TODO: a smarter system for avoiding collisions.
            let match = false;
            let coords = null;
            do {
                match = false;
                coords = {x: Utils.getRndInteger(0, gridSize), y: Utils.getRndInteger(0, gridSize)};
                for (let i = 0; i < usedCoords.length; i++) {
                    const oldCoord = usedCoords[i];
                    match |= ((oldCoord.x == coords.x) && (oldCoord.y == coords.y));
                }
            } while(match);
            usedCoords.push(coords);
            star.setAttribute("x", coords.x);
            star.setAttribute("y", coords.y);
    
            star.setAttribute("fleetID", "none");
            let classification = Global.starClassifications[Utils.getRndInteger(0, Global.starClassifications.length)];
            star.setAttribute("classification", classification.colour);
    
            //weight according to classification:
            let habitability = Global.starHabitability[Utils.getResultFromPercentList(classification.habitabilityPercent, Utils.getRndInteger(0, 101))];
            star.setAttribute("habitability", habitability.name);
            //determine based on habitability
            let maxPop = Global.potentialMaxPopulation[Utils.getResultFromPercentList(habitability.maxPopPercent, Utils.getRndInteger(0, 101))];
            star.setAttribute("max-population", maxPop);
            star.setAttribute("population", "0");
    
            let resource = Global.starResources[Utils.getResultFromPercentList(classification.resourcePercent, Utils.getRndInteger(0, 101))];
            star.setAttribute("resource-level", resource.name);
    
            star.setAttribute("missile-bases", "0");
    
            //TODO: calculate production.
            star.setAttribute("production", "100");
            star.setAttribute("production-locks", "0 0 0 0 0");
            star.setAttribute("production-levels", "20 20 20 20 20");
            
            star.setAttribute("owner", "none");
            star.setAttribute("ship-production", "0")
            //TODO: setShipProductions(star);
            
            star.setAttribute("ship-focus", "0");
    
            star.setAttribute("fleetID", "none");
    
            starfield.appendChild(star);
        }
        Starfield.setStarsystemOffsets(starfield);
    
        selectedSystem = starfield.firstChild;
        // TODO: addStarfieldListeners();
    
        // --- randomly choose opponents ---
        const species = document.querySelector("rigel-species")
        // test = species
        // --- set ai level ---
        

        //select starting positions

        
    },
});

const Tech = Object.freeze({
    getByAttribute(attributeName)
    {
        return document.querySelectorAll("rigel-technologies>tech-categories tech["+attributeName+"], sub-tech["+attributeName+"]");
    },
    getByList(techCategoryName, techIndecies)
    {
        const techCategory = document.querySelector("rigel-technologies>tech-category[name=" + techCategoryName + "]");
        if(techIndecies.length > techCategory.children.length)
        {
            console.error("techIndecies has more elements than there are technologies in the " + techCategoryName + " tech category");
        }
        for(let i = 0; i < techIndecies.length; i++)
        {
            techCategory.children[parseInt(techIndecies[i])]
        }
    },
    filterByAttribute(techArray, attributeName)
    {
        return techArray.filter(techElement => techElement.hasAttribute(attributeName))
    },
    getAllCategories()
    {
        return document.querySelectorAll("rigel-technologies>tech-category")
    }
});

const Race = Object.freeze({
    getRace(raceID)
    {
        return document.querySelector("rigel-races race[raceID='" + raceID + "']");
    },
    getPlayer()
    {
        return document.querySelector("rigel-races race.player");
    },
    isPlayer(raceID)
    {
        return document.querySelector("rigel-races race.player").getAttribute("raceID") === raceID; 
    },
    hasUnlockedTech(race, techCategoryName, techID)
    {
        return race.querySelector("tech-tree research-category[name=" + techCategoryName + "]").getAttribute("unlocked").split(" ").includes(techID);
    },
    getUnlockedTech(race)
    {
        const categories = Tech.getAllCategories();
        let output = [];
        categories.forEach((category) => {
            let category_object = {name:category.getAttribute("name"), tech:[]};
            const unlocked = race.querySelector("research-category[name=" + category_object.name + "]").split(" ").map(parseInt);
            let j = 0;
            for(let i = 0; i < unlocked.length; i++)
            {
                category_object.tech[i] = category.children[i];
            }
            output.push(category_object);
        });
        return output;
    },
    highestUnlockedTech(race, techAttributeName)
    {
        //TODO:
        const allTech = Race.getUnlockedTech(race)
        let output;
        for (const i in allTech) 
        {
            const category = allTech[i];
            output = Tech.filterByAttribute(category.tech, techAttributeName).filter((tech1, tech2) => parseFloat(tech1.getAttribute(techAttributeName)) > parseFloat(tech2.getAttribute(techAttributeName))? tech1: tech2);
        }
        return output;
    },
    allUnlockedTechWithAttribute(race, techAttributeName)
    {
        //TODO:
        const allTech = Race.getUnlockedTech(race)
        let output = [];
        for (const i in allTech)
        {
            const category = allTech[i];
            output.concat(Tech.filterByAttribute(category.tech, techAttributeName))
        }
        return output;
    },
});

const Ship = Object.freeze({
    getShipDesign(ownerID, designID)
    {
        return document.querySelector("rigel-races race[raceID='" + ownerID + "'] ship-spec[shipID='" + designID + "']");
    },
    getFleet(fleedID)
    {
        return document.querySelector("rigel-fleets fleet[fleetID='" + fleedID + "']");
    },
    getShip(fleet, shipID)
    {
        return fleet.querySelector("ship[shipID='" + shipID + "']");
    },
    enumerateSize(size)
    {
        switch (size) {
            case "fighter":
                return 1/36;
            case "frigate":
                return 1/6;
            case "cruiser":
                return 1;
            case "behemoth":
                return 6;
            default:
                return 0;
        }
    },
    genBattlefieldStats(ownerID, fleetShip, battlefieldShip, right, shipIndex)
    {
        // This function should be called at the start of battle only.
        const x = right? Ship.getGridWidth() - 1: 0;
        //alternate ships appearing above and below the midpoint of the map.
        const y = shipIndex%2 == 0? (Ship.getGridHeight() + i)/2: (Ship.getGridHeight() - (i+1))/2;
        const owner = Race.getRace(ownerID);
        const design = Ship.getShipDesign(owner, fleetShip.getAttribute("shipID"));
        const count = fleetShip.getAttribute("count");
        const size = design.getAttribute("size")
        const shape = design.getAttribute("shape")
        battlefieldShip.setAttribute("size", size);
        battlefieldShip.setAttribute("shape", shape);
        battlefieldShip.setAttribute("count", count);
        Utils.clearClasses(battlefieldShip);
        battlefieldShip.classList.add(right?"right":"left");
        battlefieldShip.setAttribute("owner", owner.getAttribute("raceName"));
        battlefieldShip.setAttribute("shipID", fleetShip.getAttribute("shipID"));
        battlefieldShip.setAttribute("damage", "0");
        const allArmour = Tech.getByAttribute("armour-plating");
        const armour = allArmour.item(parseInt(battlefieldShip.getAttribute("armour")));
        const sizeMult = Ship.enumerateSize(size);
        battlefieldShip.setAttribute("max-health", Math.ceil(parseInt(armour.getAttribute("armour-base")) * sizeMult));
    },
    addDamage(fleetID, shipDisplay, damage, spillover = false, streaming = false)
    {
        // if a weapon has both normal (or spillover) damage and streaming damage, they should be handled with seperate calls to this function.
        let (oldDamage, streamDamage) = getDamage(shipDisplay);
        let newDamage = oldDamage + damage;
        let maxHealth = shipDisplay.getAttribute("max-health");

        //remember that damage can track more than one ship in the stack
        // damage has two values:
        //  the first stores damage for the first ship, 
        //  the second stores 'streamed' damage, which deals damage to all the ships in a stack.
        if(spillover)
        {
            newDamage -= streamDamage;
            maxHealth -= streamDamage;
            const destroyedCount = newDamage/maxHealth;
            newDamage /= maxHealth;
            Ship.setShipsDestroyed(fleetID, shipDisplay.getAttribute("shipID"), destroyedCount)
            shipDisplay.setAttribute("damage", newDamage + streamDamage)
            //TODO: handle destruction of ship stack.
        }
        else if(streaming)
        {
            streamDamage += damage;
            if(streamDamage >= maxHealth)
            {
                //TODO: handle destruction of ship stack.
            }
            else if(streamDamage + oldDamage > maxHealth)
            {
                //TODO: handle destruction of first ship.
            }
        }
        else
        {
            const destroyed = (newDamage/maxHealth) >= 1;
            newDamage %= maxHealth;
            if(destroyed)
            {
                //TODO: handle destruction of first ship.
                shipDisplay.setAttribute("damage", newDamage + " " + streamDamage);

            } 
        }
        
    },
    getDamage(shipDisplay)
    {
        // damage has two values:
        //  the first stores damage for the first ship, 
        //  the second stores 'streamed' damage, which deals damage to all the ships in a stack.
        const [primaryDamage, streamedDamage] = (shipDisplay.getAttribute("damage")??"").trim().concat(" 0").split(" ").map(str => parseFloat(str)).map(int => isNaN(int)? 0: int).map(arr => {arr.length = 2; return arr});
        return (primaryDamage, streamedDamage);
    },
    setDamage(shipDisplay, damage = [0,0])
    {
        shipDisplay.setAttribute("damage", damage.slice(0,2).join(" "));
    },
    setShipsDestroyed(fleetID, shipID, destroyedCount) 
    {
        let fleet = Ship.getFleet(fleetID);
        let ship = Ship.getShip(fleet, shipID);
        let count = parseInt(ship.getAttribute("count"));
        count = Math.max(count - destroyedCount, 0);
        ship.setAttribute("count", count);
        if(count === 0)
        {
            // remove ship from fleet
            fleet.removeChild(ship);
        }
    },
});

const Battlefield = Object.freeze({
    getBattlefield(ancestor = Global.game) 
    {
        return ancestor.querySelector("rigel-battlefield");
    },
    populateFleets(battlefield, defendingFleetID, invadingFleetID) 
    {
        const defendingFleet = Fleet.getFleet(defendingFleetID);
        const invadingFleet = Fleet.getFleet(invadingFleetID);
        const invadersArePlayer = Race.isPlayer(invadingFleet.getAttribute("owner"));
        test = [defendingFleet, invadingFleet];
        //TODO: generate ship-displays to match the size of the fleets.
        const maxShipCount = 2 * Battlefield.getGridHeight(battlefield);
        // replace deleted ship-displays
        let shipDisplays = battlefield.querySelectorAll("ship-display");
        for (let i = shipDisplays.length; i < maxShipCount; i++)
        {
            const shipDisplay = element.createElement("ship-display");
            battlefield.appendChild(shipDisplay);
        }
        shipDisplays = battlefield.querySelectorAll("ship-display");
        let j = 0;
        for (let i = 0; i < defendingFleet.children.length; i++, j++)
        {
            const ship = defendingFleet.children[i];
            const shipDisplay = shipDisplays[j];
            Ship.genBattlefieldStats(defendingFleet.getAttribute("owner"), ship, shipDisplay, invadersArePlayer, i);
        }
        for (let i = 0; i < invadingFleet.children.length; i++, j++)
        {
            const ship = defendingFleet.children[i];
            const shipDisplay = shipDisplays[j];
            Ship.genBattlefieldStats(defendingFleet.getAttribute("owner"), ship, shipDisplay, !invadersArePlayer, i);

        }
    },
    getGridHeight(battlefield)
    {
        return parseInt(battlefield.getAttribute("grid-height"));
    },
    getGridWidth(battlefield)
    {
        return parseInt(battlefield.getAttribute("grid-width"));
    },
    addListeners(ancestor = Global.game)
    {
        //TODO:
    },
});

const Starfield = Object.freeze({
    getStarfield(ancestor = Global.game)
    {
        //TODO: recover from missing starfield
        return ancestor.querySelector("rigel-starfield");
    },
    getMargin(starfield)
    {
        return parseFloat(starfield.getAttribute("margin"));
    },
    setOffset(starfield, e)
    {
        // starfield.setAttribute("offsetX", e.clientX - starfield.getAttribute("offsetX"));
        // starfield.setAttribute("offsetY", e.clientY - starfield.getAttribute("offsetY"));
        starfield.setAttribute("offsetX", e.clientX - starfield.offsetLeft);
        starfield.setAttribute("offsetY", e.clientY - starfield.offsetTop);
    },
    getOffset(starfield)
    {
        return {x:starfield.getAttribute("offsetX"), y:starfield.getAttribute("offsetY")};
    },
    getEdge(starfield)
    {
        return starfield.getAttribute("edge").split(" ").map(parseFloat)??Global.starfieldEdges(Global.getSettings());
    },
    setStarsystemOffsets(starfield)
    {
        // TODO: restructure Starfield into grid
        const starsystems = starfield.querySelectorAll('rigel-starsystem')
        const starfieldMargin = Starfield.getMargin(starfield);
        for (const starsystem of starsystems) {
            Starsystem.setOffset(starfield, starsystem);
        }
        starfield.style.left = -starfieldMargin + 'rem';
        starfield.style.top = -starfieldMargin + 'rem';
    },
    getPlanetDetails(ancestor = Global.game)
    {
        return ancestor.querySelector(".planet-details");
    },
    togglePlanetDetails(e, planetDetails = Starfield.getPlanetDetails())
    {
        planetDetails.classList.toggle("hidden");
        planetDetails.querySelector(".toggle-details").classList.toggle("left-chevron");
    },
    move(event)
    {
        const game = Global.game;
        const starfield = Starfield.getStarfield();
        const button_bar = ButtonBar.getButtonBar();
        const starfieldEdge = Starfield.getEdge(starfield);
        const starfieldOffset =  Starfield.getOffset(starfield);
        let offsetLeft = event.clientX - starfieldOffset.x + 'px';

        if (parseFloat(offsetLeft) + starfield.clientWidth < game.clientWidth - parseFloat(starfieldEdge[0]))
            offsetLeft = game.clientWidth - parseFloat(starfieldEdge[0]) - starfield.clientWidth + "px";
        if (parseFloat(offsetLeft) > parseFloat(starfieldEdge[0]))
            offsetLeft = starfieldEdge[0] + "px";
        
        let offsetTop = event.clientY - starfieldOffset.y + 'px';
        if (parseFloat(offsetTop) + starfield.clientHeight < game.clientHeight - parseFloat(starfieldEdge[1]) - button_bar.clientHeight)
            offsetTop = game.clientHeight - parseFloat(starfieldEdge[1]) - starfield.clientHeight - button_bar.clientHeight + "px";
        if (parseFloat(offsetTop) > parseFloat(starfieldEdge[1]))
            offsetTop = starfieldEdge[1] + "px";
        
        starfield.style.left = offsetLeft;
        starfield.style.top  = offsetTop;
    },
    mouseDown(e) 
    {
        Starfield.setOffset(starfield, e);
        window.addEventListener('mousemove', Starfield.move, true);
    },
    mouseUp(e) 
    {
        window.removeEventListener('mousemove', Starfield.move, true);
    },
    displayPlanetDetails(starsystem, planetDetails = Starfield.getPlanetDetails())
    {
        //TODO: fix me!
        if(selectedSystem != null) {
            const planetDetailsPanel = document.querySelector(".planet-details");
            const name = planetDetailsPanel.querySelector(".planet-name");
            const [image, habitability, resources, max_pop] = planetDetailsPanel.querySelectorAll(".planet-summary>*");
            const [population, bases, production] = planetDetailsPanel.querySelectorAll(".planet-resources>*");
            const allProduction = planetDetailsPanel.querySelectorAll(".production>div");
            name.innerHTML = selectedSystem.getAttribute("name");
            console.log(population, bases, production);
            //TODO: set star icon colour.
            //TODO: select planet image.
    
            habitability.querySelector(".habitability").innerHTML = selectedSystem.getAttribute("habitability");
            resources.querySelector(".resource-level").innerHTML = selectedSystem.getAttribute("resource-level");
            max_pop.querySelector(".max-population").innerHTML = selectedSystem.getAttribute("max-population");
    
            population.querySelector(".population-value").innerHTML = selectedSystem.getAttribute("population");
            bases.querySelector(".missile-bases-value").innerHTML = selectedSystem.getAttribute("missile-bases");
            //TODO: calculate effective production.
            production.querySelector(".production-effective-value").innerHTML = selectedSystem.getAttribute("production");
            production.querySelector(".production-true-value").innerHTML = selectedSystem.getAttribute("production");
    
            //production locks and production levels
            let productionLocks = selectedSystem.getAttribute("production-locks").split(" ").map((lock) => {return lock != "0"});
    
            balanceSystemProduction()
            let productionLevels = selectedSystem.getAttribute("production-levels").split(" ").map((prod) => {return parseFloat(prod)});
            //TODO: set the 'per year' values.
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
    },
    addListeners(starfield)
    {
        // TODO: finish modifying this function. 
        // TODO: Move the listener functions into named functions.
        // Starsystem.displayDetails()
        starfield.addEventListener('mousedown', Starfield.mouseDown);
        window.addEventListener('mouseup', Starfield.mouseUp, false);

        const planetDetails = Starfield.getPlanetDetails();
        planetDetails.querySelector(".toggle-details").addEventListener("click", Starfield.togglePlanetDetails, true);
        
        const starsystems = Starsystem.getSystems();
        for (const starsystem of starsystems) {
            Starsystem.addListeners(starsystem);
        }

        // // details panel listeners
        // const planetDetailsPanel = document.querySelector(".planet-details");
        // const resources = planetDetailsPanel.querySelector(".planet-resources");
        // const production = resources.querySelector(".production").querySelectorAll("div");

        // for (let i = 0; i < production.length; i++) {
        //     // locking/unlocking resources
        //     production[i].querySelector("label").addEventListener("click", (e) => {
        //         let productionLocks = selectedSystem.getAttribute("production-locks").split(" ").map((lock) => {return lock != "0"});
        //         productionLocks[i] = !productionLocks[i];
        //         const finalLocks  = productionLocks.map((lock) => {return lock?"1":"0"}).join(" ");
        //         selectedSystem.setAttribute("production-locks", finalLocks);
        //         displayPlanetDetails();
        //     });
        //     // modifying resources
        //     production[i].querySelector("input").addEventListener("input", (e) => {
        //         let productionLevels = selectedSystem.getAttribute("production-levels").split(" ").map((prod) => {return parseFloat(prod)});
        //         productionLevels[i] = parseFloat(production[i].querySelector("input").value);
        //         selectedSystem.setAttribute("production-levels", productionLevels.join(" "));
        //         balanceSystemProduction(i);
        //         displayPlanetDetails();
        //     });
        // }   
        // // choosing ship to be produced.
        // const shipCarousel = planetDetailsPanel.querySelector("ship-carousel");
        // shipCarousel.addEventListener("click", (e) => {
        //     if(e.layerX >= shipCarousel.offsetWidth/2) {
        //         setSelectedShip(parseFloat(shipCarousel.getAttribute("focus")) + 1);
        //     } else {
        //         setSelectedShip(parseFloat(shipCarousel.getAttribute("focus")) - 1);
        //     }
        // });

    }
});

const Starsystem = Object.freeze({
    getSystems(ancestor = Global.game)
    {
        return ancestor.querySelectorAll("rigel-starfield rigel-starsystem");
    },
    setOffset(starfield, starsystem)
    {
        const margin = Starfield.getMargin(starfield);
        const gridSpacing = Global.gridSpacing(Global.getSettings());
        starsystem.style.left = margin + starsystem.getAttribute('x') * gridSpacing +'rem';
        starsystem.style.top = margin + starsystem.getAttribute('y') * gridSpacing +'rem';
    },
    displayDetails(detailsPanel, starsystem)
    {
        const name = detailsPanel.querySelector(".planet-name");
        const [image, habitability, resources, max_pop] = detailsPanel.querySelectorAll(".planet-summary>*");
        const [population, bases, production] = detailsPanel.querySelectorAll(".planet-resources>*");
        const allProduction = detailsPanel.querySelectorAll(".production>div");
        name.innerHTML = starsystem.getAttribute("name");
        //TODO: set star icon colour.
        //TODO: select planet image.

        habitability.querySelector(".habitability").innerHTML = starsystem.getAttribute("habitability");
        resources.querySelector(".resource-level").innerHTML = starsystem.getAttribute("resource-level");
        max_pop.querySelector(".max-population").innerHTML = starsystem.getAttribute("max-population");

        population.querySelector(".population-value").innerHTML = starsystem.getAttribute("population");
        bases.querySelector(".missile-bases-value").innerHTML = starsystem.getAttribute("missile-bases");
        //TODO: calculate effective production.
        production.querySelector(".production-effective-value").innerHTML = starsystem.getAttribute("production");
        production.querySelector(".production-true-value").innerHTML = starsystem.getAttribute("production");

        //production locks and production levels
        let productionLocks = starsystem.getAttribute("production-locks").split(" ").map((lock) => {return lock != "0"});

        Starsystem.balanceProduction(starsystem);
        let productionLevels = starsystem.getAttribute("production-levels").split(" ").map((prod) => {return parseFloat(prod)});
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
        Starsystem.populateShipCarousel(detailsPanel, starsystem);
        // TODO: 
        // setShipProductions(starsystem);
        // setSelectedShip(parseFloat(starsystem.getAttribute("ship-focus")))
    },
    balanceProduction(starsystem, preferredIndex = 0)
    {
        let totalProductionPercent = 100;
        let productionLevels = starsystem.getAttribute("production-levels").split(" ").map((prod) => {return parseFloat(prod)});
        let productionLocks = starsystem.getAttribute("production-locks").split(" ").map((lock) => {return lock != "0"});
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
        starsystem.setAttribute("production-levels", fixedLevels);
    },
    populateShipCarousel(detailsPanel, starsystem)
    {
        const owner = Race.getRace(starsystem.getAttribute("owner"));
        const carousel = detailsPanel.querySelector("ship-carousel");
        const ship_specs = owner.querySelectorAll("ship-spec");
        const ship_count = ship_specs.length;
    
        while(carousel.lastChild != null) {
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
    },
    getSelectedStar(ancestor = Global.game)
    {
        return ancestor.querySelector("rigel-starfield rigel-starsystem.selected")
    },
    onClick(e, starfield = Starfield.getStarfield()) {
        const starsystem = e.target;
        if(starsystem.classList.contains('selected')) {
            // starsystem.classList.remove('selected');
        } else {
            starfield.querySelectorAll("rigel-starsystem.selected").forEach((element) => element.classList.remove('selected'));
            starsystem.classList.add('selected');
            selectedSystem = starsystem;
        }
        Starfield.displayPlanetDetails(starsystem);
    },
    addListeners(starsystem)
    {
        starsystem.addEventListener('click', Starsystem.onClick);
    }
});

const Menu = Object.freeze({
    getMenu(type = "pause", ancestor = Global.game)
    {
        return ancestor.querySelector("rigel-menu." + type);
    },
    addPauseListeners(menu)
    {
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
    },
    addNewGameListeners(menu)
    {

    },
    addSaveGameListeners(menu)
    {

    },
    addLoadGameListeners(menu)
    {

    },
    addSettingsListeners(menu)
    {

    },
});

const ShipDesignScreen = Object.freeze({
    getShipDesignScreen(ancestor = Global.game)
    {
        return ancestor.querySelector("ship-design-screen");
    },
    addListeners(shipDesignScreen)
    {

    },
});

const FleetMenu = Object.freeze({
    getFleetMenu(ancestor = Global.game)
    {
        return ancestor.querySelector("rigel-fleet-menu");
    },
    addListeners(fleetMenu)
    {
        //TODO:
    },
});

const MapScreen = Object.freeze({
    getMapScreen(ancestor = Global.game)
    {
        return ancestor.querySelector("rigel-map-screen");
    },
    addListeners(mapScreen)
    {
        //TODO:
    },
});

const RacesScreen = Object.freeze({
    getRacesScreen(ancestor = Global.game)
    {
        return ancestor.querySelector("rigel-races-screen");
    },
    addListeners(racesScreen)
    {
        //TODO:
    },
});

const PlanetScreen = Object.freeze({
    getPlanetScreen(ancestor = Global.game)
    {
        return ancestor.querySelector("rigel-planet-screen");
    },
    addListeners(planetScreen)
    {
        //TODO:
    },
});

const TechScreen = Object.freeze({
    getTechScreen(ancestor = Global.game)
    {
        return ancestor.querySelector("rigel-tech-screen");
    },
    addListeners(techScreen)
    {
        //TODO:
    },
});

const ButtonBar = Object.freeze({
    getButtonBar(ancestor = Global.game)
    {
        return ancestor.querySelector("button-bar");
    },
    addListeners(buttonBar)
    {
        //TODO:
    },
});

window.onload = Game.addListeners();
