import React from 'react';

class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        // Inisialisasi state
        this.state = {
            title: '',
            body: '',
            maxChar: 50,
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        const value = event.target.value
        if (value.length <= this.state.maxChar) {
            this.setState(() => ({ title: value }));
        }
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            }
        })
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);

        // Kosongkan form setelah submit
        this.setState(() => {
            return {
                title: '',
                body: '',
            }
        })
    }

    render() {
        return (
            <form className='note-input' onSubmit={this.onSubmitEventHandler}>
                <input
                    className="note-input__title"
                    type="text"
                    placeholder="Judul Catatan"
                    value={this.state.title}
                    onChange={this.onTitleChangeEventHandler}
                />
                <p className="note-input__title__char-limit">
                    Sisa karakter untuk Judul: {this.state.maxChar - this.state.title.length}
                </p>
                <textarea
                    className="note-input__body"
                    placeholder="Isi Catatan"
                    value={this.state.body}
                    onChange={this.onBodyChangeEventHandler}
                />
                <button type="submit">Tambah Catatan</button>
            </form>
        )
    }
}

export default NoteInput;