document.addEventListener("scroll", function() {
    const services = document.querySelectorAll(".service");
    services.forEach(service => {
        const rect = service.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50 && rect.bottom > 50) {
            service.classList.add("show");
        } else {
            service.classList.remove("show");
        }
    });
});

// portfolio


document.addEventListener("scroll", function() {
    const portfolios = document.querySelectorAll("portfolio");
    portfolios.forEach(portfolio => {
        const rect = portfolio.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50 && rect.bottom > 50) {
            portfolio.classList.add("show");
        } else {
            portfolio.classList.remove("show");
        }
    });
});


// SKILLS

        const words = ["Frontend developer", "Backend developer" , "UI/UX expert", "Video Editor",  "Graphics designer", "App developer"];
        let index = 0;
        let charIndex = 0;
        let isDeleting = false;
        const speed = 100;
        const delay = 1500;
        const textElement = document.getElementById("text");

        function typeEffect() {
            const currentWord = words[index];
            if (isDeleting) {
                charIndex--;
            } else {
                charIndex++;
            }

            textElement.textContent = currentWord.substring(0, charIndex);

            if (!isDeleting && charIndex === currentWord.length) {
                isDeleting = true;
                setTimeout(typeEffect, delay);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                index = (index + 1) % words.length;
                setTimeout(typeEffect, 500);
            } else {
                setTimeout(typeEffect, isDeleting ? speed / 2 : speed);
            }
        }

        typeEffect();


// CONTACT FORM [FOOTER]

// function sendEmail() {
//     const nameInput = document.getElementById("name");
//     const emailInput = document.getElementById("email");
//     const messageInput = document.getElementById("message");
//     const submitButton = document.getElementById("submit");

//     if (nameInput == "" || emailInput == "" || messageInput) {
//         alert('Please fill in this field')
//     }

//     submitButton.onclick = function() {
//         nameInput, emailInput, messageInput.
//     }
// }

// Initialize EmailJS when the page loads
window.onload = function() {
    emailjs.init("MVb5oOj-xdmsSLWND"); // Your EmailJS Public Key
};

function validateEmail() {
    let email = document.getElementById("email").value.trim();
    let emailError = document.getElementById("email-error");

    // Email validation pattern
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(email) && email !== "") {
        emailError.textContent = "Invalid email address! Please enter a valid email.";
    } else {
        emailError.textContent = ""; // Clear error message if email is valid
    }
}

function sendEmail() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let emailError = document.getElementById("email-error");

    // Validate input fields
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields before sending.");
        return;
    }

    // Validate email format before sending
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = "Invalid email address! Please enter a valid email.";
        return;
    }

    // Clear error message
    emailError.textContent = "";

    let templateParams = {
        from_name: name,
        from_email: email,
        message: message
    };

    console.log("Sending email with params:", templateParams);

    emailjs.send("service_6kgxuzr", "template_prlt0nj", templateParams, "MVb5oOj-xdmsSLWND")
        .then(response => {
            alert("Message sent successfully!");
            console.log("Success:", response);

            // Clear input fields after successful submission
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
        })
        .catch(error => {
            alert("Failed to send message. Check the console for details.");
            console.error("EmailJS Error:", error);
        });
}

 

// TESTIMONIAL SECTION

// document.addEventListener("DOMContentLoaded", function () {
//     const container = document.querySelector(".testimonial-container");
//     let items = document.querySelectorAll(".testimonial-contain");
//     let autoScroll;
//     let isPaused = false;

//     function cloneItems() {
//         items.forEach((item) => {
//             let clone = item.cloneNode(true);
//             container.appendChild(clone); // Append clones for infinite effect
//         });
//         items = document.querySelectorAll(".testimonial-contain"); // Update items list
//     }

//     function scrollTestimonials() {
//         if (!isPaused) {
//             container.style.transition = "transform 1s ease-in-out";
//             container.style.transform = `translateX(-50%)`; // Moves left to show next items

//             setTimeout(() => {
//                 let firstItem = container.firstElementChild;
//                 container.appendChild(firstItem); // Move first item to the end
//                 container.style.transition = "none";
//                 container.style.transform = "translateX(0)"; // Reset position instantly
//             }, 3000);
//         }
//     }

//     function startAutoScroll() {
//         autoScroll = setInterval(scrollTestimonials, 3000); // Auto-scroll every 3 seconds
//     }

//     function stopAutoScroll() {
//         clearInterval(autoScroll); // Stop animation
//         isPaused = true;

//         setTimeout(() => {
//             isPaused = false; // Resume after 15s
//             startAutoScroll();
//         }, 15000);
//     }

//     // cloneItems(); // Duplicate items for infinite scrolling
//     startAutoScroll(); // Start automatic scrolling

//     // Pause animation on click
//     container.addEventListener("click", stopAutoScroll);
// });

const slider = document.getElementById("testimonialSlider");
let scrollAmount = 0;
function autoScroll() {
    const step = window.innerWidth < 768 ? slider.offsetWidth : slider.offsetWidth / 2;
    if (scrollAmount + step >= slider.scrollWidth) {
        scrollAmount = 0;
        slider.scrollTo({ left: 0, behavior: "smooth" });
    } else {
        scrollAmount += step;
        slider.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
}
setInterval(autoScroll, 3000);


