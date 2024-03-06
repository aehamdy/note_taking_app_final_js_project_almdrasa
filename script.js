import { getNormalDeleteBtns, getPinnedDeleteBtns, notesLabelSidebar} from "./scripts/elements.js";
import { initListeners } from "./scripts/eventListeners.js";
import { deleteNote, getAllNotes, getNotesOnLoad } from "./scripts/utils.js";

window.addEventListener("DOMContentLoaded", () => {
    console.log(getPinnedDeleteBtns());
    console.log(getNormalDeleteBtns());
    
    notesLabelSidebar.click();

    getAllNotes();

    getPinnedDeleteBtns().forEach((btn, index) => {
        btn.addEventListener("click", (e) => {
            console.log(e.target);
            e.stopPropagation();
            deleteNote(e, index, "pinnedNotes")});
    });

    getNormalDeleteBtns().forEach((btn, index) => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            deleteNote(e, index, "notes");
        })
    })

});

initListeners();
getNotesOnLoad();