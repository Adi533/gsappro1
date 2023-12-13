//gsap timeline makes it so we do not have to write gsap.to again and again and instead animates the thing one after another 
//flag='a' means the animations with same flag are done together
//repeat -1 means animating it infinitely
//stagger means one part animates thn after 2 s another animates etc
var tl=gsap.timeline({
    repeat : -1
});

tl
.to(".imagecontainer",{
    ease:Expo.easeInOut,
    width:"100%",
    stagger :2
},'a')

.to(".text h1",{
    ease:Expo.easeInOut,
    stagger :2,
    top: 0
},'a')
.to(".text h1",{
    delay : 2,
    ease:Expo.easeInOut,
    stagger :2,
    top: "-100%"
},'a')