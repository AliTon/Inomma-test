import React, { useState } from 'react';
import './TodosItem.styles.scss';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const TodosItem = ({ remove, data, firebase }) => {
  const [currentName, setCurrentName] = useState(data.value.name);
  const [currentSurName, setCurrentSurName] = useState(data.value.surname);

  const [editMode, setEditMode] = useState(true);

  function handleEdit(id) {
    firebase.set(`todos/${id}`, { name: currentName, surname: currentSurName });
    setEditMode(!editMode);
  }

  return (
    <div className="tableItem">
      <input
        type="text"
        disabled={editMode}
        value={currentName}
        onChange={({ target }) => setCurrentName(target.value)}
      />
      <input
        type="text"
        disabled={editMode}
        value={currentSurName}
        onChange={({ target }) => setCurrentSurName(target.value)}
      />
      {editMode ? (
        <Button
          onClick={() => setEditMode(false)}
          variant="contained"
          color="secondary"
          startIcon={<EditIcon />}
        >
          Edit
        </Button>
      ) : (
        <div>
          <Button
            onClick={() => setEditMode(!editMode)}
            variant="contained"
            color="primary"
          >
            Cancel
          </Button>
          <Button
            onClick={() => handleEdit(data.id)}
            variant="contained"
            color="primary"
          >
            Save
          </Button>
        </div>
      )}
      <Button
        onClick={remove}
        variant="contained"
        color="secondary"
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
    </div>
  );
};

export default TodosItem;
