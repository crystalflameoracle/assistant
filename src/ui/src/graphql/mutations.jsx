import { gql } from "@apollo/client";
import { GET_ALL_SHORT_TASKS } from "./queries";
import { useMutation } from "@apollo/client";

export const ADD_TASK = gql`
  mutation addTask($name: String!, $nature: String!) {
    addTask(input: { name: $name, nature: $nature }) {
      success
      message
    }
  }
`;

export function useMutateAddTask() {
  const [addTask] = useMutation(ADD_TASK, {
    update(cache, { data }) {
      const newTaskFromResponse = data?.addTask;
      const existingTasks = cache.readQuery({
        query: GET_ALL_SHORT_TASKS,
      });
      cache.writeQuery({
        query: GET_ALL_SHORT_TASKS,
        data: {
          getAllTasks: [...existingTasks?.getAllTasks, newTaskFromResponse],
        },
      });
    },
  });
  return addTask;
}

const DELETE_TASK = gql`
  mutation removeTask($id: ID!) {
    removeTask(id: $id) {
      success
      message
      id
    }
  }
`;

export function useMutateRemoveTask() {
  const [removeTask] = useMutation(DELETE_TASK, {
    update(cache, { data }) {
      const existingTasks = cache.readQuery({
        query: GET_ALL_SHORT_TASKS,
      });
      const newTaskArray = existingTasks.getAllTasks.filter(
        (task: Task) => task.id !== data.removeTask.id
      );
      cache.writeQuery({
        query: GET_ALL_SHORT_TASKS,
        data: {
          getAllTasks: newTaskArray,
        },
      });
    },
  });
  return removeTask;
}



const CHANGE_TASK = gql`
mutation ChangeTask(    
    $id: ID!
    $name: String
    # $category: String
    $nature: String
    # $minHoursChunked: Int
    # $maxHoursChunked: Int
    # $startHoursAvailable: Int
    # $endHoursAvailable: Int
    # $totalHoursSpent: Int
    # $recuringTimesStart: Int
    # $recuringTimesEnd: Int
    # $timeToComplete: Int
    # $priority: Int
    )
    {
  changeTask(
    id: $id,
    input: {
      name: $name
      nature: $nature
      # hoursChunked: {
      #   min: $hoursChunkedMin
      #   max: $hoursChunkedMax
      # }
      # hoursAvailable: {
      #   start: $hoursAvailableStart
      #   end: $hoursAvailableEnd
      # }
      # recuringTimes: {
      #   start: $recuringTimesStart
      #   end: $recuringTimesEnd
      # }
      # totalHoursSpent: $totalHoursSpent
      # timeToComplete: $timeToComplete
      # priority: $priority
    }
    )
  {
    success
    message
  }
}`;

export function useMutateChangeTask() {
  const [changeTask] = useMutation(CHANGE_TASK, {
    update(cache, { data }) {
      const existingTasks = cache.readQuery({
        query: GET_ALL_SHORT_TASKS,
      });
      cache.writeQuery({
        query: GET_ALL_SHORT_TASKS,
        data: {
          getAllTasks: {
            merge(_ignored, incoming) {
              return incoming;
            }
          }
        },
      });
    },
  });
  return changeTask;
}