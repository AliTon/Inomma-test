import React, { useState } from 'react';
import './TodosItem.styles.scss';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';

const TodosItem = ({ remove, data, firebase }) => {
  const [currentName, setCurrentName] = useState(data.value.name);
  const [currentSurName, setCurrentSurName] = useState(data.value.surname);
  const [nameErrorMessage, setNameErrorMessage] = useState(false);
  const [surnameErrorMessage, setSurNameErrorMessage] = useState('');

  const [editMode, setEditMode] = useState(true);

  function handleEdit(id) {
    if (!currentName) {
      setNameErrorMessage(true);
      if (!currentSurName) {
        setSurNameErrorMessage(true);
      }
      return;
    }
    if (!currentSurName) {
      setSurNameErrorMessage(true);
      if (!currentName) {
        setNameErrorMessage(true);
      }
      return;
    }
    firebase.set(`todos/${id}`, { name: currentName, surname: currentSurName });
    setEditMode(!editMode);
  }

  return (
    <div className="tableItem">
        <div>
            <TextField
                type="text"
                disabled={editMode}
                value={currentName}
                error={nameErrorMessage}
                className={editMode && 'tableItemInput'}
                onChange={({ target }) => {
                    setNameErrorMessage(false);
                    setCurrentName(target.value);
                }}
            />
            {nameErrorMessage && (
                <span style={{ color: 'red' }}>Name is a required field*</span>
            )}
        </div>
        <div>
          <TextField
              type="text"
              disabled={editMode}
              value={currentSurName}
              error={surnameErrorMessage}
              className={editMode && 'tableItemInput'}
              onChange={({ target }) => {
                  setSurNameErrorMessage(false);
                  setCurrentSurName(target.value);
              }}
          />
          {surnameErrorMessage && (
              <span style={{ color: 'red' }}>Surname is a required field*</span>
          )}
      </div>
        <div>
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
                        startIcon={<SaveIcon/>}
                    />
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
    </div>
  );
};

export default TodosItem;
