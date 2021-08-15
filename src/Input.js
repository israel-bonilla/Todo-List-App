import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./features/appSlice";
import uuid from 'react-uuid';
import "./Input.scss";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { IconButton } from "@material-ui/core";

const Input = () => {
    const dispatch = useDispatch();
    const [input, setInput] = useState("");

    const submitTodo = e => {
        e.preventDefault();

        if(!input) return;

        dispatch(addTodo({
            id: uuid(),
            todo: input,
            completed: false,
        }));

        setInput("");
    }

    return (
        <div className="input">
            <form>
                <input type="text" placeholder="Add a new todo"
                    value={input} onChange={e => setInput(e.target.value)}
                />
                <IconButton type="submit" onClick={submitTodo} >
                    <AddCircleIcon style={{ fontSize: 50, color: "#ffffffbe" }} />
                </IconButton>
            </form>
        </div>
    )
}

export default Input
