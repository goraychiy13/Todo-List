import TodoListItem from "Components/TodoList/TodoListItem";
import { useMemo } from "react";
import "./TodoList.scss";
import CreatorTodo from "Components/TodoList/CreatorTodo";
import { useTodoListHandler } from "./useTodoListHandler";
import { getCompletedTodos } from "./helper";
import Footer from "./Footer";

const TodoList = (): JSX.Element => {
  const {
    todoItemName,
    todoList,
    handleTodoNameChange,
    handleAddTodoItem,
    handleDelteTodoItem,
    handleCheckItem,
    handleRemoveChecked,
  } = useTodoListHandler();

  const completedTodosCount = useMemo(
    () => getCompletedTodos(todoList),
    [todoList]
  );

  return (
    <div className="todo-list">
      <h1 className="todo-list__title">TODOLIST</h1>
      <CreatorTodo
        todoItemName={todoItemName}
        onTodoNameChange={handleTodoNameChange}
        onAddTodoItem={handleAddTodoItem}
      />
      <>
        {todoList.length ? (
          todoList.map((item, index) => (
            <TodoListItem
              key={item.label}
              itemIndex={index}
              label={item.label}
              isChecked={item.isChecked}
              onDelete={handleDelteTodoItem(index)}
              onCheck={handleCheckItem(index)}
            />
          ))
        ) : (
          <span className="todo-list__items-missing-info">
            Todo элементы отсутствуют.
          </span>
        )}
      </>
      <Footer
        completedTodosCount={completedTodosCount}
        todoListLength={todoList.length}
        onRemoveChecked={handleRemoveChecked}
      />
    </div>
  );
};

export default TodoList;
