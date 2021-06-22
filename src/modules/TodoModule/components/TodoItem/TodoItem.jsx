import React, { useState } from 'react';
import firebase from 'firebase';

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';
import Tooltip from '@material-ui/core/Tooltip';
import './TodoItem.styles.scss';

const TodoItem = ({ remove, data, key }) => {
  const [currentName, setCurrentName] = useState(data.value.name);
  const [currentSurName, setCurrentSurName] = useState(data.value.surname);
  const [nameErrorMessage, setNameErrorMessage] = useState(false);
  const [surnameErrorMessage, setSurNameErrorMessage] = useState(false);

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

  function cancelEditMode() {
    setEditMode(!editMode);
    setCurrentName(data.value.name);
    setCurrentSurName(data.value.surname);
    setNameErrorMessage(false);
    setSurNameErrorMessage(false);
  }

  return (
    <TableRow>
      <TableCell>
        <div>
          <TextField
            key={key}
            type="text"
            disabled={editMode}
            value={currentName}
            error={!!nameErrorMessage}
            className={editMode ? 'tableItemInput' : ''}
            onChange={({ target }) => {
              setNameErrorMessage(false);
              setCurrentName(target.value);
            }}
          />
        </div>
        {nameErrorMessage && (
          <span className="errorText">Name is a required field*</span>
        )}
      </TableCell>
      <TableCell>
        <div className="fieldBlock">
          <div>
            <TextField
              key={key}
              type="text"
              disabled={editMode}
              value={currentSurName}
              error={!!surnameErrorMessage}
              className={editMode ? 'tableItemInput' : ''}
              onChange={({ target }) => {
                setSurNameErrorMessage(false);
                setCurrentSurName(target.value);
              }}
            />
          </div>
          {surnameErrorMessage && (
            <span className="errorText">Surname is a required field*</span>
          )}
        </div>
      </TableCell>
      <TableCell>
        <div className="actionButtons">
          {editMode ? (
            <Tooltip title="edit">
              <IconButton
                aria-label="edit"
                onClick={() => setEditMode(false)}
                color="primary"
              >
                <EditIcon />
              </IconButton>
            </Tooltip>
          ) : (
            <div>
              <Tooltip title="cancel">
                <IconButton aria-label="cancel" onClick={cancelEditMode}>
                  <CancelIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="save">
                <IconButton
                  aria-label="save"
                  onClick={() => handleEdit(data.key)}
                  color="primary"
                >
                  <SaveIcon />
                </IconButton>
              </Tooltip>
            </div>
          )}
          <Tooltip title="delete">
            <IconButton aria-label="delete" onClick={remove} color="secondary">
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default TodoItem;
