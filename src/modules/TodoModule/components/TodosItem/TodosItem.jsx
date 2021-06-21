import React, {useState} from 'react';
import './TodosItem.styles.scss';
import Button from "@material-ui/core/Button";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';


const TodosItem = ({remove, data}) => {

    const [editMode, setEditMode] = useState(true)

  return (
    <div>
        <input type="text" disabled={editMode} value={data.value.name}/>
        <input type="text" disabled={editMode} value={data.value.surname}/>
        {editMode ? < Button
            onClick={() => setEditMode(false)}
            variant="contained"
            color="secondary"
            startIcon={<EditIcon/>}
        >
            Edit
        </Button> : <div>
            <Button
                onClick={() => setEditMode(!editMode)}
                variant="contained"
                color="primary"
            >
                Cancel
            </Button>
            <Button
                onClick={() => setEditMode(!editMode)}
                variant="contained"
                color="primary"
            >
                Save
            </Button>

        </div>
        }
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
