import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";

export function useQueryGetAll() {
  const { data } = useQuery(GET_ALL_SHORT_TASKS);
  return data?.getAllTasks;
}

export const GET_ALL_SHORT_TASKS = gql`
  query getAllTasks {
    getAllTasks {
      id
      name
      nature
    }
  }
`;

export function useQueryGetOne(id) {
  const {data} = useQuery(GET_ONE_TASK, {
    variables: { id: id }
  })
  return data?.getOneTask
}

const GET_ONE_TASK = gql`
  query getOneTask($id: ID!) {
    getOneTask(id: $id) {
      id
    name
    category
    nature
  	synchronicity
    priority  
    timeChunked {
			min{
        hours
        minutes
      }
      max{
        hours
        minutes
      }
		}
    timeAvailable {
			start{
        hours
        minutes
      }
      end{
        hours
        minutes
      }
		}
    recuringTimes{
      start{
        hours
        minutes
      }
      end{
        hours
        minutes
      }
    }
    totalTimeSpent{
    hours
      minutes
    }
    timeToComplete{
        hours
      minutes
    }
 
    dueDate{
    	day
      month
      year
    }

}}`;


