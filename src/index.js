import './style/style.css';
import './components/app-footer.js';
import './components/note-form.js';
import './components/save-button.js';
import './components/loading.js';
import api from './scripts/main.js';

async function renderData() {
    const data = await api.getAllNotes();
    document.querySelector("loading-indicator").hide();
    console.log(data);
    data.forEach((note) => {
        const noteContainer = document.querySelector('.note-container');
        if (noteContainer) {
            const noteDiv = document.createElement('div');
            noteDiv.classList.add('note');
            noteDiv.innerHTML = `
                <h3>${note.title}</h3>
                <p>${note.body}</p>
                <button class="delete-btn">Delete</button>
            `;
            
            noteDiv.querySelector('.delete-btn').addEventListener('click', () => {
                noteDiv.remove();
                api.deleteNotes(note.id);
                console.log("Catatan dihapus:", note.title);
            });
            
            noteContainer.prepend(noteDiv); 
        } else {
            console.error("Elemen .note-container tidak ditemukan.");
        }
    
    });
        
  }
   
  renderData();
