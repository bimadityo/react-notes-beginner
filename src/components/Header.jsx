import React from 'react';
import NoteSearch from './NoteSearch';

function Header({ keyword, onKeywordChange }) {
    return (
    <div className="note-app__header">
        <h1>My Notes</h1>
        <NoteSearch keyword={keyword} onKeywordChange={onKeywordChange} />
    </div>
    );
}

export default Header;