
document.addEventListener('DOMContentLoaded', (event) => {
    // Initialize the Vimeo Player
    var iframe = document.querySelector('#aboutUsVideo iframe');
    var player = new Vimeo.Player(iframe);

    // Getting the button element
    const watchReelBtn = document.getElementById('watchReelBtn');

    // Event listener for when the video starts playing
    player.on('play', function () {
        watchReelBtn.style.display = 'none';
    });

    // Event listener for when the video is paused
    player.on('pause', function () {
        watchReelBtn.style.display = 'block';
    });

    // Event listener for when the video ends
    player.on('ended', function () {
        watchReelBtn.style.display = 'block';
    });
});

// Function to handle the play/pause toggle and full screen
function togglePlayFullScreen() {
    var iframe = document.querySelector('#aboutUsVideo iframe');
    var player = new Vimeo.Player(iframe);

    player.getPaused().then(function (paused) {
        if (paused) {
            player.play();
        } else {
            player.pause();
        }
    }).catch(function (error) {
        // Handle the error
        console.log(error);
    });
}



window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    var path = window.location.pathname;
    var page = path.split("/").pop();

    // Only apply the scroll-based styling if it's not the portfolio page
    if (page !== 'portfolio.html') {
        if (window.scrollY > 50) { // Adjust the scroll distance as needed
            navbar.style.backgroundColor = '#161617'; // Solid color
        } else {
            navbar.style.backgroundColor = 'rgba(51, 51, 51, 0)'; // Transparent
        }
    } else {
        // Always solid background color for the portfolio page
        navbar.style.backgroundColor = '#161617';
    }
});


document.addEventListener("DOMContentLoaded", function () {
    // Get the modal
    var modal = document.getElementById("popupModal");

    // Get the button that opens the modal
    var btns = document.querySelectorAll(".cta-button");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    btns.forEach(btn => btn.onclick = function () {
        modal.style.display = "block";
    });

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Form submission logic
    document.getElementById("inquiryForm").onsubmit = function (event) {
        event.preventDefault();
        console.log("Name:", document.getElementById("name").value);
        console.log("Number:", document.getElementById("number").value);
        console.log("Email:", document.getElementById("email").value);
        console.log("Date:", document.getElementById("date").value);
        console.log("Message:", document.getElementById("message").value);
        // Close the modal
        modal.style.display = "none";
        // Add logic to send data to server here
    }
});
// Forces Nav bar to appear at all times in portfolio.html
document.addEventListener("DOMContentLoaded", function () {
    var path = window.location.pathname;
    var page = path.split("/").pop();
    if (page === 'portfolio.html') {
        document.body.classList.add("portfolio-page");
    }
});

// Function to check if the top or bottom part of the element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    // Check if most of the element is still visible in the viewport
    return rect.bottom > 100 && rect.top < windowHeight - 100;
}

function showStepsOnScroll() {
    const stepContainers = document.querySelectorAll('.step-container');

    stepContainers.forEach((container) => {
        if (isInViewport(container)) {
            container.classList.add('visible');
        } else {
            container.classList.remove('visible');
        }
    });
}

window.addEventListener('scroll', showStepsOnScroll);
showStepsOnScroll();

function toggleMenu() {
    var navLinks = document.querySelector('.nav-links');
    if (navLinks.style.display === "block") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "block";
    }
}
