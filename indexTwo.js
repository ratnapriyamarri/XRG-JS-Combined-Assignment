// Structure of the Note:
// {id: 1, title: 'Note 1', body: 'This is note 1', author: 'John Doe'}
const notes = [
  { id: 1, title: 'Note1', body: 'This is note1', author: 'John' },
  { id: 2, title: 'Note2', body: 'This is note2', author: 'Doe' },
];

// Create Notes
const createNote = (note) => {};

// Read Notes

const ReadNote = (id) => {};
// Update Notes
const UpdateNote = (id, note) => {};

// Delete Notes
const DeleteNote = (id) => {
  for (const note of notes) {
    if (note.id == id) {
      note.splice(notes.indexof(notes, 1));
    }
    return DeleteNote;
  }
};
console.log(DeleteNote(1));
