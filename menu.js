document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("img01");
    const img = document.querySelector(".backgroundimg img");
    const span = document.getElementsByClassName("close")[0];

    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

document.querySelector('.download-btn').addEventListener('click', function() {

    window.location.href = 'New-York-Cafe-menu202310-1-1.pdf';
});

