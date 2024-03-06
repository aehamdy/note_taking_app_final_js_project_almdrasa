import { addNoteBtn, 
    addNoteLabelSidebar, 
    addPinnedBtn, 
    headerMenuInput, 
    headerSearchInput, 
    normalNotesList, 
    notesLabelSidebar, 
    pinnedNotesList } from "./elements.js";
import { addNote, getAllNotes, toggleHeaderSearch, toggleSidebar, viewNoteForm, viewNotes } from "./utils.js";


export const initListeners = () => {

    headerSearchInput.addEventListener("click", toggleHeaderSearch);

    headerMenuInput.addEventListener("change", (e) => toggleSidebar(e))

    notesLabelSidebar.addEventListener("click", viewNotes);

    addNoteLabelSidebar.addEventListener("click", viewNoteForm);

    addNoteBtn.addEventListener("click", () => {
        const notesList = addNote("notes");
        normalNotesList.innerHTML = notesList;
        getAllNotes();
    });

    addPinnedBtn.addEventListener("click", () => {
        const notesList = addNote("pinnedNotes");
        pinnedNotesList.innerHTML = notesList;
        getAllNotes();
    });

};