import axiosClient from "./axiosClient";

const todoApi = {
  getTodoById(todoId: string) {
    const url = `/todo/${todoId}`;
    return axiosClient.get(url);
  },
  async getAll(params?: any): Promise<any> {
    return await axiosClient.get("/todos");
  },
  async getTodoList(params?: any): Promise<any> {
    return await axiosClient.get("/todos");
  },
};

export default todoApi;
