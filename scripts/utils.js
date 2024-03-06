import {authorField, 
    getNotes, 
    normalNotesList, 
    noteField, 
    notesForm, 
    notesList, 
    notesPreview, 
    notesView, 
    pinnedNotesList, 
    searchElement, 
    searchInputLabel, 
    sidebar, 
    titleField 
} from "./elements.js";

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
    notesPreview.style.display = "flex"
};

export const viewNoteForm = () => {
    notesList.style.display = "none";
    notesView.style.display = "none";
    notesForm.style.display = "flex";
    notesPreview.style.display = "none";
};

const getDate = () => {
    const date = new Date();
    const day = date.getDate();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const todayDate = `${month} ${day}, ${year}`;

    return todayDate
};

const saveToStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
};

const getFromStorage = (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : false;
};

export const addNote = (notesType) => {
    const noteTitle = titleField.value;
    const noteAuthor = authorField.value.slice(0, 1).toUpperCase()+authorField.value.slice(1).toLowerCase();
    const noteBody = noteField.value;

    if (!noteTitle || !noteAuthor || !noteBody) return;

    const note = {
        title: noteTitle,
        author: noteAuthor,
        content: noteBody,
        date: getDate(),
    };

    const notes = getFromStorage(notesType) || [];

    notes.unshift(note);

    saveToStorage(notesType, notes);

    const notesList = renderNotes(notes);

    return notesList;
};

const renderNotes = (notes) => {

    let notesList = "";
    
    if (Array.isArray(notes)) {
        notes.forEach(note => {
            notesList += `<li class="notes__note-item">
            <h5 class="notes__note-title">${note.title}</h5>
            <div class="notes__note-content">${note.content}</div>
            <div class="notes__note-actions">
            <div class="notes__note-updated">${note.date}</div>
            <button class="notes__note-delete">Delete</button>
            </div>
            </li>`;
        });
        
        return notesList;
    } else {
        return `<p class="notes__empty">No notes added yet</p>`;
    }

};

export const getNotesOnLoad = () => {
    const normalNotes = renderNotes(getFromStorage("notes")) ? renderNotes(getFromStorage("notes")) : false;
    normalNotesList.innerHTML = normalNotes
    const pinnedNotes = renderNotes(getFromStorage("pinnedNotes")) ? renderNotes(getFromStorage("pinnedNotes")) : false;
    pinnedNotesList.innerHTML = pinnedNotes;
};

export const getAllNotes = () => {
    getNotes().forEach(note => {
        note.addEventListener("click", e => {
            const noteTitle = e.currentTarget.querySelector(".notes__note-title").textContent;
            const noteUpdated = e.currentTarget.querySelector(".notes__note-updated").textContent;
            const noteContent = e.currentTarget.querySelector(".notes__note-content").textContent;

            const notePreview = document.querySelector(".notes__preview");
            notePreview.innerHTML =`<h5 class="notes__title-preview">${noteTitle}</h5>
            <div class="notes__updated-preview">${noteUpdated}</div>
            <div class="notes__content-preview">${noteContent}</div>`;
        });
    });
};


/*
    [x] Get notes from local storage on loading the page
    [x] Show the full note on click on it
    [ ] Add functionality to delete button
    [ ] Add shake animation too empty fields when adding a new note
    [ ] Add pin/note icons to pinned & notes flags
*/