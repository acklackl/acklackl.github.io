window.sr = ScrollReveal();

//width of current screen
let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

//function to remove an element
let remove = (id) => {
    let elem = document.getElementById(id);
    return elem.parentNode.removeChild(elem);
};

//function that reveals music logo, main title, and nav if width is greater than 700. else, music logo is removed
//and visibility for MainTitle and nav span are set to hidden
let reveal = () => {
    if (width > 700) {
        sr.reveal(".music-logo", {
            duration: 1500,
            mobile: false
        });

        sr.reveal(".MainTitle", {
            duration: 1000,
            easing: "cubic-bezier(0.17, 0.67, 0.87, 0.39)",
            origin: "top",
            mobile: false
        });

        sr.reveal("nav span", {
            duration: 500,
            delay: 1000,
            origin: "top",
            mobile: false
        }, 80);
    }

    else {
        remove("music-logo");
        //doesn't work
        //document.getElementsByClassName("MainTitle").style.visibility = "hidden";
    }
};

window.addEventListener('resize', event => {
    width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    reveal();
});

sr.reveal(".bio-title", {
    origin: "left",
    distance: "100px",
    duration: 1500,
    rotate: {z: 30},
    reset: true
});

sr.reveal(".bio-content", {
    origin: "left",
    duration: 1000,
    mobile: false
});

sr.reveal(".git-title", {
    origin: "right",
    duration: 2000,
    rotate: {z: -50},
    reset: true
});

sr.reveal(".music-title", {
    origin: "left",
    duration: 2000,
    rotate: {z: 50},
    reset: true
});

sr.reveal(".git-logo", {
    duration: 1500,
    mobile: false
});

reveal();

sr.reveal(".git-section p", {
    origin: "left",
    duration: 1000,
    mobile: false
}, 150);

sr.reveal(".git-section-title", {
    origin: "right",
    distance: "1000px",
    duration: 1000,
    mobile: false
}, 150);

sr.reveal(".music-content-title", {
    origin: "left",
    distance: "1000px",
    duration: 1000,
    mobile: false
});

sr.reveal("iframe", {
    duration: 1500,
    mobile: false
}, 150);