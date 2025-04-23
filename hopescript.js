// NAVBAR
const navItems = document.querySelector(".nav-items");
const openNavBtn = document.querySelector("#open_nav-btn");
const closeNavBtn = document.querySelector("#close_nav-btn");

const openNav = () => {
    navItems.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';
}

const closeNav = () => {
    navItems.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none';
}

openNavBtn.addEventListener("click", openNav);
closeNavBtn.addEventListener("click", closeNav);



// REASONs
const watcher = new IntersectionObserver((entries, trigger) => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add("fade-slide-in");
        trigger.unobserve(entry.target); // Stops watching once animated
    }
    });
}, {
    threshold: 0.1
});

// Attach watcher to cards and heading
document.querySelectorAll('.card, .why-container h1').forEach(item => {
    watcher.observe(item);
});


// SERVICES
const visibilityWatcher = new IntersectionObserver(
    (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add('active');
        }
    });
    },
    {
    threshold: 0.3,
    }
);

document.querySelectorAll('.service').forEach(service => {
    visibilityWatcher.observe(service);
});  





// SKILLS

const words = ["Full-Stack Developer" , "UI/UX expert", "Mobil App", "Video Editor",  "Graphics designer"];
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




// Contact Form
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
    let number = document.getElementById("number").value.trim(); 
    let message = document.getElementById("message").value.trim();
    let emailError = document.getElementById("email-error");

    if (name === "" || email === "" || number === "" || message === "") {
        alert("Please fill in all fields before sending.");
        return;
    }

    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = "Invalid email address! Please enter a valid email.";
        return;
    }

    emailError.textContent = "";

    let templateParams = {
        from_name: name,
        from_email: email,
        from_number: number,
        message: message
    };

    console.log("Sending email with params:", templateParams);

    emailjs.send("service_6kgxuzr", "template_prlt0nj", templateParams, "MVb5oOj-xdmsSLWND")
        .then(response => {
            alert("Message sent successfully!");
            console.log("Success:", response);

            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("number").value = "";
            document.getElementById("message").value = "";
        })
        .catch(error => {
            alert("Failed to send message. Check the console for details.");
            console.error("EmailJS Error:", error);
        });
}

