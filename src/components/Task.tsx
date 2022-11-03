import { Trash } from 'phosphor-react'
import { TaskIn } from '../interfaces/Interfaces';

interface TaskProps {
  task: TaskIn;
  id: string;
  onDeleteTask: (taskId: string) => void;
  onCompleteTask: (taskId: string) => void;
}

function Task({ task, id, onDeleteTask, onCompleteTask }: TaskProps) {

  function handleDeleteTask() {
    onDeleteTask(task.id)
    console.log(task)
  }

  const labelClass = `${task.isComplete ? 'checked' : ''}`

  return (
    <div className="task">
      <input
        type="checkbox"
        name="isCompleteRadio"
        id={`checkbox${id}`}

      />
      <label htmlFor={`checkbox${id}`} className='checkbox' onClick={() => onCompleteTask(task.id)} />
      <div className='titulo'>
        <label className={labelClass}>{task.title}</label>
      </div>
      <button
        className='trash'
        onClick={handleDeleteTask}>
        <Trash size={17} />
      </button>
    </div>
  );
}
export default Task;
