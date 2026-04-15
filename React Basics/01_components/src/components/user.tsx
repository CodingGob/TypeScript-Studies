interface UserProps {
  name: string;
  age: number;
}

export function User(user: UserProps) {
  return (
    <ul>
      <h2>User: {user.name}</h2>
      <h3>Age: {user.age}</h3>
    </ul>
  )
}