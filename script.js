const scroll = new LocomotiveScroll({
    el: document.querySelector('main'),
    smooth: true
})

const loadAnim = () => {
    var tl = gsap.timeline();

    tl.to(".page1", {
        y: "100vh",
        scale: 0.5,
        duration: 0
    })

    tl.to(".page1", {
        y: "0vh",
        duration: 1
    })
    tl.to(".page1", {
        y: "0vh",
        duration: 0.8,
        scale: 0.6,
        delay: 0.5
    })
    tl.to(".page1", {
        y: "0vh",
        rotate: 360,
        scale: 1,
        duration: 1,
        ease: "power3.in",
    })
}

function mediaQuery() {
    if (window.innerWidth > 600) {
        loadAnim()
    }
}


window.addEventListener('load', mediaQuery);
window.addEventListener('resize', mediaQuery);