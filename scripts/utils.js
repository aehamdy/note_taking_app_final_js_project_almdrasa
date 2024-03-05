import { addNoteBtn, authorField, normalNotesList, noteField, notesForm, notesList, notesView, searchElement, searchInputLabel, sidebar, titleField } from "./elements.js";

export const toggleHeaderSearch = () => {

    let element = parseInt(window.getComputedStyle(searchElement).height);
    
    if (element > 0) {

        searchElement.style.cssText = "height: 0; padding: 0;"
        searchInputLabel.style.display = "none";
        
    } else if (element === 0) {

        searchElement.style.height = "45px";
        searchInputLabel.style.display = "flex";
    }
};

export const toggleSidebar = (e) => {
    if (window.matchMedia("(max-width: 480px)")) {

        const ul = document.querySelector(".notes__sidebar-list");
    
        if (e.target.checked) {
            sidebar.style.width = "35%";
            ul.style.display = "flex";
            sidebar.style.padding = "var(--gutter-30) var(--gutter-15)";
        } else {
            sidebar.style.width = "0";
            ul.style.display = "none";
            sidebar.style.padding = "0";
        }
    }
};

export const viewNotes = () => {

    notesForm.style.display = "none";
    notesView.style.display = "flex";
    notesList.style.display = "block";
};

export const viewNoteForm = () => {
    notesList.style.display = "none";
    notesView.style.display = "none";
    notesForm.style.display = "flex";
};

const saveToStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
};

const getFromStorage = (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : false;
};

const addNote = () => {
    const noteTitle = titleField.value;
    const noteAuthor = authorField.value.slice(0, 1).toUpperCase()+authorField.value.slice(1).toLowerCase();
    const noteBody = noteField.value;

    const note = {
        title: noteTitle,
        author: noteAuthor,
        noteContent: noteBody,
    };

    const notes = getFromStorage("notes") || [];

    notes.unshift(note);

    saveToStorage("notes", notes);
};

addNoteBtn.addEventListener("click", addNote);