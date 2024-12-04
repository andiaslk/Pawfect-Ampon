function toggleDropdown() {
    const dropdownMenu = document.getElementById("dropdownMenu");
    dropdownMenu.classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('button')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};






function toggleDropdown() {
    const dropdownAdoptMenu = document.getElementById("dropdownAdoptMenu");
    dropdownAdoptMenu.classList.toggle("show"); 
}   


document.querySelector('.nadopt').addEventListener('click', function (event) {
    event.preventDefault(); 
    toggleDropdown();  
});

window.onclick = function (event) {
    const nadoptDiv = document.querySelector('.nadopt');
    const dropdownContent = document.getElementById("dropdownAdoptMenu");

    if (!nadoptDiv.contains(event.target)) {
        dropdownContent.classList.remove('show');
    }
};

function submiT(event) {
    form = document.getElementById('forms');
       if (form.checkValidity()) {
           alert('Thank you for submitting your response.');
       }
   }