import { useEffect, useState } from "react";
import Item from "../components/Item";
import styles from "./ItemList.module.css";

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/api/items")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, []);

  return (
    <div className={styles.itemListContainer}>
      <div className={styles.itemListTitle}>do kupienia</div>
      <div className={styles.itemList}>
        {
          items.map((item) => (
            <Item key={item.id} name={item.name} ammount={item.ammount}/>
          ))
        }
      </div>
    </div>
  );
};

export default ItemList;
