import React from 'react';
import Header from './Header';
import NoteInput from './NoteInput';
import NotesList from './NotesList';
import { getInitialData } from '../utils';
import NoteBody from './NoteBody';
import Footer from './Footer';

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      keyword: '',
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onArchiveHandler(id) {
    const notes = this.state.notes.map((note) => {
      if (note.id === id) {
        return { ...note, archived: !note.archived };
      }
      return note;
    });
    this.setState({ notes });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => ({
      notes: [
        ...prevState.notes,
        {
          id: +new Date(),
          title,
          body,
          createdAt: new Date().toISOString(),
          archived: false,
        },
      ],
    }));
  }

  onKeywordChangeHandler(keyword) {
    this.setState({ keyword });
  }

  render() {
    return (
      <div className="note-app">
        <Header
          keyword={this.state.keyword}
          onKeywordChange={this.onKeywordChangeHandler}
        />
        <NoteBody
          notes={this.state.notes}
          keyword={this.state.keyword}
          onAddNote={this.onAddNoteHandler}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
        />
        <Footer />
      </div>
    )
  }
}

export default NoteApp;