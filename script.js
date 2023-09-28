function locoscroll(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});








// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

gsap.to("#navpart1 #svg",{
    transform: "translateY(-100%)",
    ScrollTrigger:{
        trigger:"#page1",
        scroller :"#main",
        start:"top 0",
        end:"top -5%",
        scrub: true,
        markers:true,
    }
});

function videoanim() {
    var video = document.querySelector("#video")
    var play= document.querySelector("#play")
    video.addEventListener("mouseenter",function(){
       //  play.style.opacity = 1
       //  play.style.scale = 1
       gsap.to(play,{
           scale:1,
           opacity:1,
    
       })
    })
    
    video.addEventListener("mouseleave",function(){
       gsap.to(play,{
           scale:0,
           opacity:0,
    
       })
    })
    
    video.addEventListener("mousemove",function(dets){
       gsap.to(play,{
       left:dets.x-50,
       top:dets.y-80,
        })
    })
    
    
}
function loadinganimation(){

    gsap.from(".h1 ", {
        y: 100,
        opacity: 0,
        delay: 0.2,
        duration: 0.8,
        stagger: 0.3,
      });
      gsap.from(".h12", {
        y: 100,
        // scale:0.8,
        opacity: 0,
        delay: 0.5,
        duration: 0.9,
        stagger: 0.3,
        
      });
      gsap.from(".h3", {
        y: 100,
        // scale:0.8,
        opacity: 0,
        delay: 0.9,
        duration: 1,
        stagger: 0.3,
        
      });
      gsap.from("#video", {
        y: 100,
        scale:1,
        opacity: 0,
        delay: 0.5,
        duration: 0.9,
        
      });
    

}

function cursor() {
    var vide = document.querySelector("#main")
    var pla= document.querySelector("#cursor")
    vide.addEventListener("mouseenter",function(){
       //  play.style.opacity = 1
       //  play.style.scale = 1
       gsap.to(pla,{
           scale:1,
           opacity:1,
    
       })
    })
    
    vide.addEventListener("mouseleave",function(){
       gsap.to(pla,{
           scale:0,
           opacity:0,
    
       })
    })
    
    vide.addEventListener("mousemove",function(dets){
       gsap.to(pla,{
       left:dets.x,
       top:dets.y,
        })
    })
    
    
}








locoscroll()
cursor()
videoanim()
loadinganimation()





