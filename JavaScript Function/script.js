// Slideshow 

let slideIndex = 0;
let slides, dots;
let slideInterval;

document.addEventListener("DOMContentLoaded", function () {
    slides = document.querySelectorAll(".mySlides");
    dots = document.querySelectorAll(".dot");
    showSlides();
});

function showSlides() {
    if (!slides || slides.length === 0) return; // Ensure slides exist

    slides.forEach(slide => slide.style.display = "none");
    dots.forEach(dot => dot.classList.remove("active"));

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");

    slideInterval = setTimeout(showSlides, 3000); // Change every 3 seconds
}

// Manual navigation
function changeSlide(n) {
    clearTimeout(slideInterval);
    slideIndex += n - 1;
    if (slideIndex < 0) slideIndex = slides.length - 1;
    if (slideIndex >= slides.length) slideIndex = 0;
    showSlides();
}

// Select slide via dot indicators
function setSlide(n) {
    clearTimeout(slideInterval);
    slideIndex = n;
    showSlides();
}

// Food total

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

            if (!isNaN(price)) {
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


function myFunction() {
    var x = document.getElementById("myEmail").pattern;
    document.getElementById("demo").innerHTML = x;
}

let randomNum = Math.random();
    // console.log(random)
let randomBetween1and10 = Math.floor(Math.random() * 10) + 1;
console.log(randomBetween1and10)

let now = new Date();
console.log(now);

// Simple Item Check Out

let cart = [];
let cartTotal = 0;

function updateCart() {
    const cartItemsList = document.getElementById("cart-items");
    const cartTotalSpan = document.getElementById("cart-total");

    // Clear existing cart items
    cartItemsList.innerHTML = "";

    // Add updated cart items
    cart.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} - $${item.price}`;
        cartItemsList.appendChild(listItem);
    });

    // Update Total
    cartTotalSpan.textContent = cartTotal;
}

// Calendar for Schdule

let currentDate = new Date();

        function renderCalendar(date) {
            const monthYear = document.getElementById("month-year");
            const calendarDays = document.getElementById("calendar-days");
            calendarDays.innerHTML = ""; // Clear previous days

            const month = date.getMonth();
            const year = date.getFullYear();
            monthYear.textContent = date.toLocaleDateString("en-US", { month: "long", year: "numeric" });

            const firstDay = new Date(year, month, 1).getDay();
            const lastDate = new Date(year, month + 1, 0).getDate();

            // Add day headers
            const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            dayNames.forEach(day => {
                const div = document.createElement("div");
                div.classList.add("day", "day-header");
                div.textContent = day;
                calendarDays.appendChild(div);
            });

            // Fill empty spaces before the first day
            for (let i = 0; i < firstDay; i++) {
                const emptyDiv = document.createElement("div");
                calendarDays.appendChild(emptyDiv);
            }

            // Add days
            for (let day = 1; day <= lastDate; day++) {
                const div = document.createElement("div");
                div.classList.add("day");
                div.textContent = day;
                calendarDays.appendChild(div);
            }
        }

        function prevMonth() {
            currentDate.setMonth(currentDate.getMonth() - 1);
            renderCalendar(currentDate);
        }

        function nextMonth() {
            currentDate.setMonth(currentDate.getMonth() + 1);
            renderCalendar(currentDate);
        }

        renderCalendar(currentDate); // Initial render