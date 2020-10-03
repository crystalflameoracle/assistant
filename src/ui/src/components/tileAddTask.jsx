import React, { useState } from "react";
import { natureOptions } from '../dictionary/constants'

function AddTask(props) {
  const [inputValue, setValue] = useState("");
  const [alert, setAlert] = useState(false);
  const [natureValue, setNature] = useState(natureOptions[0]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue === "") {
      setAlert(true);
    } else {
      props.sendData({ variables: { name: inputValue, nature: natureValue } });
      setValue("");
    }
  };

  return (
    <section id="addNewtask">
      <input
        type="text"
        value={inputValue}
        onChange={(event) => setValue(event.target.value)}
      />
      <select
        value={natureValue}
        onChange={(event) => setNature(event.target.value)}
      >
        {natureOptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <button onClick={handleSubmit}>Add Task</button>
      {alert && <div>Please input a value first</div>}
    </section>
  );
}

export default AddTask;
