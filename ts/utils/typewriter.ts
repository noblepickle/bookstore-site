declare const gsap: any;
declare const ScrollTrigger: any;

gsap.registerPlugin(ScrollTrigger);

const words : string[] = ["Read", "Reach", "Reveal"];

let masterTL = gsap.timeline({repeat: -1});

words.forEach(word => {
    let tl = gsap.timeline({repeat: 1, yoyo: true, repeatDelay: 1});
    tl.to('.text', {duration: 1, text: word});
    masterTL.add(tl);
});

const storeSections: any = gsap.utils.toArray('.store__section');

storeSections.forEach((storeSection: any) => {

    gsap.to(storeSection, {
        scrollTrigger: {
            trigger: storeSection,
            start: "top+=20px bottom"
            //markers: true
        },
        opacity: 1,
        y: -100,
        duration: 1,
        easing: "easeInCubic",

    });
});



