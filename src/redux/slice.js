import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: Math.random(),
      task: "Wake Up",
      isDone: true,
    },
    {
      id: Math.random(),
      task: "Go Out",
      isDone: false,
    },
  ],
};

export const todoSlice = createSlice({
  name: "todoApp",
  initialState,
  reducers: {
    deleteTask: (state, { payload }) => {
      state.todos = state.todos.filter((el) => el.id !== payload);
    },
    addNewTask: (state, { payload }) => {
      state.todos = [...state.todos, payload];
    },
    completeTask: (state, { payload }) => {
      state.todos = state.todos.map((el) =>
        el.id === payload ? { ...el, isDone: !el.isDone } : el
      );
    },
    editTaskAction: (state, { payload }) => {
      state.todos = state.todos.map((el) =>
        el.id === payload.id ? payload : el
      );
    },
  },
});
export const { deleteTask, addNewTask, completeTask, editTaskAction } =
  todoSlice.actions;
export default todoSlice.reducer;
