import { notesLabelSidebar } from "./scripts/elements.js";
import { initListeners } from "./scripts/eventListeners.js";
import { attachDeleteButtonListeners, displayNoteOnClick, getNotesOnLoad, } from "./scripts/utils.js";

window.addEventListener("DOMContentLoaded", () => {

    notesLabelSidebar.click();

    displayNoteOnClick();

    attachDeleteButtonListeners("notes");
    attachDeleteButtonListeners("pinnedNotes");
});

initListeners();
getNotesOnLoad();