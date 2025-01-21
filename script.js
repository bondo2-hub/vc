document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const dropdownMenu = document.getElementById("dropdown-menu");
    const body = document.getElementById("body")

    hamburgerMenu.addEventListener("click", function (event) {
        event.preventDefault();
        if (dropdownMenu.style.display === "flex") {
            dropdownMenu.style.display = "none";
            body.style.overflow = "auto";
        } else {
            dropdownMenu.style.display = "flex";
            body.style.overflow = "hidden";
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const boxes = document.querySelector('.boxes');
    const leftBtn = document.querySelector('.left-btn');
    const rightBtn = document.querySelector('.right-btn');
    let boxWidth = window.innerWidth;

    leftBtn.addEventListener('click', function() {
        boxes.scrollLeft -= 335;
    });

    rightBtn.addEventListener('click', function() {
        boxes.scrollLeft += 335;
    });

    window.addEventListener('resize', function() {
        boxWidth = window.innerWidth;
    });
});
