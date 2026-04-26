import React, { useCallback, useEffect, useMemo, useState } from "react"

const TravelDisplay = React.memo(({ onCalculate }: { onCalculate: (s: number) => number }) => {
  console.log("Child rendered!");
  return <h3>The trip will take around {onCalculate(75)} hours</h3> // This component will only re-render when the onCalculate function reference changes, and use the same function reference on every render of the parent component, which will prevent unnecessary re-renders of this component when the distance state in the parent component changes.
});

export default function App() {
  interface itemProps {
    name: string
    weight: number
  }


  const [itemName, setItemName] = useState<string>(() => "")
  const [ItemWeight, setItemWeight] = useState<number>(() => 0)
  const [items, setItems] = useState<itemProps[]>(() => [])
  const [maxWeight] = useState<number>(500);
  const [distance, setDistance] = useState<number>(() => 0)
  const [pricePerKm] = useState<number>(1.2);

  useEffect(() => { console.log("Items changed!") }, [items])
  useEffect(() => { console.log("Distance changed!") }, [distance])

  const totalTrucks = useMemo(() => { // useMemo will cache the result of this calculation and only recalculate it when items or maxWeight changes
    console.log("totalTrucks called!");

    const totalWeight = items.reduce((acc, item) => acc + item.weight, 0);

    return Math.ceil(totalWeight / maxWeight);
  }, [items, maxWeight]) // This calculation will only run when items or maxWeight changes, otherwise it will return the cached value

  const ammount = useMemo(() => {
    console.log("ammount called!"); // without useMemo, the function would be called everytime the component changed, including when you type, because the {ammount} is in the component

    if (totalTrucks === 0 || distance === 0 || pricePerKm === 0) {
      return "0"
    }

    return (pricePerKm * distance * totalTrucks).toFixed(2)
  }, [totalTrucks, distance])

  const calculateTrip = useCallback((avgSpeedKmH: number) => { // useCallback will return the same function reference unless distance changes, in which case it will create a new function reference with the updated distance value
    return Number((distance / avgSpeedKmH).toFixed(1));
  }, [distance]); // This function will only be recreated when distance changes, otherwise it will return the same function reference


  function submitHandler() {
    if (itemName === "" || ItemWeight <= 0 || ItemWeight > maxWeight) {
      window.alert("Please enter a valid name and weight for the item.")
      return
    }

    const item: itemProps = {
      name: itemName,
      weight: ItemWeight
    }

    setItems([...items, item])
  }

  function deleteHandler(index: number) {
    const newList = items.filter((_, i) => i !== index)

    setItems(newList)
  }


  return (
    <div>
      <h1>Understanding useMemo & useCallback</h1>
      <h2>How many trucks will you need to move your items?</h2>
      <p>Item name:</p>
      <input
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)} />
      <p>Item weight (Kg, Max {maxWeight}Kg):</p>
      <input
        type="number"
        value={ItemWeight}
        onChange={(e) => setItemWeight(e.target.valueAsNumber)} />
      <h1></h1>
      <button onClick={submitHandler}>Submit</button>
      <h1></h1>
      <ol>{items.map((o, index) => <li>{o.name}, {o.weight}Kg{" "}
        <button onClick={() => deleteHandler(index)}>Delete</button></li>)}</ol>
      <h1></h1>
      <h3>You will need {totalTrucks} {totalTrucks > 1 ? "trucks" : "truck"}</h3>

      <h1></h1>
      <hr />
      <h1></h1>

      <h2>How long will the trip take?</h2>
      <p>What is the distance? (Km):</p>
      <input
        type="number"
        value={distance}
        onChange={(e) => setDistance(e.target.valueAsNumber)} />
      <TravelDisplay onCalculate={calculateTrip // as calculateTrip is wrapped in useCallback, it will make the child component to use the same function reference on every render instead of creating a new function reference on each render, which will prevent unnecessary re-renders of the TravelDisplay component when the distance state in the parent component changes.
      } />

      <h1></h1>
      <hr />
      <h1></h1>

      {(ammount !== "0") && <h2>The moving service will cost you $ {ammount}</h2>}
    </div>
  )
}