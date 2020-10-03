const connection = require("./connection");

const CREATE_TASKS_QUERY = `CREATE TABLE IF NOT EXISTS tasks(
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    createdAt DATETIME,
    updatedAt DATETIME,
    category VARCHAR(255),
    nature VARCHAR(255),
    minChunkedHours INT,
    minChunkedMinutes INT,
    maxChunkedHours INT,
    maxChunkedMinutes INT,
    startAvailableHours INT,
    startAvailableMinutes INT,
    endAvailableHours INT,
    endAvailableMinutes INT,
    totalSpentHours INT,
    totalSpentMinutes INT,
    dueDateDay INT,
    dueDateMonth INT,
    dueDateYear INT,
    startRecuringHours INT,
    startRecuringMinutes INT,
    endRecuringHours INT,
    endRecuringMinutes INT,
    timeToCompleteHours INT,
    timeToCompleteMinutes INT,
    priority INT,
    synchronicity INT,
    assignedUsers JSON,
    PRIMARY KEY (id)
)`;

connection.query(CREATE_TASKS_QUERY);

const CREATE_USERS_QUERY = `CREATE TABLE IF NOT EXISTS users(
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    createdAt DATETIME,
    updatedAt DATETIME,
    PRIMARY KEY (id)
)`;
connection.query(CREATE_USERS_QUERY);
