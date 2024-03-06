import { notesLabelSidebar } from "./scripts/elements.js";
import { initListeners } from "./scripts/eventListeners.js";
import { getAllNotes, getNotesOnLoad } from "./scripts/utils.js";

window.addEventListener("DOMContentLoaded", () => {
    
    notesLabelSidebar.click();

    getAllNotes();
});

initListeners();
getNotesOnLoad();