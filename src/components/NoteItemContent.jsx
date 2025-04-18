import React from 'react';
import NoteItemDate from './NoteItemDate';

function NoteItemContent({ title, createdAt, body }) {
    return (
        <div className="note-item__content">
            <h3 className="note-item__title">{title}</h3>
            <NoteItemDate createdAt={createdAt} />
            <p className="note-item__body">{body}</p>
        </div>
    );
}

export default NoteItemContent;