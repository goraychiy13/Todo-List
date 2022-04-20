import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { initialTodoList } from "./constants";
import { TodoItem } from "./types";

export const useTodoListHandler = () => {
  const [todoItemName, setTodoItemName] = useState("");

  const [todoList, setTodoList] = useState<TodoItem[]>([]);

  const handleTodoNameChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTodoItemName(event.target.value);
  };

  const handleAddTodoItem = useCallback(() => {
    setTodoList((prevState) => {
      const todoListLabels = prevState.map((item) => item.label);

      if (todoListLabels.includes(todoItemName)) {
        alert("Такой элемент уже существует.");

        return prevState;
      }
      if (!todoItemName) {
        alert("Введите имя элемента.");

        return prevState;
      }

      return [
        ...prevState,
        {
          label: todoItemName,
          isChecked: false,
        },
      ];
    });

    setTodoItemName("");
  }, [todoItemName]);

  const handleDelteTodoItem = (index: number): (() => void) => {
    return () => {
      setTodoList((prevState) => [
        ...prevState.slice(0, index),
        ...prevState.slice(index + 1, prevState.length),
      ]);
    };
  };

  const handleCheckItem = (index: number): (() => void) => {
    return () => {
      setTodoList((prevState) => [
        ...prevState.slice(0, index),
        {
          ...prevState[index],
          isChecked: !prevState[index].isChecked,
        },
        ...prevState.slice(index + 1, prevState.length),
      ]);
    };
  };

  const handleRemoveChecked = (): void => {
    setTodoList((prevState) => {
      return [
        ...prevState.map((item) => ({
          ...item,
          isChecked: false,
        })),
      ];
    });
  };

  useEffect(() => {
    setTodoList(initialTodoList);
  }, []);

  return {
    todoItemName,
    todoList,
    handleTodoNameChange,
    handleAddTodoItem,
    handleDelteTodoItem,
    handleCheckItem,
    handleRemoveChecked,
  };
};
