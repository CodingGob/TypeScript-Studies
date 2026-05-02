import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function Home() {
  const [product, setProduct] = useState("")
  const navigate = useNavigate()

  function searchHanler() {
    if (product.trim() !== "") {
      navigate(`/products/${product}`)
    } else {
      window.alert("Please type the name of the product!")
    }
  }


  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
      <h3>Search for product:</h3>
      <input
        type='text'
        placeholder='Samsung TV'
        value={product}
        onChange={e => setProduct(e.target.value)}
      />
      <button
        onClick={searchHanler}>Search</button>
      <br />
    </div>
  )
}