import React from "react";
import TaskQuestionTile from "../components/tileTaskQuestions";
import { useQueryGetOne } from "../graphql/queries.jsx";
import { QuestionAnswer as QA } from "../dictionary/constants.js";

function TaskQuestions(props) {
  const task = useQueryGetOne(props.id);
  const QAPackage = QA(task);
  return (
    <section>
      {task !== undefined ? (
        <form>
          {QAPackage.map((QAPacket, index) => (
            <TaskQuestionTile key={index} QAPacket={QAPacket} />
          ))}
        </form>
      ) : (
        <div>Please select a task to change.</div>
      )}
    </section>
  );
}

export default TaskQuestions;
