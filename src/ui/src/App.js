import React from "react";
import { Route, HashRouter } from "react-router-dom";
import "./css/index.css";
import "./css/tasks.css";
import Tasks from "./routes/Tasks"

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <section className="main">
          <Route path="/" component={Tasks} />
          {/* <Route path="/AddTasks" component={AddTasks} /> */}
        </section>
      </HashRouter>
    );
  }
}

export default App;