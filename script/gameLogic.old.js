window.onload = on_load;

let test = null;
let global_settings = null;
const gridSpacing = 10;
const starfieldMargin = 20;
let starfieldOffset = {x:0,y:0};
let starfieldEdge = {left:'5px', top:'5px'};

const systemNames = ["Absolutno", "Acamar", "Achernar", "Achird", "Acrab", "Acrux", "Acubens", "Adhafera", "Adhara", "Adhil", "Ain", "Ainalrami", "Aladfar", "Alamak", "Alasia", "Alathfar", "Albaldah", "Albali", "Albireo", "Alchiba", "Alcor", "Alcyone", "Aldebaran", "Alderamin", "Aldhanab", "Aldhibah", "Aldulfin", "Alfirk", "Algedi", "Algenib", "Algieba", "Algol", "Algorab", "Alhena", "Alioth", "Aljanah", "Alkaid", "Al Kalb al Rai", "Alkalurops", "Alkaphrah", "Alkarab", "Alkes", "Almaaz", "Almach", "Al Minliar al Asad", "Alnair", "Alnasl", "Alnilam", "Alnitak", "Alniyat", "Alphard", "Alphecca", "Alpheratz", "Alpherg", "Alrakis", "Alrescha", "Alruba", "Alsafi", "Alsciaukat", "Alsephina", "Alshain", "Alshat", "Altair", "Altais", "Alterf", "Aludra", "Alula Australis", "Alula Borealis", "Alya", "Alzirr", "Amadioha", "Amansinaya", "Anadolu", "Ancha", "Angetenar", "Aniara", "Ankaa", "Anser", "Antares", "Arcalís", "Arcturus", "Arkab Posterior", "Arkab Prior", "Arneb", "Ascella", "Asellus Australis", "Asellus Borealis", "Ashlesha", "Asellus Primus", "Asellus Secundus", "Asellus Tertius", "Aspidiske", "Asterope, Sterope", "Atakoraka", "Athebyne", "Atik", "Atlas", "Atria", "Avior", "Axólotl", "Ayeyarwady", "Azelfafage", "Azha", "Azmidi", "Baekdu", "Barnard's Star", "Baten Kaitos", "Beemim", "Beid", "Belel", "Bélénos", "Bellatrix", "Berehynia", "Betelgeuse", "Bharani", "Bibhā", "Biham", "Bosona", "Botein", "Brachium", "Bubup", "Buna", "Bunda", "Canopus", "Capella", "Caph", "Castor", "Castula", "Cebalrai", "Ceibo", "Celaeno", "Cervantes", "Chalawan", "Chamukuy", "Chaophraya", "Chara", "Chason", "Chechia", "Chertan", "Citadelle", "Citalá", "Cocibolca", "Copernicus", "Cor Caroli", "Cujam", "Cursa", "Dabih", "Dalim", "Deneb", "Deneb Algedi", "Denebola", "Diadem", "Dingolay", "Diphda", "Dìwö", "Diya", "Dofida", "Dombay", "Dschubba", "Dubhe", "Dziban", "Ebla", "Edasich", "Electra", "Elgafar", "Elkurud", "Elnath", "Eltanin", "Emiw", "Enif", "Errai", "Fafnir", "Fang", "Fawaris", "Felis", "Felixvarela", "Flegetonte", "Fomalhaut", "Formosa", "Franz", "Fulu", "Funi", "Fumalsamakah", "Furud", "Fuyue", "Gacrux", "Gakyid", "Garnet Star", "Giausar", "Gienah", "Ginan", "Gloas", "Gomeisa", "Graffias", "Grumium", "Gudja", "Gumala", "Guniibuu", "Hadar", "Haedus", "Hamal", "Hassaleh", "Hatysa", "Helvetios", "Heze", "Hoggar", "Homam", "Horna", "Hunahpú", "Hunor", "Iklil", "Illyrian", "Imai", "Intercrus", "Inquill", "Intan", "Irena", "Itonda", "Izar", "Jabbah", "Jishui", "Kaffaljidhma", "Kakkab", "Kalausi", "Kamuy", "Kang", "Karaka", "Kaus Australis", "Kaus Borealis", "Kaus Media", "Kaveh", "Kekouan", "Keid", "Khambalia", "Kitalpha", "Kochab", "Koeia", "Koit", "Kornephoros", "Kraz", "Kuma", "Kurhah", "La Superba", "Larawag", "Lerna", "Lesath", "Libertas", "Lich", "Liesma", "Lilii Borea", "Lionrock", "Lucilinburhuc", "Lusitânia", "Maasym", "Macondo", "Mago", "Mahasim", "Mahsati", "Maia", "Malmok", "Marfak", "Marfik", "Markab", "Markeb", "Márohu", "Marsic", "Matar", "Mazaalai", "Mebsuta", "Megrez", "Meissa", "Mekbuda", "Meleph", "Menkalinan", "Menkar", "Menkent", "Menkib", "Merak", "Merga", "Meridiana", "Merope", "Mesarthim", "Miaplacidus", "Mimosa", "Minchir", "Minelauva", "Mintaka", "Mira", "Mirach", "Miram", "Mirfak", "Mirzam", "Misam", "Mizar", "Moldoveanu", "Mönch", "Montuno", "Morava", "Moriah", "Mothallah", "Mouhoun", "Mpingo", "Muliphein", "Muphrid", "Muscida", "Musica", "Muspelheim", "Nahn", "Naledi", "Naos", "Nash", "Nashira", "Násti", "Natasha", "Navi", "Nekkar", "Nembus", "Nenque", "Nervia", "Nihal", "Nikawiy", "Nosaxa", "Nunki", "Nusakan", "Nushagak", "Nyamien", "Ogma", "Okab", "Paikauhale", "Parumleo", "Peacock", "Petra", "Phact", "Phecda", "Pherkad", "Phoenicia", "Piautos", "Pincoya", "Pipoltr", "Pipirima", "Pleione", "Poerava", "Polaris", "Polaris Australis", "Polis", "Pollux", "Porrima", "Praecipua", "Prima Hyadum", "Procyon", "Propus", "Proxima Centauri", "Ran", "Rapeto", "Rasalas", "Rasalgethi", "Rasalhague", "Rastaban", "Regor", "Regulus", "Revati", "Rigel", "Rigil Kentaurus", "Rosalíadecastro", "Rotanev", "Ruchbah", "Rukbat", "Sabik", "Saclateni", "Sadachbia", "Sadalbari", "Sadalmelik", "Sadalsuud", "Sadr", "Sagarmatha", "Saiph", "Salm", "Sāmaya", "Sansuna", "Sargas", "Sarin", "Sarir", "Sceptrum", "Scheat", "Schedar", "Secunda Hyadum", "Segin", "Seginus", "Sham", "Shama", "Sharjah", "Shaula", "Sheliak", "Sheratan", "Sika", "Sirius", "Situla", "Skat", "Solaris", "Spica", "Sterrennacht", "Stribor", "Sualocin", "Subra", "Suhail", "Sulafat", "Syrma", "Tabit", "Taika", "Taiyangshou", "Taiyi", "Talitha", "Tangra", "Tania Australis", "Tania Borealis", "Tapecue", "Tarazed", "Tarf", "Taygeta", "Tegmine", "Tejat", "Terebellum", "Tevel", "Thabit", "Theemin", "Thuban", "Tiaki", "Tianguan", "Tianyi", "Timir", "Tislit", "Titawin", "Tojil", "Toliman", "Tonatiuh", "Torcular", "Tuiren", "Tupã", "Tupi", "Tureis", "Ukdah", "Uklun", "Unukalhai", "Unurgunite", "Uruk", "Vega", "Veritate", "Vindemiatrix", "Wasat", "Wazn", "Wezen", "Wurren", "Xamidimura", "Xihe", "Xuange", "Yed Posterior", "Yed Prior", "Yildun", "Zaniah", "Zaurak", "Zavijava", "Zhang", "Zibal", "Zosma", "Zubenelgenubi", "Zubenelhakrabi", "Zubeneschamali"];

