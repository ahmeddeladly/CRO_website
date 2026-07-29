/* =====================================================
   SELAS-VIEW
   Mechanistic Neurotechnology CRO
   script.js
===================================================== */


/* ==========================
   MOBILE NAVIGATION
========================== */

const mobileBtn = document.querySelector(".mobile-btn");
const navLinks = document.querySelector(".nav-links");


if (mobileBtn) {

    mobileBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}



/* Close mobile menu after clicking a link */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});



/* ==========================
   NAVBAR SCROLL EFFECT
========================== */

const header = document.querySelector("header");


window.addEventListener("scroll", () => {


    if (window.scrollY > 60) {

        header.classList.add("scrolled");

    }

    else {

        header.classList.remove("scrolled");

    }


});



/* ==========================
   SCROLL REVEAL ANIMATION
========================== */


const revealElements = document.querySelectorAll(
    ".section, .card, .tech, .step, .stat, .contact-box"
);



const revealObserver = new IntersectionObserver(

    entries => {


        entries.forEach(entry => {


            if(entry.isIntersecting){

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);

            }


        });


    },

    {

        threshold:0.15

    }

);



revealElements.forEach(element => {


    element.classList.add("hidden");

    revealObserver.observe(element);


});



/* ==========================
   ACTIVE NAVIGATION LINK
========================== */


const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", () => {


    let current = "";


    sections.forEach(section => {


        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.offsetHeight;


        if(
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ){

            current = section.getAttribute("id");

        }


    });



    navItems.forEach(link => {


        link.classList.remove("active");


        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }


    });


});



/* ==========================
   ANIMATED NUMBER COUNTERS
   (Ready for future metrics)
========================== */


const counters = document.querySelectorAll(".counter");


const counterObserver = new IntersectionObserver(

    entries => {


        entries.forEach(entry => {


            if(entry.isIntersecting){


                const counter = entry.target;


                const target = Number(
                    counter.dataset.target
                );


                let count = 0;


                const increment =
                    target / 100;



                const updateCounter = () => {


                    if(count < target){


                        count += increment;


                        counter.innerText =
                            Math.ceil(count);


                        requestAnimationFrame(
                            updateCounter
                        );


                    }

                    else {


                        counter.innerText = target;


                    }


                };


                updateCounter();


                counterObserver.unobserve(counter);


            }


        });


    },

    {

        threshold:0.7

    }

);



counters.forEach(counter => {


    counterObserver.observe(counter);


});



/* ==========================
   CONTACT FORM
========================== */


const form = document.querySelector("form");


if(form){


    form.addEventListener("submit", function(event){


        event.preventDefault();



        const button =
            form.querySelector("button");



        button.innerHTML =
            "Message Sent ✓";



        button.disabled = true;



        /*
        
        Later connect this to:
        
        - Formspree
        - EmailJS
        - Netlify Forms
        
        */


    });


}



/* ==========================
   PARALLAX HERO EFFECT
========================== */


const heroGraphic =
    document.querySelector(".hero-graphic");



window.addEventListener("scroll", () => {


    if(heroGraphic){


        const offset =
            window.scrollY * 0.15;


        heroGraphic.style.transform =
            `translateY(${offset}px)`;


    }


});



/* ==========================
   BACK TO TOP SUPPORT
========================== */


window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "loaded"
        );

    }
);