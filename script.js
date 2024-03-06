import { notesLabelSidebar } from "./scripts/elements.js";
import { initListeners } from "./scripts/eventListeners.js";
import { getNotesOnLoad } from "./scripts/utils.js";

window.addEventListener("DOMContentLoaded", () => {
    notesLabelSidebar.click();
});

initListeners();
getNotesOnLoad();