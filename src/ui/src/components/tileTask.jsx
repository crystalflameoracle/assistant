import React from "react";
import { natureOptions } from "../dictionary/constants";

class TaskTile extends React.Component {
  handleTaskTitleChange = (event) => {
    this.props.sendChangeTask({
      variables: { id: this.props.task.id, name: event.target.value },
    });
  };

  handleNatureChange = (event) => {
    this.props.sendChangeTask({
      variables: { id: this.props.task.id, nature: event.target.value },
    });
  };
  render() {
    return (
      <div
        className={`taskContainer -rounded-corners -drop-shadowed ${
          this.props.sendCurrentActivedTask === this.props.task.id
            ? "-active"
            : ""
        }`}
        key={this.props.task.id}
        onClick={() => this.props.sendActivateTask(this.props.task.id)}
      >
        <p>{this.props.taskCounter}:</p>
        <input
          type="text"
          value={this.props.task.name}
          onChange={this.handleTaskTitleChange}
          minLength="1"
          placeholder="Please enter a task name here"
        />
        <select
          value={this.props.task.nature}
          onChange={this.handleNatureChange}
        >
          {natureOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <button
          onClick={() => {
            this.props.sendDeleteTask({
              variables: { id: this.props.task.id },
            });
          }}
        >
          Delete Me
        </button>
      </div>
    );
  }
}

export default TaskTile;
