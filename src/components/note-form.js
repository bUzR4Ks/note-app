import api from '../scripts/main';

class NoteForm extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                .note-form {
                    background: #e4a07d;
                    padding: 20px;
                    border-radius: 10px;
                    width: 80%;
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }
                label {
                    font-weight: bold;
                }
                input, textarea {
                    width: 100%;
                    padding: 10px;
                    border-radius: 5px;
                    border: 1px solid #ccc;
                }
                button {
                    padding: 10px;
                    background-color: #7d8c74;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                }
            </style>
            <div class="note-form">
                <label for="title">Judul Catatan</label>
                <input type="text" id="title" placeholder="Judul Catatan">
                
                <label for="body">Isi Catatan</label>
                <textarea id="body" placeholder="Isi Catatan"></textarea>
                
                <button id="save">Simpan</button>
            </div>
        `;

        this.shadowRoot.querySelector('#save').addEventListener('click', () => {
            const title = this.shadowRoot.querySelector('#title').value;
            const body = this.shadowRoot.querySelector('#body').value;

            if (title && body) {
                
                document.dispatchEvent(new CustomEvent('note-saved', {
                    detail: { title, body }
                }));

                this.shadowRoot.querySelector('#title').value = '';
                this.shadowRoot.querySelector('#body').value = '';
            } else {
                alert("Judul dan isi catatan harus diisi!");
            }
        });
    }
}

customElements.define('note-form', NoteForm);
