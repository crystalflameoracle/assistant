const { DataSource } = require("apollo-datasource");
const connection = require("../db/connection");
const Sequelize = require("sequelize");

class TaskAPI extends DataSource {
  constructor() {
    super();
    this.db = defineTable();
  }

  async getAllTasks() {
    const response = await this.db.tasks.findAll();
    return Array.isArray(response)
    ? response.map(task => this.tasksReducer(task))
    : [];
  }

  async getOneTask({TaskId}) {
    const response = await this.db.tasks.findByPk(TaskId);
    return this.tasksReducer(response.dataValues);
  }

  async addTask({args}){
    const response = await this.db.tasks.create(args.input);
    return this.tasksReducer(response.dataValues)
  }

  async changeTask({args}){
    let task = await this.db.tasks.findByPk(args.id);
    task = Object.assign(task, task.dataValues, args.input);
    await task.save();
  }

  async removeTask({TaskId}) {
    const response = await this.db.tasks.findByPk(TaskId);
    await this.db.tasks.destroy({
          where: {
              id: TaskId  
          }
      })
    return this.tasksReducer(response.dataValues)
  }

  async removeAllTasks() {
      await this.db.tasks.destroy({truncate: true})
      return this.db.tasks
  }

  tasksReducer(task) {
    return {
      id: task.id,
      name: task.name,
      category: task.category,
      nature: task.nature,
      priority: task.priority,
      synchronicity: task.synchronicity,
      timeChunked: {
        min: {
          hours: task.minChunkedHours,
          minutes: task.minChunkedMinutes,
        },
        max: {
          hours: task.maxChunkedHours,
          minutes: task.maxChunkedMinutes,
        }
      },
      timeAvailable: {
        start: {
          hours: task.startAvailableHours,
          minutes: task.startAvailableMinutes,
        },
        end: {
          hours: task.endAvailableHours,
          minutes: task.endAvailableMinutes,
        }
      },
      recuringTimes: {
        start: {
          hours: task.startRecuringHours,
          minutes: task.startRecuringMinutes,
        },
        end: {
          hours: task.endRecuringHours,
          minutes: task.endRecuringMinutes,
        }
      },
      totalTimeSpent: {
        hours: task.totalSpentHours,
        minutes: task.totalSpentMinutes,
      },
      timeToComplete: {
        hours: task.timeToCompleteHours,
        minutes: task.timeToCompleteMinutes,
      },
      dueDate: {
        day: task.dueDateDay,
        month: task.dueDateMonth,
        year: task.dueDateYear,
      },
    }
  }
}

const defineTable = () => {
  const tasks = connection.define("task", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: Sequelize.STRING,
    category: Sequelize.STRING,
    nature: Sequelize.STRING,
    minChunkedHours: Sequelize.INTEGER,
    minChunkedMinutes: Sequelize.INTEGER,
    maxChunkedHours: Sequelize.INTEGER,
    maxChunkedMinutes: Sequelize.INTEGER,
    startAvailableHours: Sequelize.INTEGER,
    startAvailableMinutes: Sequelize.INTEGER,
    endAvailableHours: Sequelize.INTEGER,
    endAvailableMinutes: Sequelize.INTEGER,
    totalSpentHours: Sequelize.INTEGER,
    totalSpentMinutes: Sequelize.INTEGER,
    startRecuringHours: Sequelize.INTEGER,
    startRecuringMinutes: Sequelize.INTEGER,
    endRecuringHours: Sequelize.INTEGER,
    endRecuringMinutes: Sequelize.INTEGER,
    timeToCompleteHours: Sequelize.INTEGER,
    timeToCompleteMinutes: Sequelize.INTEGER,
    priority: Sequelize.INTEGER,
    synchronicity: Sequelize.INTEGER,
    dueDateDay: Sequelize.INTEGER,
    dueDateMonth: Sequelize.INTEGER,
    dueDateYear: Sequelize.INTEGER,
  })
  return {tasks}
}

module.exports = TaskAPI;
