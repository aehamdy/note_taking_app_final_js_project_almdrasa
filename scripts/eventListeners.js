import { addNoteBtn, addNoteLabelSidebar, headerMenuInput, headerSearchInput, notesLabelSidebar } from "./elements.js";
import { addNote, toggleHeaderSearch, toggleSidebar, viewNoteForm, viewNotes } from "./utils.js";


export const initListeners = () => {

    headerSearchInput.addEventListener("click", toggleHeaderSearch);

    headerMenuInput.addEventListener("change", (e) => toggleSidebar(e))

    notesLabelSidebar.addEventListener("click", viewNotes);

    addNoteLabelSidebar.addEventListener("click", viewNoteForm);

    addNoteBtn.addEventListener("click", addNote);
}