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
      setItems(data);
    })
  }

  useEffect(() => {
    updateList()
  }, []);

  return (
    <main>    
      <Header updateListCallback={updateList}/>
      <ItemList itemList={items} updateListCallback={updateList}/>
    </main>
  )
}

export default App
