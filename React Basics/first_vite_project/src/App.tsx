export default function App() {
  return (
    <div>
      <h1>Users</h1>
      <User name="Maria Green" age={21} />
      <User name="John Brown" age={44} />
      <User name="Alex Blue" age={32} />
    </div>
  )
}

interface UserProps {
  name: string;
  age: number;
}

function User(user: UserProps) {
  return (
    <div>
      <h2>User: {user.name}</h2>
      <h3>Age: {user.age}</h3>
    </div>
  )
}