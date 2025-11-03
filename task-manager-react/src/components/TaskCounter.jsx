function TaskCounter({ total, completed, visible, filter }) {
  // header design from A1 had "30/5"
  // adapt it to the filter requirement:
  // all -> show completed/total
  // active/completed -> show visible of total tasks
  let label;
  if (filter === "all") {
    label = `${completed}/${total}`;
  } else {
    label = `${visible} of ${total} tasks`;
  }

  return (
    <div className="task-counter">
      <img
        src="/assets/check_icon.png"
        width="20"
        height="20"
        className="checkmark"
        alt="checkmark"
      />
      <span aria-label="Task counter">{label}</span>
    </div>
  );
}

export default TaskCounter;
