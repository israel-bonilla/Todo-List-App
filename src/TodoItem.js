import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import CreateIcon from '@material-ui/icons/Create';
import "./TodoItem.scss";
import { forwardRef, useState } from 'react';
import { Button, IconButton } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { deleteTodo, setCompleted, updateTodo } from './features/appSlice';

const TodoItem = forwardRef(({ id, todo, completed }, ref) => {
    const dispatch = useDispatch();
    const [editMode, setEditMode] = useState(false);
    const [input, setInput] = useState(todo);

    const editTodo = e => {
        e.preventDefault();

        dispatch(updateTodo({
            id,
            edit: input,
        }));

        setEditMode(false);
    }

    const cancelEdit = () => {
        setInput(todo);
        setEditMode(false);
    }

    return (
        <div ref={ref} className={`todoItem ${completed && "todoItem__done"}`}>
            {editMode ? (
                <form className="todoItem__form" >
                    <input type="text" value={input} onChange={e => setInput(e.target.value)} placeholder="Please enter a todo" />
                    <div className="todoItem__formButtons">
                        <Button type="submit" onClick={editTodo} disabled={!input} >Save</Button>
                        <Button onClick={cancelEdit} >Cancel</Button>
                    </div>
                </form>
            ) : (
                <>
                    <div className="todoItem__left">
                        <input type="checkbox" checked={completed} onChange={() => dispatch(setCompleted(id))} />
                        <p>{todo}</p>
                    </div>
                    <div className="todoItem__right">
                        <IconButton className="todoItem__edit" onClick={() => setEditMode(true)} >
                            <CreateIcon />
                        </IconButton>
                        <IconButton className="todoItem__delete" onClick={() => dispatch(deleteTodo(id))} >
                            <HighlightOffIcon />
                        </IconButton>
                    </div>
                </>
            )}
        </div>
    )
});

export default TodoItem