let selectedSystem = null;
let player = null;

let battlefieldSelectedShip = null;

function on_load() {
    selectedSystem = document.querySelector("rigel-starsystem.selected");
    if(selectedSystem == null) selectedSystem = document.querySelector("rigel-starsystem");
    player = document.querySelector("rigel-races race.player");
    global_settings = document.querySelector("rigel-global-settings");

    setStarsystemOffsets();

    addListeners()
}

function addListeners() {
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
    }, false);

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
//TODO: move to utils.js
function addBattlefieldListeners() {
    //TODO: loadFleet(fleetID)
    //TODO: handle attacks, lock opponent ships, deselect current ship when selecting self or allied ship as destinations
    const battlefield = document.querySelector("rigel-battlefield");
    const css = document.styleSheets[0].cssRules;
    let afterBattlefield = null;
    for (let i = 0; i < css.length; i++) {
        if (css[i].selectorText == "rigel-battlefield::after") {
            afterBattlefield = css[i];
        }
    }
    const style = window.getComputedStyle(document.querySelector("rigel-battlefield"));

    const getGridCoords = (e) => {
            // get coordinates in grid space
            const columnWidth = parseFloat(style.gridTemplateColumns.split(" ")[0]) + parseFloat(style.columnGap);
            const rowHeight = parseFloat(style.gridTemplateRows.split(" ")[0]) + parseFloat(style.rowGap);
            test = e;
            const x = Math.floor(e.clientX / columnWidth);
            const y = Math.floor(e.clientY / rowHeight);
            return [x, y];
    }
    // const gridCoordsToPx = (x, y) => {
    //     //get coordinates in screen space
    //     const columnGap = parseFloat(style.columnGap), rowGap = parseFloat(style.rowGap);
    //     const columnWidth = parseFloat(style.gridTemplateColumns.split(" ")[0]) + columnGap;
    //     const rowHeight = parseFloat(style.gridTemplateRows.split(" ")[0]) + rowGap;
        
    //     const _x = x * columnWidth;
    //     const _x2 = ((x+1) * columnWidth) - columnGap;
    //     const _y = y * rowHeight;
    //     const _y2 = ((y+1) * rowHeight) - rowGap;

    //     return {x_start:_x, y_start:_y, x_end: _x2, y_end: _y2, width: columnWidth, height: rowHeight};
    // }
    const generatePath = (ship, x, y) => {
        //TODO: add collision detection
        let path = [];
        let currentX = parseInt(ship.getAttribute("x"));
        let currentY = parseInt(ship.getAttribute("y"));
        path.push({dx:0, dy:0, x:currentX, y:currentY})
        while(currentX != x || currentY != y) {
            let [dx, dy] = [0, 0];
            if (currentX < x) {
                dx =  1;
            } else if (currentX > x) {
                dx = -1;
            }
            if (currentY < y) {
                dy =  1;
            } else if(currentY > y) {
                dy = -1;
            }
            currentX += dx, currentY += dy;
            path.push({dx:dx, dy:dy, x:currentX, y:currentY});
        }
        return path;
    }

    battlefield.addEventListener("click", (e) => {
        // select ship
        // console.log(e)
        let selectedShip = null;
        let lastCoords = [];
        const highlightPath = (path) => {
            //TODO: fix error going up-left from either 2, 2 or 2, 1
            let clip_path = "polygon(";
            let clip_path_end = ")";
            let path_ends = [];

            for (let i=0, j = 1; i < path.length; i++, j++) {
                // set rigel-battlefield clip-path

                // calculate the start and end corner
                let start_corner = [0, 0], end_corner = [0, 0];
                if(j < path.length){
                    if(path[j].x == 1) {
                        //to right
                        if(path[j].y == 1) {
                            //to bottom-right corner
                            // end at bottom right
                            end_corner = [1, 1];
                        } else if (path[j].y == 0) {
                            //to right side
                            //end at top right
                            end_corner = [1, 0];
                        } else if (path[j].y == -1) {
                            //to top-right corner
                            //end at top right
                            end_corner = [1, 0];
                        }
                    } else if (path[j].x == 0) {
                        //no direction
                        if(path[j].y == 1) {
                            //to bottom
                            // end at bottom left
                            end_corner = [0, 1];
                        } else if (path[j].y == 0) {
                            //to centre
                            // end at top left
                            end_corner = [0, 0];
                        } else if (path[j].y == -1) {
                            //to top
                            // end at top left
                            end_corner = [0, 0];
                        }
                    } else if (path[j].x == -1) {
                        //to left
                        if(path[j].y == 1) {
                            //to bottom-left
                            // end at bottom left
                            end_corner = [0, 1]
                        } else if (path[j].y == 0) {
                            //to left
                            // end at top left
                            end_corner = [0, 0]
                        } else if (path[j].y == -1) {
                            //to top-left
                            // end at top left
                            end_corner = [0, 0]
                        }
                    }
                }
                if(path[i].x == 1) {
                    //from left
                    if(path[i].y == 1) {
                        //from top-left corner
                        //start at top-left
                        start_corner = [0, 0];
                    } else if (path[i].y == 0) {
                        //from left side
                        //start at top-left
                        start_corner = [0, 0];
                    } else if (path[i].y == -1) {
                        //from bottom-left corner
                        //start at bottom left
                        start_corner = [0, 1];
                    }
                } else if (path[i].x == 0) {
                    //no direction
                    if(path[i].y == 1) {
                        //from top
                        // start at top left
                        start_corner = [0, 0];
                    } else if (path[i].y == 0) {
                        //from centre
                        //start at top left
                        start_corner = [0, 0];
                    } else if (path[i].y == -1) {
                        //from bottom
                        //start at bottom left
                        start_corner = [0, 1];
                    }
                } else if (path[i].x == 1) {
                    //from right
                    if(path[i].y == 1) {
                        //from top-right
                        //start at top right
                        start_corner = [1, 0];
                    } else if (path[i].y == 0) {
                        //from right
                        // start at top right
                        start_corner = [1, 0];
                    } else if (path[i].y == -1) {
                        //from bottom-right
                        //start at bottom right
                        start_corner = [1, 1];
                    }
                }

                // calculate the order all four corners should be visited
                let local_clip_path = [];
                let reverse_clip_path = [];
                if(equalArrays(start_corner, [0, 0])) {
                    if(equalArrays(end_corner, [0, 0]))
                        local_clip_path.push([0, 0], [0, 1], [1, 1], [1, 0], [0, 0]), reverse_clip_path.push([0, 0], [0, 1], [1, 1], [1, 0], [0, 0]);
                    else if(equalArrays(end_corner, [0, 1]))
                        local_clip_path.push([0, 0], [0, 1], [1, 1], [1, 0], [0, 0], [0, 1]), reverse_clip_path.push([1, 1], [1, 0], [0, 0]);
                    else if(equalArrays(end_corner, [1, 0]))
                        local_clip_path.push([0, 0], [0, 1], [1, 1], [1, 0], [0, 0], [0, 1], [1, 1], [1, 0]), reverse_clip_path.push([0, 0]);
                    else if(equalArrays(end_corner, [1, 1]))
                        local_clip_path.push([0, 0], [0, 1], [1, 1], [1, 0], [0, 0], [0, 1], [1, 1]), reverse_clip_path.push([1, 0], [0, 0]);
                } else if(equalArrays(start_corner, [0, 1])) {
                    if(equalArrays(end_corner, [0, 1]))
                        local_clip_path.push([0, 1], [1, 1], [1, 0], [0, 0], [0, 1]), reverse_clip_path.push([0, 1], [1, 1], [1, 0], [0, 0], [0, 1]);
                    else if(equalArrays(end_corner, [0, 0]))
                        local_clip_path.push([0, 1], [1, 1], [1, 0], [0, 0], [0, 1], [1, 1], [1, 0], [0, 0]), reverse_clip_path.push([0, 1]);
                    else if(equalArrays(end_corner, [1, 0]))
                        local_clip_path.push([0, 1], [1, 1], [1, 0], [0, 0], [0, 1], [1, 1], [1, 0]), reverse_clip_path.push([0, 0], [0, 1]);
                    else if(equalArrays(end_corner, [1, 1]))
                        local_clip_path.push([0, 1], [1, 1], [1, 0], [0, 0], [0, 1], [1, 1]), reverse_clip_path.push([1, 0], [0, 0], [0, 1]);
                } else if(equalArrays(start_corner, [1, 1])) {
                    if(equalArrays(end_corner, [1, 1]))
                        local_clip_path.push([1, 1], [1, 0], [0, 0], [0, 1], [1, 1]), reverse_clip_path.push([1, 1], [1, 0], [0, 0], [0, 1], [1, 1]);
                    else if(equalArrays(end_corner, [0, 0]))
                        local_clip_path.push([1, 1], [1, 0], [0, 0], [0, 1], [1, 1], [1, 0], [0, 0]), reverse_clip_path.push([0, 1], [1, 1]);
                    else if(equalArrays(end_corner, [1, 0]))
                        local_clip_path.push([1, 1], [1, 0], [0, 0], [0, 1], [1, 1], [1, 0]), reverse_clip_path.push([0, 0], [0, 1], [1, 1]);
                    else if(equalArrays(end_corner, [0, 1]))
                        local_clip_path.push([1, 1], [1, 0], [0, 0], [0, 1], [1, 1], [1, 0], [0, 0], [0, 1]), reverse_clip_path.push([1, 1]);
                } else if(equalArrays(start_corner, [1, 0])) {
                    if(equalArrays(end_corner, [1, 0]))
                        local_clip_path.push([1, 0], [0, 0], [0, 1], [1, 1], [1, 0]), reverse_clip_path.push([1, 0], [0, 0], [0, 1], [1, 1], [1, 0]);
                    else if(equalArrays(end_corner, [0, 0]))
                        local_clip_path.push([1, 0], [0, 0], [0, 1], [1, 1], [1, 0], [0, 0]), reverse_clip_path.push([0, 1], [1, 1], [1, 0]);
                    else if(equalArrays(end_corner, [0, 1]))
                        local_clip_path.push([1, 0], [0, 0], [0, 1], [1, 1], [1, 0], [0, 0], [0, 1]), reverse_clip_path.push([1, 1], [1, 0]);
                    else if(equalArrays(end_corner, [1, 1]))
                        local_clip_path.push([1, 0], [0, 0], [0, 1], [1, 1], [1, 0], [0, 0], [0, 1], [1, 1]), reverse_clip_path.push([1, 0]);
                }
                // convert local_clip_path to usable coordinates and add to the global clip_path
                const path_to_string = (acc, current) => {
                    let frToPercent = {
                        x : 100.0 / style.getPropertyValue("--grid-width"),
                        y : 100.0 / style.getPropertyValue("--grid-height") 
                    };
                    return acc + (path[i].x + current[0]) * frToPercent.x + "% " + (path[i].y + current[1]) * frToPercent.y + "%, ";
                }
                clip_path += local_clip_path.reduce(path_to_string, "");
                path_ends.push(reverse_clip_path.reduce(path_to_string, ""));
                
            }
            //add path back to start of polygon
            for (let i = path_ends.length-1; i >= 0; i--) clip_path += path_ends[i];
            //remove trailing ", "
            clip_path = clip_path.substring(0, clip_path.length-2);
            // close brackets
            clip_path += clip_path_end;

            afterBattlefield.style.clipPath = clip_path;
        }
        const highlightPathToMouse = (e) => {
            const [x, y] = getGridCoords(e);
            if(equalArrays([x, y], lastCoords))
                return;
            lastCoords = [x, y];
            //highlight path of grid cells
            const path = generatePath(selectedShip, x, y);
            highlightPath(path);
        }
        const selectDestination = (e) => {
            const [x, y] = getGridCoords(e);
            const path = generatePath(selectedShip, x, y);
            let currentStep = {x:0, y:0}
            const takeNextStep = () => {
                if(path.length > 0) {
                    const step = path.shift();
                    currentStep.x = step.x, currentStep.y = step.y;
                    console.log(step);
                    // up, left, down, right
                    // ["-top", "", "-bottom"].forEach(vertical => {
                    //     ["-left", "", "-right"].forEach(horizontal => {
                    //         selectedShip.classList.remove("move"+vertical+horizontal);
                    //     });
                    // });
                    let move = "move";
                    if(step.dy == 1) move += "-bottom";
                    if(step.dy == -1) move += "-top";
                    if(step.dx == 1) move += "-right";
                    if(step.dx == -1) move += "-left";
                    selectedShip.classList.add(move);

                    // highlightPath(path);
                }
            }
            const animationstep = (e) => {
                console.log(e, currentStep);
                // horizontal movement
                selectedShip.setAttribute("x", currentStep.x);
                // horizontal movement
                selectedShip.setAttribute("y", currentStep.y);
                // reset for next
                ["-top", "", "-bottom"].forEach(vertical => {
                    ["-left", "", "-right"].forEach(horizontal => {
                        selectedShip.classList.remove("move"+vertical+horizontal);
                    });
                });
                if(path.length > 0) {
                    takeNextStep();
                } else {
                    selectedShip.removeEventListener("animationiteration", animationstep);
                    afterBattlefield.style.clipPath = "polygon(0% 0%)";
                }
            }
            selectedShip.addEventListener("animationiteration", animationstep);
            path.shift();
            takeNextStep();
            battlefield.removeEventListener("mousemove", highlightPathToMouse);
            battlefield.removeEventListener("click", selectDestination);
        }

        if(e.target.tagName.toUpperCase() == "RIGEL-BATTLEFIELD") {
            // select destination
            battlefield.querySelectorAll(".selected").forEach((ship) => {
                ship.classList.remove("selected");
            });
        } else {
            battlefield.querySelectorAll(".selected").forEach((ship) => {
                ship.classList.remove("selected");
            });
            if(e.target.tagName.toUpperCase() == "SHIP-DISPLAY") {
                //TODO: deselect a ship.
                //TODO: attack a different ship.
                // eg: if selectedShip == null
                ship = e.target;
                ship.classList.add("selected");
                selectedShip = ship;
                battlefield.addEventListener("mousemove", highlightPathToMouse);
                battlefield.addEventListener("click", selectDestination);
            }
        }
        // select destination/display path
    });
    //populate defending-fleet, populate attacking-fleet
    populateBattleFleets(battlefield.getAttribute("defending-fleet"), battlefield.getAttribute("attacking-fleet"));
    

}
function addMenuListeners() {
    const menu = document.querySelector("rigel-menu.pause");
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
    if (parseFloat(offsetLeft) + starfield.clientWidth < game.clientWidth - parseFloat(starfieldEdge.left))
        offsetLeft = game.clientWidth - parseFloat(starfieldEdge.left) - starfield.clientWidth + "px";
    if (parseFloat(offsetLeft) > parseFloat(starfieldEdge.left))
        offsetLeft = starfieldEdge.left;

    let offsetTop = e.clientY - starfieldOffset.y + 'px';
    if (parseFloat(offsetTop) + starfield.clientHeight < game.clientHeight - parseFloat(starfieldEdge.top) - button_bar.clientHeight)
        offsetTop = game.clientHeight - parseFloat(starfieldEdge.top) - starfield.clientHeight - button_bar.clientHeight + "px";
    if (parseFloat(offsetTop) > parseFloat(starfieldEdge.top))
        offsetTop = starfieldEdge.top;
    
    starfield.style.left = offsetLeft;
    starfield.style.top  = offsetTop;
}

