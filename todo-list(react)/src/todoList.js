
const TodoList = (props) => {

  if (props.list.length) {
    return (
      <ul className="todo-list" >
        {props.list.map((item) => (
          <div className="todo" key={item.id}>
            <li
              className={item.status}
              onClick={() => props.onToggle(item)}
            >
              {item.name}
            </li>

            <button className="delete-button" onClick={() => props.onRemove(item)}>
              Delete
            </button>
          </div>
        ))}
      </ul>
    );
  }

  return (
    <div className="empty">
      <p>No tasks found</p>
    </div>
  );
};

export default TodoList;