import axios from "axios";

// class TaskService {
  
//   findUserTasks(username) {
//     return axios.get(`http://localhost:8080/users/${username}/todo`);
//   }

//   findTask(username, id) {
//     return axios.get(`http://localhost:8080/users/${username}/todo/${id}`);
//   }

//   deleteUserTask(username, id) {
//     return axios.delete(`http://localhost:8080/users/${username}/todo/${id}`);
//   }

//   updateUserTask(username, id, task) {
//     return axios.put(
//       `http://localhost:8080/users/${username}/todo/${id}`,
//       task
//     );
//   }

//   addUserTask(username, task) {
//     return axios.post(`http://localhost:8080/users/${username}/todo`, task);
//   }

//   findUserName() {
//     let username = sessionStorage.getItem("user");

//     if (username !== null) return username;
//     else return null;
    
//   }
// }

// For jpa persistance

const Jpa_Api = `http://localhost:8080/jpa`;

class TaskService {
  
  findUserTasks(username) {
    return axios.get(`${Jpa_Api}/users/${username}/todo`);
  }

  findTask(username, id) {
    return axios.get(`${Jpa_Api}/users/${username}/todo/${id}`);
  }

  deleteUserTask(username, id) {
    return axios.delete(`${Jpa_Api}/users/${username}/todo/${id}`);
  }

  updateUserTask(username, id, task) {
    return axios.put(
      `${Jpa_Api}/users/${username}/todo/${id}`,
      task
    );
  }

  addUserTask(username, task) {
    return axios.post(`${Jpa_Api}/users/${username}/todo`, task);
  }

  findUserName() {
    let username = sessionStorage.getItem("user");

    if (username !== null) return username;
    else return null;
    
  }
}

export default new TaskService();
