import { ChangeEvent, memo } from "react";
import "./CreatorTodo.scss";

type Props = {
  todoItemName: string;
  onTodoNameChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onAddTodoItem: () => void;
};

const CreatorTodo = ({
  todoItemName,
  onTodoNameChange,
  onAddTodoItem,
}: Props) => {
  return (
    <div className="creator-todo">
      <input
        className="creator-todo__input"
        placeholder="Введите ToDo элемент"
        value={todoItemName}
        onChange={onTodoNameChange}
      />
      <button className="creator-todo__add-button" onClick={onAddTodoItem}>
        +
      </button>
    </div>
  );
};

export default memo(CreatorTodo);
