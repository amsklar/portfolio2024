document.addEventListener("DOMContentLoaded", function () {
    const mainImage = document.querySelector(".main-image img");
    const thumbnails = document.querySelectorAll(".thumbnail");
    const descriptionText = document.getElementById("image-description-text");
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");

    // Array of descriptions corresponding to each image
    const imageDescriptions = [
        "Description for Image 1",
        "Description for Image 2",
        "Description for Image 3",
        // Add more descriptions as needed
    ];

    // Function to handle changing images
    function changeImage(index) {
        const selectedThumbnail = thumbnails[index];

        // Set the main image source to the selected thumbnail's source
        mainImage.src = selectedThumbnail.src;

        // Remove active class from all thumbnails
        thumbnails.forEach(t => t.classList.remove("active"));

        // Add active class to the selected thumbnail
        selectedThumbnail.classList.add("active");

        // Set the description based on the current index
        descriptionText.textContent = imageDescriptions[index];
    }

    // Function to handle clicking on thumbnails
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener("click", function () {
            changeImage(index);
        });
    });

    // Function to handle clicking on the left arrow
    leftArrow.addEventListener("click", function () {
        const currentIndex = Array.from(thumbnails).findIndex(thumbnail => thumbnail.classList.contains("active"));
        const newIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
        changeImage(newIndex);
    });

    // Function to handle clicking on the right arrow
    rightArrow.addEventListener("click", function () {
        const currentIndex = Array.from(thumbnails).findIndex(thumbnail => thumbnail.classList.contains("active"));
        const newIndex = (currentIndex + 1) % thumbnails.length;
        changeImage(newIndex);
    });
});