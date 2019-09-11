
var modal = document.querySelector(".modal");
//get all divs
var trigger = document.querySelectorAll(".trigger");
// console.log(trigger[0]);
var closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.forEach(function(ele) {
	ele.addEventListener("click", toggleModal);
	console.log(ele.textContent);
	// ele.innerHTML = ele.textContent;
})

closeButton.addEventListener("click", toggleModal);
// window.addEventListener("click", windowOnClick);

