

class SaveButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.render();
    }

   
    saveNote(note) {
        console.log("Catatan disimpan:", note);
        
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
                console.log("Catatan dihapus:", note.title);
            });
            
            noteContainer.prepend(noteDiv); // Menambahkan catatan ke atas daftar
        } else {
            console.error("Elemen .note-container tidak ditemukan.");
        }
    }
}

customElements.define('save-button', SaveButton);