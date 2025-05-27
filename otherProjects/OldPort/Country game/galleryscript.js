document.addEventListener("DOMContentLoaded", function() {

    // Your code that interacts with the DOM elements
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var menu = document.getElementById("myDropDown");
    let isOpen = 1;

    // Add event listener for #burgerMenue click
    document.getElementById("burgerMenue").addEventListener("click", function() {
        dropDown();
    });

    function dropDown() {
        if (isOpen === 1) {
            document.getElementById("myDropDown").style.display = 'flex';
            setTimeout(function() {
                document.getElementById("myDropDown").style.left = '0';
            }, 2);
            isOpen += 1;
        } else if (isOpen === 2) {
            document.getElementById("myDropDown").style.left = '-100%';

            setTimeout(function() {
                document.getElementById("myDropDown").style.display = 'none';
            }, 400);
            isOpen -= 1;
        }
    }

    // Select the elements
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    var gridItems = Array.from(document.getElementsByClassName("grid-item"));
    var index = 0; // Initialize the index variable

    function updateModalContent() {
        modalImg.src = gridItems[index].src;
        captionText.innerHTML = gridItems[index].alt;
    }

    gridItems.forEach((item, i) => {
        item.onclick = function() {
            index = i; // Update the index when an image is clicked
            updateModalContent();
            modal.style.display = "block";
        }
    });

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    var leftButton = document.getElementById("leftBtn");
    leftButton.onclick = function() {
        index--;
        if (index < 0) {
            index = gridItems.length - 1; // Wrap around to the last image
        }
        updateModalContent();
    }

    var rightButton = document.getElementById("rightBtn");
    rightButton.onclick = function() {
        index++;
        if (index >= gridItems.length) {
            index = 0; // Wrap around to the first image
        }
        updateModalContent();
    }

    const container = document.getElementById("grid-container");
});