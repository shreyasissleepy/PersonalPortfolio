
document.addEventListener('mousemove', (e) => {
    var width = window.innerWidth,
        height = window.innerHeight,
        positionX = (e.clientX / width) - 0.55,
        positionY = (e.clientY / height) - 0.55;

    // Image rotation
    gsap.to(".main img", {
        rotationY: positionY * 80,
        rotationX: positionX * 80,
        ease: 'none',
    });

});