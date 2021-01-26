import { Component } from "react";
import moment from "moment";
import TodoService from "../apiCalls/TodoService";
import { Formik, Form, Field, ErrorMessage } from "formik";

class UpdateTodo extends Component {
  state = {
    id: this.props.match.params.id,
    description: "",
    due: moment(new Date()).format("YYYY-MM-DD"),
  };

  componentDidMount() {
    let username = TodoService.findUserName();

    TodoService.findTask(username, this.state.id).then((res) => {
      this.setState({
        description: res.data.description,
        due: moment(res.data.due).format("YYYY-MM-DD"),
      });
    });
  }

  handleSubmit = (values) => {
    let username = TodoService.findUserName();
    let todo = {
      id: this.state.id,
      description: values.description,
      due: values.due,
    };

    if (this.state.id === 0) {
      TodoService.addUserTask(username, todo)
        .then(() => this.props.history.push(`/users/${username}/todo`))
        .catch((err) => console.log(err));
    } else {
      TodoService.updateUserTask(username, this.state.id, todo)
      .then(() => this.props.history.push(`/users/${username}/todo`))
      .catch((err) => console.log(err));
    }
  };

  validate = (values) => {
    let errors = {};

    if (!values.description) {
      errors.description = "Please enter a desc";
    } else if (values.description.length < 5) {
      errors.description = "desc needs to be at least 5 chars long";
    }

    if (!moment(values.due).isValid()) {
      errors.due = "Invalid date format";
    }

    return errors;
  };

  render() {
    let { description, due } = this.state;

    return (
      <div>
        <h1>Update your task here</h1>
        <div className="container">
          <Formik
            initialValues={{ description, due }}
            onSubmit={this.handleSubmit}
            validate={this.validate}
            enableReinitialize={true}
          >
            {() => (
              <Form>
                <ErrorMessage
                  name="description"
                  component="div"
                  className="alert alert-warning"
                />
                <ErrorMessage
                  name="due"
                  component="div"
                  className="alert alert-warning"
                />
                <fieldset className="form-group">
                  <label>Description</label>
                  <Field className="form-control" type="text" name="description" />
                </fieldset>
                <fieldset className="form-group">
                  <label>Due date</label>
                  <Field className="form-control" type="date" name="due" />
                </fieldset>
                <button type="submit" className="b btn btn-success">
                  Save
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    );
  }
}

export default UpdateTodo;
