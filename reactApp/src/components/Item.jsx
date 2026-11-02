import styles from './Item.module.css'

const svg = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 7h16M10 11v6M14 11v6M6 7l1 12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-12M9 7V4h6v3" /></svg>

const Item = ({ name, ammount, deleteItem }) => {


    return (
    <div className={styles.itemContainer}>
        <div className={styles.itemCheckbox}>
            <input type="checkbox" name="itemcb" id="itemcb" />
        </div>
        <div className={styles.itemName}>
            <p>{name}</p>
        </div>
        <div className={styles.itemAmount}>
            {`${ammount} szt.`}
        </div>
        <div className={styles.itemTrashbin}>
            <button onClick={deleteItem}>{svg}</button>
        </div>
    </div>
  )
}

export default Item