// Wait until page loads
document.addEventListener("DOMContentLoaded", () => {

    /* NAVBAR CLICKS */
    const navItems = document.querySelectorAll(".nav-bar li");

    navItems.forEach(item => {
        item.addEventListener("click", () => {
            alert(`${item.innerText} clicked`);
        });
    });


    /* SEARCH FUNCTIONALITY */
    const searchInput = document.querySelector(".search input");

    searchInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            if (searchInput.value.trim() === "") {
                alert("Please enter something to search 🍕");
            } else {
                alert(`Searching for: ${searchInput.value}`);
            }
        }
    });


    /* CARD HOVER EFFECT (JS based) */
    const boxes = document.querySelectorAll(".box");

    boxes.forEach(box => {
        box.addEventListener("mouseenter", () => {
            box.style.boxShadow = "0 15px 30px rgba(0,0,0,0.3)";
        });

        box.addEventListener("mouseleave", () => {
            box.style.boxShadow = "none";
        });

        box.addEventListener("click", () => {
            const text = box.querySelector("p").innerText;
            alert(`Opening: ${text}`);
        });
    });


    /* LOCATION CLICK */
    const locationText = document.querySelector(".search p");

    locationText.addEventListener("click", () => {
        alert("Location selection feature coming soon 📍");
    });


    /* LOGO CLICK */
    const logo = document.querySelector(".logo");

    logo.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

});
