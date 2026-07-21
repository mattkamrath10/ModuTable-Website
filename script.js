// MODU/TABLE Website

document.addEventListener("DOMContentLoaded", () => {

    // Smooth scrolling
    document.querySelectorAll('nav a').forEach(link => {

        link.addEventListener('click', function(e){

            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));

            if(target){

                target.scrollIntoView({
                    behavior:"smooth"
                });

            }

        });

    });

    // Header background change
    const header = document.querySelector("header");

    window.addEventListener("scroll",()=>{

        if(window.scrollY>80){

            header.style.background="#000";

        }else{

            header.style.background="#111";

        }

    });

    // Collection hover effect
    document.querySelectorAll(".collection-card").forEach(card=>{

        card.addEventListener("mouseenter",()=>{

            card.style.transform="translateY(-10px)";
            card.style.transition=".3s";

        });

        card.addEventListener("mouseleave",()=>{

            card.style.transform="translateY(0px)";

        });

    });

    console.log("MODU/TABLE Website Loaded");

});