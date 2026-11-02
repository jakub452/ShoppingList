import Item from "../components/Item";
import styles from "./ItemList.module.css";


const ItemList = ({ itemList, boughtItems, updateListCallback }) => {

  const deleteItem = (id) => {
    fetch(`/api/items/${id}`, { method: 'DELETE' })
    updateListCallback()
  }

  const changeState = (item, bought) => {

    fetch(`/api/items/${item.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ bought: bought })
    })
    updateListCallback();
  }

  return (
    <div className={styles.itemListContainer}>
      <div className={styles.itemListTitle}>do kupienia</div>
      <div className={styles.itemList}>
        {
          itemList.map((item) => (
            <Item 
            key={item.id} 
            name={item.name} 
            ammount={item.amount} 
            deleteItem={() => deleteItem(item.id)} 
            changeState={(bought) => changeState(item, bought)}
            bought={item.bought}
            updateItemCallback={updateListCallback}
            />
          ))
        }
      </div>
      <div className={styles.itemListTitle}>kupione</div>
      <div className={styles.itemList}>
        {
          boughtItems.map((item) => (
            <Item 
            key={item.id} 
            name={item.name} 
            ammount={item.amount} 
            deleteItem={() => deleteItem(item.id)} 
            changeState={(bought) => changeState(item, bought)}
            bought={item.bought}
            updateItemCallback={updateListCallback}
            />
          ))
        }
      </div>
    </div>
  );
};

export default ItemList;
