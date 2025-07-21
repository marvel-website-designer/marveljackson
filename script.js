// ==================================================================== MENU BAR
const toggleBtn = document.getElementById("navToggle");
  const navbar = document.getElementById("navbar");
  const icon = document.getElementById("menuIcon");

  toggleBtn.addEventListener("click", () => {
    navbar.classList.toggle("expanded");

    // Toggle icon (X or menu)
    if (navbar.classList.contains("expanded")) {
      icon.innerHTML = `
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
      `;
    } else {
      icon.innerHTML = `
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
      `;
    }
  });





// ================================================================== FAQ

 // FAQ accordion toggle

    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      question.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isOpen) item.classList.add('active');
      });
    });

    // const faqItems = document.querySelectorAll('.faq-item');

    // faqItems.forEach(item => {
    //   item.querySelector('.faq-question').addEventListener('click', () => {
    //     item.classList.toggle('active');
    //   });
    // });





// ====================================================================== Contact Form
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

