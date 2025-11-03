function TaskFilters({ currentFilter, onChangeFilter }) {
  const filters = [
    { id: "all", label: "All" },
    { id: "active", label: "Active" },
    { id: "completed", label: "Completed" },
  ];

  return (
    <div style={{ marginBottom: "1rem", display: "flex", gap: "0.5rem" }}>
      {filters.map((f) => (
        <button
          key={f.id}
          type="button"
          onClick={() => onChangeFilter(f.id)}
          className={currentFilter === f.id ? "filter-btn is-active" : "filter-btn"}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}

export default TaskFilters;
