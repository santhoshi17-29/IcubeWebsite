tsParticles.load("tsparticles", {
    fpsLimit: 60,
    background: {
        color: "transparent"
    },
    particles: {
        number: {
            value: 100,  // Increased number of particles
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#ffffff"  // White particles
        },
        shape: {
            type: "circle"
        },
        opacity: {
            value: 0.7,  // Increased opacity
            random: false
        },
        size: {
            value: 4,  // Larger particle size
            random: true
        },
        line_linked: {
            enable: true,
            distance: 120,  // Reduced distance for more connections
            color: "#ffffff",  // White lines
            opacity: 0.6,  // Increased line opacity
            width: 1.5
        },
        move: {
            enable: true,
            speed: 2,  // Increased speed
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "grab"
            },
            onclick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 200,
                line_linked: {
                    opacity: 1
                }
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});