var currentImageIndex = 0;
var images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg'
    // Add more image paths as needed
];

function showImage(index) {
    currentImageIndex = index;
    var modal = document.getElementById("modal");
    var modalImage = document.getElementById("modal-image");
    modal.style.display = "flex";
    modalImage.src = images[currentImageIndex];
}

function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}

function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    var modalImage = document.getElementById("modal-image");
    modalImage.src = images[currentImageIndex];
}

// Close the modal if the user clicks outside of the image
window.onclick = function(event) {
    var modal = document.getElementById("modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
