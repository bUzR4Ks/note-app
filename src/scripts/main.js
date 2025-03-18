const BASE_URL = 'https://notes-api.dicoding.dev/v2';

const api = {
    getAllNotes: async () => {
        try {
            document.querySelector("loading-indicator").show();
            const response = await fetch(`${BASE_URL}/notes`);
            if (!response.ok) throw new Error('Gagal mengambil catatan');
            const responseJson = await response.json();
            return responseJson.data || [];
        } catch (error) {
            console.error('Error fetching notes:', error);
            return [];
        }
    },
    addNotes: async (note) => {
        try {
            const response = await fetch(`${BASE_URL}/notes`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(note),
            });
            if (!response.ok) throw new Error('Gagal menambahkan catatan');
            return await response.json();
        } catch (error) {
            console.error('Error adding note:', error);
            return { status: 'error', message: error.message };
        }
    },
    deleteNotes: async (id) => {
        try {
            const response = await fetch(`${BASE_URL}/notes/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) throw new Error('Gagal menghapus catatan');
            return await response.json();
        } catch (error) {
            console.error('Error deleting note:', error);
            return { status: 'error', message: error.message };
        }
    }
};

export default api;
