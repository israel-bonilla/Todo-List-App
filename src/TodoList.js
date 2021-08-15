import { useSelector } from "react-redux";
import { selectTodos } from "./features/appSlice";
import TodoItem from "./TodoItem";
import "./TodoList.css";
import FlipMove from 'react-flip-move';

const TodoList = () => {
    const todos = useSelector(selectTodos);

    return (
        <div className="todoList" style={{ position: 'relative' }} >
            {todos.length ? (
                <FlipMove typeName={null}>
                    {todos.map(({ id, todo, completed }) => (
                        <TodoItem key={id} id={id} todo={todo} completed={completed} />
                    ))}
                </FlipMove>
            ) : (
                <p>List is empty.</p>
            )}
        </div>
    )
};

export default TodoList
