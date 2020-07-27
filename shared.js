var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var selectPlanButtons = document.querySelectorAll(".plan .button");
var noModal = document.querySelector("button.modal__action--negative");
// console.dir(backdrop);

for (const button of selectPlanButtons) {
    button.addEventListener("click", function () {
        backdrop.style.display = 'block';
        modal.style.display = 'block';
    });
}

function hideModal() {
    backdrop.style.display = 'none';
    modal.style.display = 'none';
}

backdrop.addEventListener("click", hideModal);
noModal.addEventListener("click", hideModal);
