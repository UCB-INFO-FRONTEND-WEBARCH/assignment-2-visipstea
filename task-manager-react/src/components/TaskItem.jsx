function TaskItem({ task, onToggle, onDelete }) {
  // reused from a1: <li class="task"><label class="task-row">...</label></li>
  return (
    <li className="task">
      <label className="task-row">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <span className="custom-check" aria-hidden="true"></span>
        <span className={task.completed ? "task-text task-text--done" : "task-text"}>
          {task.text}
        </span>
      </label>
      {/* delete button on the right */}
      <button
        type="button"
        onClick={() => onDelete(task.id)}
        style={{
          background: "transparent",
          border: "none",
          color: "#999",
          fontSize: "12px",
          marginLeft: "40px",
          cursor: "pointer",
        }}
        aria-label={`Delete ${task.text}`}
      >
        Delete
      </button>
    </li>
  );
}

export default TaskItem;
