import React, { Component } from "react";
import TodoService from "../apiCalls/TodoService";
import moment from "moment";

class List extends Component {
  state = {
    tasks: [],
    message: null,
  };

  componentDidMount() {
    let username = TodoService.findUserName();

    TodoService.findUserTasks(username)
      .then((res) => {
        this.setState({ tasks: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  refreshTaskData = () => {
    let username = TodoService.findUserName();

    TodoService.findUserTasks(username)
      .then((res) => {
        this.setState({ tasks: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleDelete = (id) => {
    let username = TodoService.findUserName();

    TodoService.deleteUserTask(username, id)
      .then(() => {
        this.setState({ message: `Successfully deleted task id - ${id}` });
        this.refreshTaskData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleUpdate = (id) => {
    let username = TodoService.findUserName();
    this.props.history.push(`/users/${username}/todo/${id}`);
  };

  handleAdd = () => {
    let username = TodoService.findUserName();
    this.props.history.push(`/users/${username}/todo/0`);
  }

  render() {
    return (
      <div>
        <h1>Here are your tasks for today</h1>
        <br />
        {this.state.message && (
          <div className="alert alert-primary">{this.state.message}</div>
        )}

        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>Description</th>
                <th>Completed</th>
                <th>Due date</th>
                <th></th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {this.state.tasks.map((task) => {
                return (
                  <tr key={task.id}>
                    <td>{task.description}</td>
                    <td>{task.completed.toString()}</td>
                    <td>{moment(task.due).format("YYYY-MM-YY")}</td>
                    <td>
                      <button
                        className="btn btn-warning"
                        onClick={() => this.handleUpdate(task.id)}
                      >
                        Update
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => this.handleDelete(task.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div>
            <button onClick={this.handleAdd} className="btn btn-success">Add task</button>
          </div>

        </div>
      </div>
    );
  }
}

export default List;
