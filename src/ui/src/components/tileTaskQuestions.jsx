/* eslint-disable */
import React from "react";

// TODO Oh my God, make this code cleaner
class TaskQuestionTile extends React.Component {
  state = {
    QA: this.props.QAPacket,
  };
  handleInputChange = (newValue, questionIndex, answerIndex) => {
    // TODO Okay up to here, need to make task name and nature reactive to auto update on the rest of the page
    let QA = this.state.QA;
    QA[questionIndex].answers[answerIndex].value = newValue;
    this.setState({ QA });
    console.log(this.state.QA);
  };

  handleMinMax = (answer, index, MinMax) => {
    if (answer.possibles !== undefined) {
      if (MinMax === "min") {
        return answer.possibles.min;
      } else if (MinMax === "max") {
        return answer.possibles.max;
      } else {
        console.log("You have errored");
      }
    }
  };

  answerMapper = (question, QuestionIndex, answers) => {
    return answers.map((answer, index) => {
      return answer.type === "input" ? (
        <input
          key={index}
          value={this.state.QA[QuestionIndex].answers.value}
          onChange={(event) =>
            this.handleInputChange(event.target.value, QuestionIndex, index)
          }
          min={this.handleMinMax(answer, index, "min")}
          max={this.handleMinMax(answer, index, "max")}
        ></input>
      ) : answer.type === "select" ? (
        <select
          key={index}
          value={this.state.QA[QuestionIndex].answers.value}
          onChange={(event) =>
            this.handleInputChange(event.target.value, QuestionIndex, index)
          }
        >
          {answer.possibles.map((possibility, possiblesIndex) => (
            <option key={possiblesIndex} value={possibility}>
              {possibility}
            </option>
          ))}
        </select>
      ) : (
        console.log("You have errored with your map function")
      );
    });
  };

  render() {
    return (
      // TODO Make this a form so apollo changequery fires on submit, not on update
      <section>
        {this.state.QA.map((packet, index) => (
          <div
            className="taskContainer -rounded-corners -drop-shadowed"
            key={index}
          >
            <div>{packet.question}</div>
            {this.answerMapper(this.state.QA[index], index, packet.answers)}
          </div>
        ))}
      </section>
    );
  }
}

export default TaskQuestionTile;
