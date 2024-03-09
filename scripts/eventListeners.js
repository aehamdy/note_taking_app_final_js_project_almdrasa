import { addNoteBtn, 
    addNoteLabelSidebar, 
    addPinnedBtn, 
    arrow, 
    headerMenuInput, 
    headerSearchInput, 
    normalNotesList, 
    notesLabelSidebar, 
    pinnedNotesList, 
    searchInput,
    searchInputHeader,} from "./elements.js";
import { addNote, attachDeleteButtonListeners, displayNoteOnClick, searchForNote, 
    toggleHeaderSearch, toggleNotesList, toggleSidebar, viewNoteForm, viewNotes } from "./utils.js";


export const initListeners = () => {

    headerSearchInput.addEventListener("click", toggleHeaderSearch);

    headerMenuInput.addEventListener("change", (e) => toggleSidebar(e))

    notesLabelSidebar.addEventListener("click", viewNotes);

    addNoteLabelSidebar.addEventListener("click", viewNoteForm);

    addNoteBtn.addEventListener("click", () => {
        const notesList = addNote("notes");
        normalNotesList.innerHTML = notesList;
        attachDeleteButtonListeners("notes"); 
        displayNoteOnClick();
    });

    addPinnedBtn.addEventListener("click", () => {
        const notesList = addNote("pinnedNotes");
        pinnedNotesList.innerHTML = notesList;
        attachDeleteButtonListeners("pinnedNotes");
        displayNoteOnClick();
    });

    arrow.addEventListener("click", () => toggleNotesList());

    [searchInput, searchInputHeader].forEach(el => el.addEventListener("keyup", (e) => searchForNote(e)));
    
};