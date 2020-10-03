isExpand = false
sheet = document.getElementById("sheet");

document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("expand").addEventListener("click", expand);
});

function expand() {
    expandIcon = document.getElementById("expand-icon");
    if (isExpand) {
        sheet.style.top = "80vh";
        isExpand = false;
        expandIcon.classList.remove('rotate');
    } else {
        sheet.style.top = window.innerHeight - sheet.clientHeight+"px";
        isExpand = true;
        expandIcon.classList.add('rotate');
    }
}