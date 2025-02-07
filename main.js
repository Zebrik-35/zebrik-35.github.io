
 var modal = document.getElementById("myModal");


 var btn = document.getElementById("myBtn");


 var span = document.getElementsByClassName("close")[0];


 btn.onclick = function(event) {
    event.preventDefault();
    modal.style.display = "block";
    setTimeout(() => {
        modal.classList.add("show");
    }, 10);
}

 span.onclick = function() {
    modal.classList.remove("show");
    setTimeout(() => {
        modal.style.display = "none";
    }, 500);
}

 window.onclick = function(event) {
    if (event.target == modal) {
        modal.classList.remove("show");
        setTimeout(() => {
            modal.style.display = "none";
        }, 500);
    }
}