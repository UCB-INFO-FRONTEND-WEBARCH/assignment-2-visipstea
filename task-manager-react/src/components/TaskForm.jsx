import { useState } from "react";

function TaskForm({ onAddTask }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    onAddTask(trimmed);
    setText("");
  };

  return (
    <form onSubmit = {handleSubmit} style = {{ marginBottom: "1rem" }}>
      <label htmlFor ="new-task" className ="sr-only">
        Add new task
      </label>
      <div style = {{ display: "flex", gap: "0.5rem" }}>
        <input
          id = "new-task"
          type = "text"
          value = {text}
          onChange = {(e) => setText(e.target.value)}
          placeholder = "Add a task"
          style = {{
            flex: 1,
            border: "1px solid white",
            borderRadius: "6px",
            padding: "0.5rem 0.75rem",
          }}
        />
        <button
          type = "submit"
          style = {{
            background: "#dc4c3e",
            color: "white",
            border: "none",
            borderRadius: "6px",
            padding: "0 1rem",
            cursor: "pointer",
          }}
        >
          Add
        </button>
      </div>
    </form>
  );
}

export default TaskForm;
