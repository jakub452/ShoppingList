import Header from "./Header/Header"
import ItemList from "./ItemList/ItemList"
import './App.css'
import { useEffect, useState } from "react"



function App() {
  const [items, setItems] = useState([])

  const updateList = () => {
    fetch("/api/items")
      .then((res) => res.json())
      .then((data) => {
        setItems(data)
    })
  }

  useEffect(() => {
    updateList()
  }, []);

  const boughtItems = items.filter((item) => item.bought === 1)
  const toBuyItems = items.filter((item) => item.bought === 0)

  return (
    <main>    
      <Header updateListCallback={updateList}/>
      <ItemList itemList={toBuyItems} boughtItems={boughtItems} updateListCallback={updateList}/>
    </main>
  )
}

export default App
