window.sr = ScrollReveal();

sr.reveal(".MainTitle", { duration: 1000,
    easing: "cubic-bezier(0.17, 0.67, 0.87, 0.39)",
    origin: "top",
});

sr.reveal("nav span", { duration: 500,
    delay: 1000,
    origin: "top",
}, 80);


sr.reveal(".bio-title", {
    origin: "left",
    distance: "100px",
    duration: 1500,
    reset: true,
    rotate: {z: 30},
});

sr.reveal(".bio-content", {
    origin: "left",
    duration: 1000,
    reset: true,
});

sr.reveal(".git-title", {
    origin: "right",
    duration: 2000,
    reset: true,
    rotate: {z: -50}
});

sr.reveal(".music-title", {
    origin: "left",
    duration: 2000,
    reset: true,
    rotate: {z: 50}
});

sr.reveal(".git-logo", {
    reset: true,
    duration: 1500
});

sr.reveal(".music-logo", {
    reset: true,
    duration: 1500
});

sr.reveal(".git-section p", {
    origin: "left",
    duration: 1000,
    reset: true
}, 150);

sr.reveal(".git-section-title", {
    origin: "right",
    distance: "1000px",
    duration: 1000,
    reset: true
}, 150);

sr.reveal(".music-content-title", {
    origin: "left",
    distance: "1000px",
    duration: 1000,
    reset: true
});

sr.reveal("iframe", {
    reset: true,
    duration: 1500
}, 150);