// Wait for DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Offset for fixed header
                    behavior: "smooth",
                });
            }
        });
    });

    // Form submission handling
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            // Simple form validation
            const inputs = this.querySelectorAll("input, textarea");
            let isValid = true;

            inputs.forEach((input) => {
                if (input.required && !input.value.trim()) {
                    isValid = false;
                    input.classList.add("error");
                } else {
                    input.classList.remove("error");
                }
            });

            if (isValid) {
                // Simulate form submission
                alert(
                    "Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong thời gian sớm nhất."
                );
                contactForm.reset();
            } else {
                alert("Vui lòng điền đầy đủ thông tin bắt buộc.");
            }
        });
    }

    // Simple image placeholder hover effect
    const imagePlaceholders = document.querySelectorAll(".image-placeholder");
    imagePlaceholders.forEach((placeholder) => {
        placeholder.addEventListener("mouseenter", function () {
            this.style.backgroundColor = "var(--secondary-color)";
            this.style.borderColor = "var(--primary-color)";
        });

        placeholder.addEventListener("mouseleave", function () {
            this.style.backgroundColor = "var(--light-accent)";
            this.style.borderColor = "var(--secondary-color)";
        });
    });

    // Simple testimonial slider functionality
    let currentTestimonialIndex = 0;
    const testimonials = document.querySelectorAll(".testimonial");

    // Only initialize if there are multiple testimonials
    if (testimonials.length > 2) {
        // Hide all except the first two
        for (let i = 2; i < testimonials.length; i++) {
            testimonials[i].style.display = "none";
        }

        // Add navigation buttons for testimonials
        const testimonialSlider = document.querySelector(".testimonial-slider");
        const navButtons = document.createElement("div");
        navButtons.className = "testimonial-nav";
        navButtons.innerHTML = `
            <button class="prev-btn" aria-label="Previous testimonial">❮</button>
            <button class="next-btn" aria-label="Next testimonial">❯</button>
        `;

        if (testimonialSlider) {
            testimonialSlider.appendChild(navButtons);

            // Handle navigation clicks
            const prevBtn = document.querySelector(".prev-btn");
            const nextBtn = document.querySelector(".next-btn");

            prevBtn.addEventListener("click", function () {
                showTestimonials(currentTestimonialIndex - 1);
            });

            nextBtn.addEventListener("click", function () {
                showTestimonials(currentTestimonialIndex + 1);
            });
        }
    }

    function showTestimonials(index) {
        if (testimonials.length <= 2) return;

        // Handle circular navigation
        if (index < 0) index = testimonials.length - 2;
        if (index > testimonials.length - 2) index = 0;

        // Hide all testimonials
        testimonials.forEach((testimonial) => {
            testimonial.style.display = "none";
        });

        // Show current and next testimonial
        testimonials[index].style.display = "block";
        testimonials[(index + 1) % testimonials.length].style.display = "block";

        currentTestimonialIndex = index;
    }

    // Add a subtle animation for product cards
    const productCards = document.querySelectorAll(".product-card");
    productCards.forEach((card, index) => {
        card.style.animation = `fadeIn 0.5s ease-in-out ${
            index * 0.2
        }s forwards`;
        card.style.opacity = "0";
    });

    // Create a simple animation in CSS
    const style = document.createElement("style");
    style.innerHTML = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .error {
            border: 1px solid var(--primary-color) !important;
            background-color: rgba(200, 16, 46, 0.05) !important;
        }
        
        .testimonial-nav {
            text-align: center;
            margin-top: 20px;
        }
        
        .testimonial-nav button {
            background-color: var(--secondary-color);
            color: var(--text-color);
            border: none;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            font-size: 18px;
            cursor: pointer;
            margin: 0 5px;
            transition: background-color 0.3s;
        }
        
        .testimonial-nav button:hover {
            background-color: #e6c800;
        }
    `;
    document.head.appendChild(style);
});
