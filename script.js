const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

function loadinganimation(){
    gsap.from("#page1 h1",{
        y:100,
        opacity:0,
        delay:0.6,
        duration:1,
        stagger:.2
    });
    
    gsap.from("#page1 .video",{
        y:100,
        opacity:0,
        delay:0.6,
        duration:1,
        stagger:.2,
        scale:0
    });
};
loadinganimation();


function videoanimation(){
    var videocon = document.querySelector(".video");
var play = document.querySelector(".play");

videocon.addEventListener("mouseenter", function(){
   gsap.to(play,{
    scale:1,
    opacity:1
   });
});

videocon.addEventListener("mouseleave", function(){
    gsap.to(play,{
     scale:0,
     opacity:0
    });
 });
 
videocon.addEventListener("mousemove", function(dets){
    gsap.to(play,{
        left:dets.x-70,
        top:dets.y-70
    });
});
}

videoanimation();


function cursoranimatin(){
    
document.addEventListener("mousemove", function(dets){
    gsap.to(".cursor",{
        top:dets.y,
        left:dets.x
    })
});

// document.querySelector("#child1").addEventListener("mouseenter", function(){
//     gsap.to(".cursor",{
//         transform: `translate(-50%, -50%) scale:1`,
//     })
// })
// document.querySelector("#child1").addEventListener("mouseleave", function(){
//     gsap.to(".cursor",{
//         transform: `translate(-50%, -50%) scale:0 `,
//     })
// })

 document.querySelectorAll(".child").forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
gsap.to(".cursor",{
    transform: "translate(-50%, -50%) scale(1)",
    opacity:1 ,
})
    });
    elem.addEventListener("mouseleave",function(){
        gsap.to(".cursor",{
            transform: "translate(-50%, -50%) scale(0)",
            opacity:0
        })
            });
});
};


cursoranimatin();


var tl = gsap.timeline({
    scrollTrigger:{
        trigger: ".page2",
        scroller: "#main",
        start: "top -2%",
        end: "top -50%",
        scrub: 2
    }
});

tl.to(".page2",{
    backgroundColor:"#000",     
    color:"#fff"
})