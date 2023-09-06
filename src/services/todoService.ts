import { ITodo } from "./../App";
import axiosClient from "./axiosClient";

const todoApi = {
  async getTodoById(todoId: string) {
    const url = `/todo/${todoId}`;
    return await axiosClient.get(url);
  },
  async createTodo(data: ITodo) {
    const url = `/todos`;
    return axiosClient.post(url, data);
  },
  async updateTodo(data: ITodo) {
    const url = `/todos/` + data.id;
    return axiosClient.patch(url, data);
  },
  async deleteTodo(id: string) {
    const url = `/todos/` + id;
    return axiosClient.delete(url);
  },
  async getAll(params?: any): Promise<any> {
    return await axiosClient.get("/todos");
  },
};

export default todoApi;
