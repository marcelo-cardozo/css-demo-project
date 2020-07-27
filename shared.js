var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var selectPlanButtons = document.querySelectorAll(".plan .button");
var noModal = document.querySelector("button.modal__action--negative");

for (const button of selectPlanButtons) {
    button.addEventListener("click", function () {
        // backdrop.style.display = 'block';
        // modal.style.display = 'block';

        // modal.className = 'open'; // replaces class
        // modal.classList.toggle('open'); // adds or remove class

        backdrop.classList.add('open');

        if (modal)
            modal.classList.add('open');
    });
}

function hideModal() {
    // backdrop.style.display = 'none';
    // modal.style.display = 'none';
    // mobileNav.style.display = 'none';


    backdrop.classList.remove('open');
    mobileNav.classList.remove('open');

    if (modal)
        modal.classList.remove('open');
}

backdrop.addEventListener("click", hideModal);

if (noModal)
    noModal.addEventListener("click", hideModal);


var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");

toggleButton.addEventListener("click", function () {
    // mobileNav.style.display = 'block';
    // backdrop.style.display = 'block';

    mobileNav.classList.add('open');
    backdrop.classList.add('open');

});

