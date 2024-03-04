const headerSearchInput = document.querySelector(".notes__search-icon-label");
const searchElement = document.querySelector(".notes__searchField-wrapper");
const searchInputLabel = document.querySelector(".notes__header-searchLabel");
const headerMenuInput = document.getElementById("header-menu-input");
const sidebar = document.querySelector(".notes__sidebar");
const notesLabelSidebar = document.querySelector(".notes__notes-button");
const notesForm = document.querySelector(".notes__form");
const notesView = document.querySelector(".notes__view");
const notesList = document.querySelector(".notes__list");

const toggleHeaderSearch = () => {

    let element = parseInt(window.getComputedStyle(searchElement).height);
    
    if (element > 0) {

        searchElement.style.cssText = "height: 0; padding: 0;"
        searchInputLabel.style.display = "none";
        
    } else if (element === 0) {

        searchElement.style.height = "45px";
        searchInputLabel.style.display = "flex";
    }
}

headerSearchInput.addEventListener("click", toggleHeaderSearch);



const toggleSidebar = (e) => {
    if (window.matchMedia("(max-width: 480px)")) {

        const ul = document.querySelector(".notes__sidebar-list");
    
        if (e.target.checked) {
            sidebar.style.width = "35%";
            ul.style.display = "flex";
            sidebar.style.padding = "var(--gutter-30) var(--gutter-15)";
        } else {
            sidebar.style.width = "0";
            ul.style.display = "none";
            sidebar.style.padding = "0";
        }
    }
}

headerMenuInput.addEventListener("change", (e) => toggleSidebar(e))

const viewNotes = () => {

    notesForm.style.display = "none";
    notesView.style.display = "flex";
    notesList.style.display = "block";
}

notesLabelSidebar.addEventListener("click", viewNotes);

const viewNoteForm = () => {
}