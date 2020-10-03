import React, { useState } from "react";
import { useQueryGetAll } from "../graphql/queries.jsx";
import {
  useMutateAddTask,
  useMutateRemoveTask,
  useMutateChangeTask,
} from "../graphql/mutations.jsx";
import AddTask from "../components/tileAddTask";
import TaskTile from "../components/tileTask";
import TaskQuestions from "../routes/TaskQuestions";

function Tasks() {
  const removeTask = useMutateRemoveTask();
  const changeTask = useMutateChangeTask();

  const [activeTaskID, UpdateActiveTaskID] = useState(0);
  const handleActivateTask = (id) => {
    activeTaskID === id ? UpdateActiveTaskID(0) : UpdateActiveTaskID(id);
  };

  return (
    <div>
      <AddTask sendData={useMutateAddTask()} />
      <section id="taskList">
        {useQueryGetAll()?.map((task, index) => (
          <TaskTile
            key={task.id}
            task={task}
            sendDeleteTask={removeTask}
            sendChangeTask={changeTask}
            taskCounter={index + 1}
            // Handles click events for active Task
            sendActivateTask={handleActivateTask}
            sendCurrentActivedTask={activeTaskID}
          />
        ))}
      </section>
      <TaskQuestions
        id={activeTaskID}
      />
    </div>
  );
}

export default Tasks;
