// Ensure GSAP and ScrollTrigger are loaded before this script runs

document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);


    gsap.to("#wine", {



        x: 650,
        y: 490,
        scroller: "body",
        trigger: "#wine",
        scrollTrigger: {
            trigger: ".part2",
            start: "0% 95%",
            scroller: "body",
            end: "50% 50%",
            scrub: true,
        }

    })

    gsap.to("#wine2", {
        rotate: 0,
        x:-660,
        y:1000,
        top:"120%",
        delay:5,
        duration:10,
     

      
      trigger: "#wine2",
        scrollTrigger: {
            trigger: ".part2",
            start: "60% 90%",
            scroller: "body",
            end: "180% 110%",
            scrub: true,
          
        }
    })
    
// Slowing down the first animation
gsap.to("#wine3", {
    y: 1500,
    delay:5,
    duration:10,
  

    scrollTrigger: {
      trigger: ".part1",
      scroller: "body",
      start: "70%",
      end: "150%  180%",
      scrub: 5,  // Adding delay to slow down the animation
      pin: true,
      // markers:true,
  
    }
  });
  
  gsap.to("#wine3",{
    scale:0.8,
    scrollTrigger: {
        trigger: ".part3",
        scroller: "body",
        start:"50%",
        end:"top 10%",
      
        scrub:3,
    }
  })
  
//   // Slowing down the second animation
//   gsap.to("#wine3", {
//     scrollTrigger: {
//       trigger: ".part4",
//       scroller: "body",
//       start: "0%",
//       end: "50%",
//       scrub: 2,  // Adding delay to slow down the animation
//       pin: true
//     }
//   });
  
     


})





