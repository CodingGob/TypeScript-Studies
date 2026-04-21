import { useState } from "react"

export default function App() {
  interface UserProps {
    name: string;
    age: number | undefined;
  }


  const [name, setName] = useState("");
  // name = current value of the name field, 
  // setName = function to update the name value, 
  // useState = hook that allows us to add state to our functional component,
  // ("") = mekes it so that the name field is empty by default and forces it to be a string type
  const [age, setAge] = useState<number | undefined>(undefined);
  // <number | undefined> = specifies that the age state variable can be either a number or undefined,
  const [users, setUsers] = useState<UserProps[]>([]);
  const [isUpdating, setIsUpdating] = useState(false);
  const [userIndex, setUserIndex] = useState(-1);

  const [counter, setCounter] = useState(0);


  function insertHandler() {
    const newUser: UserProps = { name, age };

    if (isUpdating) {
      const newUserList = [...users]; // if we copy directly with "= users", it will point to the same place and changes will affect the original at the same time

      const proceedUpdate = window.confirm("Are you sure you want to update this user?");
      if (proceedUpdate) {
        newUserList[userIndex] = newUser;
        setUsers(newUserList);
        window.alert("User Updated!");
      }

      setIsUpdating(false);
      setUserIndex(-1);
    } else {
      setUsers([...users, newUser]); // ...users = creates a new array that contains all the existing users,
      window.alert("User Saved!");
    }

    setName("");
    setAge(undefined);
  }

  function deleteHandler(index: number) {
    const proceedUpdate = window.confirm("Are you sure you want to delete this user?");
    if (proceedUpdate) {
      const newUserList = users.filter((_, i) => i !== index);
      setUsers(newUserList);
      window.alert("User Deleted!");
    }
  }


  return (
    <div>
      <h1>Understanding useState</h1>

      <hr />
      <h1></h1>
      <input
        type="text" // type = specifies the type of name field, in this case it is a text input
        placeholder="Type the user's name" // placeholder = text that appears in the name field when it is empty
        value={name} // value = sets the value of the name field to the current value of the name state variable
        onChange={(e) => setName(e.target.value)}
      // onChange = event handler that is called whenever the value of the name field changes
      // e = alias for event
      // e.target = the element that triggered the event, in this case it is the name input field
      // value = value of the name field
      // setName(e.target.value) = updates the name state variable with the new value of the name field, which is accessed through e.target.value
      />
      <input
        type="number"
        placeholder="Type the user's age"
        value={age ?? ""} // if undefined, puts an empty string
        onChange={(e) => setAge(e.target.valueAsNumber || undefined)}
      />
      <button onClick={insertHandler}>{isUpdating ? "Update" : "Save"}</button>
      <h1></h1>
      <hr />

      <h3>User's List:</h3>
      <ul>
        {users.map((u, index) => (<li
          key={index}>Name: {u.name}, Age: {u.age}
          <button onClick={() => deleteHandler(index)}>Delete</button>
          <button onClick={() => (setIsUpdating(true), setName(u.name), setAge(u.age), setUserIndex(index))}>Edit</button>
        </li>))}
      </ul>

      <br />
      <hr />
      <h1>useState Counter</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button> {counter} <button onClick={() => counter > 0 && setCounter(counter - 1)}>-</button>
    </div>
  )
}