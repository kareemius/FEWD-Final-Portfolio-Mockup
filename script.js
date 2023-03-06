let hamburger = document.querySelector('.hamburger-menu');
let mobileMenu = document.querySelector('.mobile-menu');


/**
 * -- UX DESIGN EVENT LISTENERS --
 */


/* HBO UI DESIGN*/
let hboGrid = document.querySelector('.hbo-ui');
hboGrid.addEventListener("mouseover", hboUIOver, false);
hboGrid.addEventListener("mouseout", hboUIOut, false);


/* BORING ATLAS UI */
let boringAtlas = document.querySelector('.boring-ui');
boringAtlas.addEventListener("mouseover", boringAtlasOver, false);
boringAtlas.addEventListener("mouseout", boringAtlasOut, false);

/* GOLDEN POINT UI */
let goldenPoint = document.querySelector('.golden-ui');
goldenPoint.addEventListener("mouseover", goldenOver, false);
goldenPoint.addEventListener("mouseout", goldenOut, false);

/**
 * -- GRAPHIC DESIGN EVENT LISTENERS --
 */

/* GRIT CITY*/
let gritCity = document.querySelector('.grit-city');
gritCity.addEventListener("mouseover", gritOver, false);
gritCity.addEventListener("mouseout", gritOut, false);

/* BORING ATLAS UI */
let creatives = document.querySelector('.creatives');
creatives.addEventListener("mouseover", creativesOver, false);
creatives.addEventListener("mouseout", creativesOut, false);

/* GOLDEN POINT UI */
let additionalWorks = document.querySelector('.additional-work');
additionalWorks.addEventListener("mouseover", addOver, false);
additionalWorks.addEventListener("mouseout", addOut, false);


/**
 * -- MULTIMEDIA EVENT LISTENERS --
 */

/* TDKA */
let darkKnight = document.querySelector('.dark-knight');
darkKnight.addEventListener("mouseover", dkOver, false);
darkKnight.addEventListener("mouseout", dkOut, false);

/* DUCK HUNT */
let duckHunt = document.querySelector('.duck-hunt');
duckHunt.addEventListener("mouseover", duckOver, false);
duckHunt.addEventListener("mouseout", duckOut, false);

/* HBO MAX GIFS */
let hboGifs = document.querySelector('.hbo-max-collection');
hboGifs.addEventListener("mouseover", gifOver, false);
hboGifs.addEventListener("mouseout", gifOut, false);

/**
 * 
 *  -- ANIMATION EVENT LISTENERS
 */

/* NES 3D COMMERCIAL */
let nesAd = document.querySelector('.nes-ad');
nesAd.addEventListener("mouseover", nesOver, false);
nesAd.addEventListener("mouseout", nesOut, false);

/* LAKE GEORGE COMMERCIAL */
let lakeGeo = document.querySelector('.lake-george');
lakeGeo.addEventListener("mouseover", lakeOver, false);
lakeGeo.addEventListener("mouseout", lakeOut, false);

/* HBO MAX GIFS */
let tmnt = document.querySelector('.tmnt');
tmnt.addEventListener("mouseover", tmntOver, false);
tmnt.addEventListener("mouseout", tmntOut, false);

/**
 * ENTER AND EXIT FUNCTIONS - UX DESIGN
 * 
 */
/* HBO UI - MOUSE ENTER */
function hboUIOver() {
    console.log(hboGrid.firstElementChild.src);
   document.querySelector('.hbo-max-logo-ui').src = "./images/HBO_Max-Logo-White.png";
   hboGrid.classList.add('.fade-in');
   //  hboGrid.firstElementChild.src = 
}
/* HBO UI - MOUSE EXIT */
function hboUIOut() {
    console.log(hboGrid + "is no longer hovered");
    document.querySelector('.hbo-max-logo-ui').src = "./images/HBO_Max-Logo.png";
    hboGrid.classList.remove('.fade-in');
}


/* BORING ATLAS - MOUSE ENTER */
function boringAtlasOver() {
    console.log(boringAtlas.firstElementChild.src);
   document.querySelector('.boring-atlas-logo').src = "./images/Boring-Atlas Logo-highlight.png";
   boringAtlas.classList.add('.fade-in');
   //  hboGrid.firstElementChild.src = 
}
/* BORING ATLAS - MOUSE EXIT */
function boringAtlasOut() {
    console.log(boringAtlas + "is no longer hovered");
    document.querySelector('.boring-atlas-logo').src = "./images/Boring Atlas Logo.png";
    boringAtlas.classList.remove('.fade-in');
}


/* GOLDEN POINT - MOUSE ENTER */
function goldenOver() {
    console.log(goldenPoint.firstElementChild.src);
   document.querySelector('.golden-point-logo').src = "./images/Golden Point logo -color.png";
   goldenPoint.classList.add('.fade-in');
   //  hboGrid.firstElementChild.src = 
}
/* BORING ATLAS - MOUSE EXIT */
function goldenOut() {
    console.log(goldenPoint + "is no longer hovered");
    document.querySelector('.golden-point-logo').src = "./images/golden-point-logo.png";
    goldenPoint.classList.remove('.fade-in');
}

