import Item from '../components/Item'
import styles from './ItemList.module.css'

const ItemList = () => {
  return (
    <div className={styles.itemListContainer}>
        <div className={styles.itemListTitle}>do kupienia</div>
        <div className={styles.itemList}>
            <Item />
        </div>
    </div>
  )
}

export default ItemList