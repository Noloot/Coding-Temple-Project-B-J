let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 7000); // Change image every 2 seconds
}

document.addEventListerner("DOMContentLoader", function(){
    // Select all quantity input fields
    const quatityInputs = document.querySelectorAll(".quantity");
    const totalPriceElement = document.getElementById("total-price");

    // Function to update total price
    function updateTotal() {
        let total = 0;

        quantityInputs.forEach(input => {
            const price = parseFloat(input.previousElementSibling.querySelector(".price").dataset.price);
            const quantity = parseInt(input.value) || 0;
            total += price * quantity;
        });

        // Update total display
        totalPriceElement.textContent = total.toFixed(2);
    }
    
    // Attach event listener to all quantity inputs
    quantityInputs.forEach(input => {
        inputaddEvenListener("input", updateTotal);
    });
});