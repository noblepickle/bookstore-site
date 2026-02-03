"use strict";
const words = ["Read", "Reach", "Reveal"];
let masterTL = gsap.timeline({ repeat: -1 });
words.forEach(word => {
    let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });
    tl.to('.text', { duration: 1, text: word });
    masterTL.add(tl);
});
