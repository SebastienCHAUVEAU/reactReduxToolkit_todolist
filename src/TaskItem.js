import { useDispatch } from "react-redux";
import { toggleTask} from "./redux.js";

const TaskItem = (props) => {
    const { task } = props;
    //const task = useSelector(state => state.todo);
  const dispatch = useDispatch();
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => dispatch(toggleTask(task.id))}
        />
        {task.text}

        <span
          onClick={() => dispatch({
           type : "todo/deleteTask",
          payload: task.id

          })}
          role="button"
          style={{ padding: "5px", marginLeft: "20px" }}
        >
          X
        </span>
      </label>
    </div>
  );
};

export default TaskItem;
