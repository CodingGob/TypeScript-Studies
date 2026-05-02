import { useParams } from 'react-router-dom'


export function Products() {
  const { id } = useParams() // Has to be the same name as the one declared in routes

  return (
    <div>
      <h1>This is the Products Page!</h1>
      <h2>Product: {id}</h2>
    </div>
  )
}