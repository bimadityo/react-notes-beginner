import React from 'react';

function NoteSearch({ keyword, onKeywordChange }) {
    return (
        <div className="note-search">
            <input 
                type="text"
                placeholder="Cari catatan..."
                value={keyword}
                onChange={(event) => onKeywordChange(event.target.value)}
            />
        </div>
    )
}

export default NoteSearch;