function setStarsystemOffsets() {
    const starfield = document.querySelector('rigel-starfield');
    const starsystems = starfield.querySelectorAll('rigel-starsystem')
    for (const starsystem of starsystems) {
        starsystem.style.left = starfieldMargin + starsystem.getAttribute('x') * gridSpacing +'rem';
        starsystem.style.top = starfieldMargin + starsystem.getAttribute('y') * gridSpacing +'rem';
    }
    starfield.style.left = -starfieldMargin + 'rem';
    starfield.style.top = -starfieldMargin + 'rem';
}

function togglePlanetDetails() {
    const planetDetails = document.querySelector(".planet-details");
    planetDetails.classList.toggle("hidden");
    planetDetails.querySelector(".toggle-details").classList.toggle("left-chevron");
}
//TODO: move to utils.js
function displayPlanetDetails() {
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

function populateShipCarousel() {
    const carousel = document.querySelector("ship-carousel");
    const ship_specs = player.querySelectorAll("ship-spec");
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
}
//TODO: move to utils.js
function setSelectedShip(shipID) {
    const carousel = document.querySelector("ship-carousel");
    const ship_count = carousel.children.length;
    _shipID = (shipID + ship_count) % ship_count;
    carousel.setAttribute("focus", _shipID)
    carousel.scrollLeft = (carousel.scrollWidth/ship_count) * _shipID;
}
//TODO: move to utils.js
// TODO: get owner from system, then update ship productions for that actor
function setShipProductions(system) {
    const owner = getActorFromID(selectedSystem.getAttribute("owner"));
    if(owner != null) {
        const planetDetailsPanel = document.querySelector(".planet-details");
        const ships = owner.querySelectorAll("ship-spec");
        let ship_production = system.getAttribute("ship-production").split(" ").map((s) => {parseFloat(s)});
        for (let i = 0; i < ships.length; i++) {
            if(ship_production[i] == null) {
                ship_production[i] = 0;
            }
            // ships[i].setAttribute("production", ship_production[i]);
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
}

//TODO: move to utils.js
function shipDesignsUpdated() {
    // TODO: update production values for all systems
    populateShipCarousel();
    const starsystems = document.querySelectorAll("rigel-starfield>rigel-starsystem");
    for (let i = 0; i < starsystems.length; i++) {
        setShipProductions(selectedSystem);
    }
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
    const gridSize = size/2;
    while(starfield.lastChild != null) 
        starfield.removeChild(starfield.lastChild)
    starfield.style.width = gridSize * gridSpacing + starfieldMargin * 2 + "rem"
    starfield.style.height = gridSize * gridSpacing + starfieldMargin * 2 + "rem"
    const getResultFromPercentList = (percentList, percentage) => {
        // //normalise percentList TODO: fix this
        // let listTotal = percentList.reduce((a,b) => {return a+b});
        // let normalisedPercentList = percentList.map((val) => {Math.floor((val/listTotal) * 100)});
        // console.log(normalisedPercentList)
        let normalisedPercentList = percentList;
        // get result
        for (let i = 0; i < normalisedPercentList.length; i++) {
            percentage -= normalisedPercentList[i];
            if(percentage < 0)
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
        } while(nameIndecies.length < systemNames.length && nameIndecies.includes(nameIndex));
        nameIndecies.push(nameIndex);

        let name = systemNames[nameIndex];
        if(nameIndex == null) {
            name = "Planet " + i;
        }
        const star = document.createElement("rigel-starsystem");
        star.setAttribute("name", name);
        
        let match = false;
        let coords = null;
        do {
            match = false;
            coords = {x: getRndInteger(0, gridSize), y: getRndInteger(0, gridSize)};
            for (let i = 0; i < usedCoords.length; i++) {
                const oldCoord = usedCoords[i];
                match |= ((oldCoord.x == coords.x) && (oldCoord.y == coords.y));
            }
        } while(match);
        usedCoords.push(coords);
        star.setAttribute("x", coords.x);
        star.setAttribute("y", coords.y);

        star.setAttribute("fleetID", "none");
        let classification = starClassifications[getRndInteger(0, starClassifications.length)];
        star.setAttribute("classification", classification.colour);

        //weight according to classification:
        let habitability = starHabitability[getResultFromPercentList(classification.habitabilityPercent, getRndInteger(0, 101))];
        star.setAttribute("habitability", habitability.name);
        //determine based on habitability
        let maxPop = potentialMaxPopulation[getResultFromPercentList(habitability.maxPopPercent, getRndInteger(0, 101))];
        star.setAttribute("max-population", maxPop);
        star.setAttribute("population", "0");

        let resource = starResources[getResultFromPercentList(classification.resourcePercent, getRndInteger(0, 101))];
        star.setAttribute("resource-level", resource.name);

        star.setAttribute("missile-bases", "0");

        //fleetID="0"
        //TODO: calculate production.
        star.setAttribute("production", "100");
        star.setAttribute("production-locks", "0 0 0 0 0");
        star.setAttribute("production-levels", "20 20 20 20 20");
        
        star.setAttribute("owner", "none");
        star.setAttribute("ship-production", "0")
        setShipProductions(star);
        
        star.setAttribute("ship-focus", "0");

        star.setAttribute("fleetID", "none");

        starfield.appendChild(star);
    }
    setStarsystemOffsets();

    selectedSystem = starfield.firstChild;
    addStarfieldListeners();

    // --- randomly choose opponents ---
    const species = document.querySelector("rigel-species")
    test = species
    // --- set ai level ---
    
}

function populateBattleFleets(defendingFleetID, attackingFleetID) {
    let processShip = (i, fleet, left) => {
        const battlefield = document.querySelector("rigel-battlefield");

        const ship = fleet.children[i];
        const shipDisplay = document.createElement("ship-display");
        //<ship-display x="0" y="0" owner="human" type="0" health="10" size="behemoth" count="10"></ship-display>
        shipDisplay.setAttribute("x", left?"0":"9");
        shipDisplay.setAttribute("y", ""+(3+((i%2)==0?Math.ceil(i/2):-Math.ceil(i/2))));
        shipDisplay.setAttribute("owner", fleet.getAttribute("owner"));
        shipDisplay.setAttribute("type", ship.getAttribute("type"));

        //TODO: calculate health
        let health = 100; 
        shipDisplay.setAttribute("health", health);
        shipDisplay.setAttribute("count", ship.getAttribute("count"));
        shipDisplay.setAttribute("size", ship.getAttribute("size"));
        shipDisplay.setAttribute("shape", ship.getAttribute("shape"));

        if(!left) shipDisplay.classList.add("right");

        battlefield.appendChild(shipDisplay);
    }

    const battlefield = document.querySelector("rigel-battlefield");

    while(battlefield.lastChild != null) battlefield.removeChild(battlefield.lastChild);
    const defendingFleet = document.querySelector("rigel-fleets>fleet[fleetID='"+defendingFleetID+"']");
    const attackingFleet = document.querySelector("rigel-fleets>fleet[fleetID='"+attackingFleetID+"']");
    const attackingFleetLeft = attackingFleet.classList.contains("player");

    for (let i = 0; i < defendingFleet.children.length; i++) {
        processShip(i, defendingFleet, !attackingFleetLeft);
    }
    for (let i = 0; i < attackingFleet.children.length; i++) {
        processShip(i, attackingFleet,  attackingFleetLeft);
    }
}

function getActorFromID(id) {
    if(parseInt(id) != NaN) {
        const actors = document.querySelectorAll("rigel-races>race");
        for (let i = 0; i < actors.length; i++) {
            const actor = actors.item(i);
            if(parseInt(actor.getAttribute("raceID")) == parseInt(id))
                return actor;
        }
    }
    return null;
}

function getRndInteger(min, max) {
    // returns random number between min (included) and max (excluded)
    return Math.floor(Math.random() * (max - min) ) + min;
} 

function equalArrays(a1, a2) {
    return (a1.length === a2.length) && a1.every((element, i) => element === a2[i]);
}