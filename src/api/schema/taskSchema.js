const { gql } = require("apollo-server");

const typeDefs = gql`
  input AddNewTaskInput {
    name: String
    nature: String
  }
  input ChangeTaskInput {
    name: String
    category: String
    nature: String
    minChunkedHours: Int
    minChunkedMinutes: Int
    maxChunkedHours: Int
    maxChunkedMinutes: Int
    startAvailableHours: Int
    startAvailableMinutes: Int
    endAvailableHours: Int
    endAvailableMinutes: Int
    totalSpentHours: Int
    totalSpentMinutes: Int
    dueDateDay: Int
    dueDateMonth: Int
    dueDateYear: Int
    startRecuringHours: Int
    startRecuringMinutes: Int
    endRecuringHours: Int
    endRecuringMinutes: Int
    timeToCompleteHours: Int
    timeToCompleteMinutes: Int
    priority: Int
    synchronicity: Int
  }
  type Task {
    id: ID!
    name: String!
    category: String
    nature: String
    timeChunked: TimeChunked
    timeAvailable: TimeAvailable
    recuringTimes: RecuringTimes
    totalTimeSpent: TotalTimeSpent
    timeToComplete: TimeToComplete
    priority: Int
    dueDate: DueDate
    synchronicity: Int
  }
  type TimeChunked{
    min: Min
    max: Max
  }
  type TimeAvailable{
    start: Start
    end: End
  }
  type RecuringTimes{
    start: Start
    end: End
  }
  type TotalTimeSpent{
    hours: Int
    minutes: Int
  }  
  type TimeToComplete{
    hours: Int
    minutes: Int
  }
  type DueDate{
    day: Int
    month: Int
    year: Int
  }
  type Min{
    hours: Int
    minutes: Int
  }
  type Max{
    hours: Int
    minutes: Int
  }  
  type Start{
    hours: Int
    minutes: Int
  }  
  type End{
    hours: Int
    minutes: Int
  }
  type Query {
    getAllTasks: [Task]!
    getOneTask(id: ID!): Task
  }
  type Mutation {
    addTask(input: AddNewTaskInput!):TaskResponse
    changeTask(id: ID!, input: ChangeTaskInput):TaskResponse
    removeTask(id: ID!):TaskResponse
    removeAllTasks:TaskResponse
  }
  type TaskResponse {
    id:ID!
    success: String
    message: String    
  }

`;


module.exports = typeDefs;


