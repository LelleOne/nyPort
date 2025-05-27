document.addEventListener("DOMContentLoaded", function() {

    // Your code that interacts with the DOM elements
    const dropdowns = document.getElementsByClassName("dropdown-content");
    const menu = document.getElementById("myDropDown");
    let isOpen = 1;
    const scrollingDiv = document.getElementById("myDropDown");

    window.addEventListener("scroll", function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const topBar = '5vh'
        scrollingDiv.style.top = scrollTop + "px";

    });

    // Add event listener for #burgerMenue click
    document.getElementById("burgerMenue").addEventListener("click", function() {
        dropDown();
    });

    function dropDown() {
        if (isOpen === 1) {
            document.getElementById("myDropDown").style.display = 'flex';
            setTimeout(function() {
                document.getElementById("myDropDown").style.left = '0';
            }, 1);
            isOpen += 1;
        } else if (isOpen === 2) {
            document.getElementById("myDropDown").style.left = '-100%';
            isOpen += 1

            setTimeout(function() {
                document.getElementById("myDropDown").style.display = 'none';
                isOpen -= 2;
            }, 400);
            
        }
    }
});
