// If you add new natures, have to change TaskQuestions.jsx to include new routing

export const natureOptions = ["Continuous", "One-Time", "Project", "Recuring"];
export const categoryOptions = ["Art", "Coding", "3D Animation", "Music"];
export const priorityOptions = [1,2,3,4,5]
export const minutesBreakdown = [0, 5, 10, 15, 20, 30, 45];

export const REGEXhours = new RegExp(/[0-24]/g);
export const REGEXrating = new RegExp(/[1-5]/g)

// If you add new question/answer pairings, have to change TaskQuestions.jsx to include new data
export function QuestionAnswer(task) {
  if (task !== undefined) {
    const coreTaskData = [
      {
        question: "What is the name of this task?",
        answers: [{ value: task.name, type: "input" }],
      },
      {
        question: "What is the nature of this task?",
        answers: [{ value: task.nature, type: "select", possibles: natureOptions }],
        
      },
      {
        question: "What is the category of this task?",
        answers: [{ value: task.category, type: "input", possibles: categoryOptions, }],
       
      },
      {
        question: "What is the priority of this task?",
        answers: [{ value: task.priority, type: "select",possibles: priorityOptions, }],
        
      },
      {
        question: "Can this task be completed alongside another task",
        answers: [{ value: task.synchronicity, type: "select",possibles: ["Yes", "No"], }],
        
        },
    ];
    const hoursChunked = [
      {
        question: "What is the minimum amount of time you can spend on this task?",
        answers: [
          { value: task.timeChunked.min.hours, type: "input",possibles: {min: 0, max:24} },
          { value: task.timeChunked.min.minutes, type: "select",possibles:minutesBreakdown }
        ],
      },
      {
        question: "What is the maximum amount of time you can spend on this task?",
        answers: [
          { value: task.timeChunked.max.hours, type: "input",possibles:{min: 0, max:24} },
          { value: task.timeChunked.max.minutes, type: "select",possibles:minutesBreakdown },
        ],
      },
    ];
    const hoursAvailable = [
      {
        question: "What time can you start this task?",
        answers: [
          { value: task.timeAvailable.start.hours, type: "input",possibles:{min: 0, max:24} },
          { value: task.timeAvailable.start.minutes, type: "select",possibles:minutesBreakdown },
        ],
      },
      {
        question: "What time do you have to end this task by?",
        answers: [
          { value: task.timeAvailable.end.hours, type: "input",possibles:{min: 0, max:24} },
          { value: task.timeAvailable.end.minutes, type: "select",possibles:minutesBreakdown },
        ],
      },
    ];
    const dueDate = [
      {
        question: "When is this task due by?",
        answers: [
          { value: task.dueDate.day, type: "input", },
          { value: task.dueDate.month, type: "input", },
          { value: task.dueDate.year, type: "input", },
        ],
        // TODO Create logic to handle how many days are actually in the month
        // NOTE Do I want a calendar input here?
        // possibles: [/[0-31]/g, /[0-12]/g, /[2020-3000]/g],
      },
    ];
    const recuringTimes = [
      {
        question: "When does this task start?",
        answers: [
          { value: task.recuringTimes.start.hours, type: "input",possibles:{min: 0, max:24} },
          { value: task.recuringTimes.start.minutes, type: "select",possibles:minutesBreakdown },
        ],
      },
      {
        question: "When does this task end?",
        answers: [
          { value: task.recuringTimes.end.hours, type: "input",possibles:{min: 0, max:24} },
          { value: task.recuringTimes.end.minutes, type: "select",possibles: minutesBreakdown},
        ],
      },
    ];
    const timeToComplete = [
      {
        question: "How much time will you need to complete this task?",
        answers: [
          { value: task.timeToComplete.hours, type: "input",possibles:{min: 0, max:10000} },
          { value: task.timeToComplete.minutes, type: "select",possibles:minutesBreakdown },
        ],
      },
    ];

    const Packages = {
      Continuous: [coreTaskData, hoursChunked, hoursAvailable],
      "One-Time": [
        coreTaskData,
        hoursChunked,
        hoursAvailable,
        dueDate,
        timeToComplete,
      ],
      Project: [
        coreTaskData,
        hoursChunked,
        hoursAvailable,
        dueDate,
        timeToComplete,
      ],
      Recuring: [coreTaskData, recuringTimes],
    };
    return Packages[task.nature];
  }
}
