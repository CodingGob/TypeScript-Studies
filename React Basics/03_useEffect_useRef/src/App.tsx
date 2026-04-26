import { useEffect, useRef, useState } from "react"

export default function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState<string[]>([]);
  const [taskIndex, setTaskIndex] = useState(-1);
  const [isUpdating, setIsUpdating] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null); // useRef is used here to create a reference to the input element, which allows us to access it directly and manipulate it (e.g., focusing it) without causing re-renders when its value changes
  const isFirstRender = useRef(true); // useRef is used here to keep track of whether it's the first render or not, without causing re-renders when its value changes

  // When the component mounts, we want to load the tasks from localStorage
  useEffect(() => {
    const savedTasks = localStorage.getItem("@tasklist");
    if (savedTasks) {
      setTaskList(JSON.parse(savedTasks)); // JSON.parse transforms it back from a JSON string into an array
    }
  }, []);

  // Whenever the taskList changes, we want to save it to localStorage, but we want to skip the first render to avoid overwriting the loaded tasks
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    localStorage.setItem("@tasklist", JSON.stringify(taskList));  // JSON.stringify transforms the array into a JSON string
  }, [taskList]);

  // {} in the useEffect is the function that will be executed when the effect runs. This is where you put the code that you want to run as a side effect, such as fetching data, updating the DOM, or in this case, saving to localStorage.
  // [] is a dependency array, where you specify the variables that the effect depends on. If it is empty, the effect will only run once on mount. By specifying [taskList] as the dependency, we ensure that the effect only runs when taskList changes, and not on every render.


  function insertHandler() {
    if (isUpdating) {
      const newList = [...taskList];
      newList[taskIndex] = task;
      setTaskList(newList);
      setIsUpdating(false);
      setTaskIndex(-1);
    } else {
      const newList = [...taskList, task];
      setTaskList(newList);
    }

    setTask("");
  }

  function handleEdit(t: string, index: number) {
    setIsUpdating(true);
    setTask(t);
    setTaskIndex(index);

    inputRef.current?.focus(); // access the current value of the input element that we have referenced with useRef. The ?. operator is optional chaining, which allows us to safely call the focus method on inputRef.current without causing an error if inputRef.current is null or undefined (e.g., if the component hasn't mounted yet). If inputRef.current exists, it will call focus() to set the focus on the input field, allowing the user to start editing immediately.
  }

  function deleteHandler(index: number) {
    const newList = taskList.filter((_, i) => i !== index);
    setTaskList(newList);
  }


  return (
    <div>
      <h1>Understanding useEffect</h1>
      <hr />
      <h1></h1>

      <input
        type="text"
        placeholder="Write down the task"
        value={task}
        ref={inputRef} // attach the inputRef to this input element, allowing us to access it directly through inputRef.current
        onChange={(e) => setTask(e.target.value)} />
      <button onClick={() => insertHandler()}>{isUpdating ? "Update" : "Save"}</button>
      <h1></h1>
      <hr />

      <h3>Tasks List:</h3>
      <ul>
        {taskList.map((t, index) => (<li key={index}>
          {t}
          <button onClick={() => deleteHandler(index)}>Delete</button>
          <button onClick={() => handleEdit(t, index)}>Edit</button></li>))}
      </ul>
    </div>
  )
}