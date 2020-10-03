// TODO Set default values

function TaskReducer(task) {
    console.log(task)
    if (task !== undefined) {
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

export default TaskReducer;
