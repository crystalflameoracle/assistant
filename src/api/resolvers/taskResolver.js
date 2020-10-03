module.exports = {
  Query: {
    getAllTasks: (_, __, { dataSources }) => dataSources.TaskAPI.getAllTasks(),
    getOneTask: (_, { id }, { dataSources }) => dataSources.TaskAPI.getOneTask({TaskId:id}),
  },
  Mutation: {   
    addTask: async (_,args, {dataSources}) => {
      const results = await dataSources.TaskAPI.addTask({args})
      return {
        success: "Success",
        message: "Message",
        id: results.id
      }},
    changeTask: async (_,args, {dataSources}) => {
      const results = await dataSources.TaskAPI.changeTask({args})
      return {
        success: "Success",
        message: "Message",
        id: args.id
      }},
    removeTask: async (_, {id}, {dataSources}) => {
      const results = await dataSources.TaskAPI.removeTask({TaskId: id})
      return {
        success: "Success",
        message: "Message",
        id: results.id
      }},
    removeAllTasks: async (_,__, {dataSources}) => {
      const results = await dataSources.TaskAPI.removeAllTasks()
      return {
        success: "Success",
        message: "Message",
        id: results.id
      }},
    }
  }

