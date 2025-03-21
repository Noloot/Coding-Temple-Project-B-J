let slideIndex = 0; // Start at first slide

window.onload = function () { 
    showSlidesAuto(); // Start automatic slideshow after the page loads
};

// Function to move to the next/previous slide
function plusSlides(n) {
    showSlidesManual(slideIndex + n);
}

// Function to jump to a specific slide
function currentSlide(n) {
    showSlidesManual(n);
}

// Manual Slide Show (Triggered by user clicks)
function showSlidesManual(n) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1; }
    else if (n < 1) { slideIndex = slides.length; }
    else { slideIndex = n; }  // Set slideIndex correctly

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Automatic Slide Show (Every 7 seconds)
function showSlidesAuto() {
    let slides = document.getElementsByClassName("mySlides");
    if (slides.length === 0) return; // Prevent error if no slides exist

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }

    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlidesAuto, 7000); // Change image every 7 seconds
}


document.addEventListener("DOMContentLoaded", function () {
    // Select all quantity input fields
    const quantityInputs = document.querySelectorAll(".quantity");
    const totalPriceElement = document.getElementById("total-price");

    // Function to update total price
    function updateTotal() {
        let total = 0;

        quantityInputs.forEach(input => {

            const priceElement = input.closest(".fade-middle").querySelector(".price");
            const price = parseFloat(priceElement.dataset.price);
            const quantity = parseInt(input.value) || 0;

            if (!isNaN(price)){
                total += price * quantity;
            }
        });

        // Update total display
        totalPriceElement.textContent = total.toFixed(2);
    }

    // Attach event listener to all quantity inputs
    quantityInputs.forEach(input => {
        input.addEventListener("input", updateTotal);
    });
});