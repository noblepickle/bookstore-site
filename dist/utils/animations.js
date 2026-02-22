"use strict";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(EasePack);
ScrollTrigger.config({ ignoreMobileResize: true });
const words = ["Read", "Reach", "Reveal"];
let masterTL = gsap.timeline({ repeat: -1 });
words.forEach(word => {
    let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });
    tl.to('.text', { duration: 1, text: word });
    masterTL.add(tl);
});
const storeSections = gsap.utils.toArray('.store__section').slice(1);
storeSections.forEach((storeSection) => {
    gsap.fromTo(storeSection, { opacity: 0, y: 100 }, {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
            trigger: storeSection,
            start: "top+=20px bottom",
            end: "bottom-=100px 80%",
            toggleActions: "play none none none",
            markers: true
        }
    });
});
