import { normalNotesList, notesLabelSidebar, pinnedNotesList} from "./scripts/elements.js";
import { initListeners } from "./scripts/eventListeners.js";
import { attachDeleteButtonListeners, getAllNotes, getFromStorage, getNotesOnLoad, } from "./scripts/utils.js";

window.addEventListener("DOMContentLoaded", () => {
    
    notesLabelSidebar.click();

    getAllNotes();

    attachDeleteButtonListeners("notes");
    attachDeleteButtonListeners("pinnedNotes");
});


initListeners();
getNotesOnLoad();