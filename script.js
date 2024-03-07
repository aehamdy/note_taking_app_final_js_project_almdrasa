import { notesLabelSidebar, searchInputHeader } from "./scripts/elements.js";
import { initListeners } from "./scripts/eventListeners.js";
import { attachDeleteButtonListeners, displayNoteOnClick, getNotesOnLoad, } from "./scripts/utils.js";

window.addEventListener("DOMContentLoaded", () => {

    console.log(searchInputHeader);
    
    notesLabelSidebar.click();

    displayNoteOnClick();

    attachDeleteButtonListeners("notes");
    attachDeleteButtonListeners("pinnedNotes");
});


initListeners();
getNotesOnLoad();