/**
 * ENTER & EXIT FUNCTIONS - GRAPHIC DESIGN
 * 
 */
/* GRIT CITY - MOUSE ENTER */
function gritOver() {
    console.log(gritCity.firstElementChild.src);
   document.querySelector('.grit-city-logo').src = "./images/grit city logo-02.png";
   gritCity.classList.add('.fade-in');
   //  hboGrid.firstElementChild.src = 
}
/* GRIT CITY - MOUSE EXIT */
function gritOut() {
    console.log(gritCity + "is no longer hovered");
    document.querySelector('.grit-city-logo').src = "./images/grit city logo.png";
    gritCity.classList.remove('.fade-in');
}

/* 3-5 CREATIVES - MOUSE ENTER */
function creativesOver() {
    console.log(creatives.firstElementChild.src);
   document.querySelector('.creatives-logo').src = "./images/3-5 logo vectors_Colored.png";
   creatives.classList.add('.fade-in');
   //  hboGrid.firstElementChild.src = 
}
/* 3-5 CREATIVES - MOUSE EXIT */
function creativesOut() {
    console.log(creatives + "is no longer hovered");
    document.querySelector('.creatives-logo').src = "./images/3-5 logo.png";
    creatives.classList.remove('.fade-in');
}

/* ADDTIONAL WORKS - MOUSE ENTER */
function addOver() {
    console.log (additionalWorks.firstElementChild.src);
    additionalWorks.style.color = "white";
    additionalWorks.classList.add('.fade-in');
}
/* ADDTIONAL WORKS - MOUSE EXIT */
function addOut() {
    console.log (additionalWorks + "is no longer hovered");
    additionalWorks.style.color = "gray";
    additionalWorks.classList.remove('.fade-in');
}

/**
 * ENTER & EXIT FUNCTIONS - MULTIMEDIA
 * 
 */

/* TDKA- MOUSE ENTER */
function dkOver() {
    console.log (darkKnight.firstElementChild.src);
    darkKnight.style.color = "white";
    darkKnight.classList.add('.fade-in');
}
/* TDKA- MOUSE EXIT */
function dkOut() {
    console.log (darkKnight + "is no longer hovered");
    darkKnight.style.color = "gray";
    darkKnight.classList.remove('.fade-in');
}


/* DUCK HUNT - MOUSE ENTER */
function duckOver() {
    console.log (duckHunt.firstElementChild.src);
    duckHunt.style.color = "white";
    duckHunt.classList.add('.fade-in');
}
/* DUCK HUNT- MOUSE EXIT */
function duckOut() {
    console.log (duckHunt + "is no longer hovered");
    duckHunt.style.color = "black";
    duckHunt.classList.remove('.fade-in');
}

/* HBO GIFS - MOUSE ENTER */
function gifOver() {
    document.querySelector('.hbo-max-logo-multimedia').src = "./images/HBO_Max-Logo-White.png";
    hboGifs.style.color = "white";
    hboGifs.classList.add('.fade-in');
}

/* HBO GIFS - MOUSE EXIT */
function gifOut() {
    document.querySelector('.hbo-max-logo-multimedia').src = "./images/HBO_Max-Logo.png";
    hboGifs.style.color = "gray";
    hboGifs.classList.remove('.fade-in');
}

/**
 * 
 * ENTER & EXIT FUNCTIONS - ANIMATION
 * 
 */
/* NES 3D  - MOUSE ENTER */
function nesOver() {
    nesAd.style.color = "white";
    nesAd.classList.add('.fade-in');
}
/* NES 3D- MOUSE EXIT */
function nesOut() {
    nesAd.style.color = "grey";
    nesAd.classList.remove('.fade-in');
}

/* lAKE GEORGE ANIMATED - MOUSE ENTER */
function lakeOver() {
    lakeGeo.style.color = "white";
    lakeGeo.classList.add('.fade-in');
}
/* LAKE GEORGE ANIMATED - MOUSE EXIT */
function lakeOut() {
    lakeGeo.style.color = "grey";
    lakeGeo.classList.remove('.fade-in');
}

/* TMNT - MOUSE ENTER */
function tmntOver() {
    tmnt.style.color = "white";
    tmnt.classList.add('.fade-in');
}
/* TMNT- MOUSE EXIT */
function tmntOut() {
    tmnt.style.color = "black";
    tmnt.classList.remove('.fade-in');
}


hamburger.addEventListener('click', function() {
    mobileMenu.classList.toggle('transformation');
    console.log(hamburger);
})

mobileMenu.addEventListener('click', function(){
    mobileMenu.classList.toggle('transformation');
})




