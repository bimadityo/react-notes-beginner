import React from 'react';
import NoteInput from './NoteInput';
import NotesList from './NotesList';

function NoteBody({ notes, onAddNote, onDelete, onArchive, keyword }) {
    const filteredNotes = notes
    .filter((note) =>
        note.title.toLowerCase().includes(keyword.toLowerCase())
    )
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); // sort descending by createdAt

    const activeNotes = filteredNotes.filter((note) => !note.archived);
    const archivedNotes = filteredNotes.filter((note) => note.archived);

    return (
    <div className="note-app__body">
      <h2>Add Note</h2>
      <NoteInput addNote={onAddNote} />

      <h2>Active Notes</h2>
      <NotesList notes={activeNotes} onDelete={onDelete} onArchive={onArchive} />

      <h2>Archived Notes</h2>
      <NotesList notes={archivedNotes} onDelete={onDelete} onArchive={onArchive} />
    </div>
    );
}

export default NoteBody;