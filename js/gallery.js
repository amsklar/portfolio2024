document.addEventListener("DOMContentLoaded", function () {
    const mainImage = document.querySelector(".main-image img");
    const thumbnails = document.querySelectorAll(".thumbnail");
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");

    let lastClickTime = 0; // Variable to store the timestamp of the last click

    function changeImage(index) {
        const selectedThumbnail = thumbnails[index];
        mainImage.src = selectedThumbnail.src;
    
        // Remove active class from all thumbnails
        thumbnails.forEach(t => t.classList.remove("active"));
    
        // Add active class to the selected thumbnail
        selectedThumbnail.classList.add("active");
    
        // Get the HTML page associated with the selected thumbnail
        const htmlPage = selectedThumbnail.getAttribute("data-html-page");
    
        // Check if the HTML page is defined
        if (htmlPage) {
            // Redirect to the specified HTML page on double-click
            mainImage.addEventListener("dblclick", function () {
                window.location.href = htmlPage;
            });
        }
    }

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener("click", function () {
            const currentTime = Date.now();
            const elapsedTime = currentTime - lastClickTime;

            // Check if it's a double-click (within a certain time threshold)
            if (elapsedTime <= 300) {
                // Redirect to the specified HTML page
                const htmlPage = thumbnail.getAttribute("data-html-page");
                if (htmlPage) {
                    window.location.href = htmlPage;
                }
            } else {
                // Show the thumbnail as the main image on single-click
                changeImage(index);
            }

            // Update last click time
            lastClickTime = currentTime;
        });
    });

    leftArrow.addEventListener("click", function () {
        const currentIndex = Array.from(thumbnails).findIndex(thumbnail => thumbnail.classList.contains("active"));
        const newIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
        changeImage(newIndex);
    });

    rightArrow.addEventListener("click", function () {
        const currentIndex = Array.from(thumbnails).findIndex(thumbnail => thumbnail.classList.contains("active"));
        const newIndex = (currentIndex + 1) % thumbnails.length;
        changeImage(newIndex);
    });
});
