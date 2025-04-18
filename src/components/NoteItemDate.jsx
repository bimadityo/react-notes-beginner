import React from 'react';
import { showFormattedDate } from '../utils';

function NoteItemDate({ createdAt}) {
    return (
        <div className="note-item__date">
            <p className="note-item__created-at">{showFormattedDate(createdAt)}</p>
        </div>
    );
}

export default NoteItemDate;