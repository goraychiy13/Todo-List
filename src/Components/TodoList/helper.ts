import { TodoItem } from "./types";

export const getCompletedTodos = (todoList: TodoItem[]) => {
  return todoList.reduce((accum, current) => {
    if (current.isChecked) {
      return accum + 1;
    }

    return accum;
  }, 0);
};

export const getIndicatorWidth = (
  completedTodosCount: number,
  todoListLenght: number
): string => {
  return `${(completedTodosCount / todoListLenght ?? 1) * 100}%`;
};
