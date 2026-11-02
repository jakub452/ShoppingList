import Item from "../components/Item";
import styles from "./ItemList.module.css";


const ItemList = ({ itemList, updateListCallback }) => {

  const deleteItem = (id) => {
    fetch(`/api/items/${id}`, { method: 'DELETE' })
    updateListCallback()
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
            updateItemCallback={updateListCallback}
            />
          ))
        }
      </div>
      {/* <div className="">kupione</div> */}
    </div>
  );
};

export default ItemList;
