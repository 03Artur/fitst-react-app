import React from 'react';

export class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    const { text } = this.props;
    this.state = {
      isEdit: false,
      editableText: text,
    };
  }

  setEdit = (isEdit) => {
    this.setState({
      isEdit,
    });
  };

  onSubmitEditForm = (e) => {
    const { editableText } = this.state;
    const { onEdit } = this.props;
    onEdit(editableText);
    this.setEdit(false);
    e.preventDefault();
    e.stopPropagation();
  };

  render() {
    const { isEdit, editableText } = this.state;
    const { isDone, text } = this.props;
    if (isEdit) {
      return (
        <li>
          <form onSubmit={this.onSubmitEditForm}>
            <input
              name="text"
              type="text"
              value={editableText}
              onChange={(event) => {
                const { target } = event;
                this.setState({
                  editableText: target.value,
                });
              }} />
            <button type="submit">save</button>
            <button onClick={() => this.setEdit(false)}>cancel</button>
          </form>
        </li>
      );
    }
    return (
      <li>
        <span>{text}</span>
        <input type="checkbox" checked={isDone} />
        <button onClick={() => this.setEdit(true)}>edit</button>
      </li>
    );
  }
}
