
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
    lerp: 0.1
});

var elems = document.querySelectorAll(".elem")
var main = document.querySelector("#main")
var page2 = document.querySelector("#page2")

elems.forEach(function (ele) {
    ele.addEventListener("mouseenter", function () {
        var bgimg = ele.getAttribute("data-img")
        page2.style.backgroundImage = `url(${bgimg})`
        bgimg.style.width = "1500px"
    })
}) 