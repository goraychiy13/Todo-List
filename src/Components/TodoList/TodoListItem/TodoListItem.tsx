import { memo } from "react";
import "./TodoListItem.scss";
import classNames from "classnames";

type Props = {
  label: string;
  itemIndex: number;
  isChecked: boolean;
  onDelete: () => void;
  onCheck: (index: number) => void;
};

const TodoListItem = ({
  label,
  itemIndex,
  isChecked,
  onDelete,
  onCheck,
}: Props): JSX.Element => {
  console.log("renderChild");
  return (
    <div className="todo-list-item">
      <label
        className={classNames("todo-list-item__label", {
          "todo-list-item__label--checked": isChecked,
        })}
      >
        <input
          onChange={() => onCheck(itemIndex)}
          className="todo-list-item__input"
          type="checkbox"
          checked={isChecked}
        />
        {label}
      </label>
      <button
        className={classNames("todo-list-item__delete-btn", {
          "todo-list-item__delete-btn--disabled": isChecked,
        })}
        onClick={isChecked ? () => false : onDelete}
      >
        x
      </button>
    </div>
  );
};

export default memo(TodoListItem);
