// This is the main App component for the Task Manager application
// main container to manage all GLOBAL states (task + filter)

import { useState } from "react";
import TaskForm from "./components/TaskForm.jsx";
import TaskCounter from "./components/TaskCounter.jsx";
import TaskFilters from "./components/TaskFilters.jsx";
import TaskList from "./components/TaskList.jsx";

// start with 5 tasks from a1
const INITIAL_TASKS = [
  { id: 1, text: "Call Mom", completed: false },
  { id: 2, text: "Buy the new issue of Scientific American", completed: false },
  { id: 3, text: "Return the textbook to Josie", completed: false },
  { id: 4, text: "Buy the new album by Rake", completed: false },
  { id: 5, text: "Buy a gift card for Dad", completed: false }
];

function App() {
  // array of task objs id, text, completed
  const [tasks, setTasks] = useState(INITIAL_TASKS);

  // track which filter is active all, active, compl
  const [filter, setFilter] = useState("all"); // all | active | completed

  // add a new task
  const addTask = (text) => {
    const newTask = {
      id: crypto.randomUUID ? crypto.randomUUID() : Date.now(),
      text,
      completed: false,
    };
    // spread operator used to create new array
    setTasks((prev) => [...prev, newTask]);
  };

  // toggle complete
  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // delete
  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  // filtering visible tasks based on selected filter bubble
  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true; // default is all
  });

  const totalCount = tasks.length;
  const completedCount = tasks.filter((t) => t.completed).length;
  const visibleCount = filteredTasks.length;

  return (
    <div className="app">
      {/* header copied from a1 */}
      <header className="site-header" role="banner">
        <div className="header-container">
          <button className="menu-btn" aria-label="Menu">
            {/* replace with actual icon NOW in /public/assets*/}
            <img src="/assets/menu_icon.png" width="24" height="24" alt="menu" />
          </button>

          {/* this does not function!! */}
          <form className="quick-find" role="search" aria-label="Quick find">
            <img
              src="/assets/search_icon.png"
              width="16"
              height="16"
              className="search-icon"
              alt="search"
            />
            <label htmlFor="q" className="sr-only">
              Quick find
            </label>
            <input id="q" name="q" type="text" placeholder="Quick find" />
          </form>

          {/* task counter in header uses TaskCounter data */}
          <TaskCounter
            total={totalCount}
            completed={completedCount}
            visible={visibleCount}
            filter={filter}
          />
        </div>
      </header>

      {/* layout: sidebar + main content */}
      <div className="layout">
        <nav className="sidebar" aria-label="Task categories">
          <ul className="nav-list">
            <li className="nav-item is-active">
              <a href="#">
                <img src="/assets/inbox_icon.png" width="22" height="22" alt="inbox" />
                <span className="label">Inbox</span>
                <span className="count" aria-label="Inbox count">
                  {totalCount}
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#">
                {/* NOT supposed to work eyt*/}
                <img src="/assets/calendar_icon.png" width="22" height="22" alt="calendar" />
                <span className="label">Today</span>
                <span className="count" aria-label="Today count">
                  {visibleCount}
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#">
                {/* NOT supposed to work eyt*/}
                <img src="/assets/upcoming_icon.png" width="22" height="22" alt="upcoming" />
                <span className="label">Upcoming</span>
              </a>
            </li>
          </ul>
        </nav>

        <main className="content" id="main">
          <section aria-labelledby="inbox-heading" className="task-section">
            <h1 id="inbox-heading">Inbox</h1>

            {/* add task form */}
            <TaskForm onAddTask={addTask} />

            {/* filter buttons */}
            <TaskFilters currentFilter={filter} onChangeFilter={setFilter} />

            {/* task list */}
            {filteredTasks.length === 0 ? (
              <p style={{ marginTop: "1rem" }}>No tasks yet.</p>
            ) : (
              <TaskList
                tasks={filteredTasks}
                onToggle={toggleTask}
                onDelete={deleteTask}
              />
            )}
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
