import {
    headerSearchInput,
searchElement,
searchInputLabel,
headerMenuInput,
sidebar,
notesLabelSidebar,
notesForm,
notesView,
notesList,
addNoteLabelSidebar,
} from "./scripts/elements.js";
import { initListeners } from "./scripts/eventListeners.js";

window.addEventListener("DOMContentLoaded", () => {
    notesLabelSidebar.click();
});

initListeners();