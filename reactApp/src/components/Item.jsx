import styles from './Item.module.css'

const svg = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 7h16M10 11v6M14 11v6M6 7l1 12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-12M9 7V4h6v3" /></svg>

const Item = ({ name, ammount }) => {

    return (
    <div className={styles.itemContainer}>
        <input type="checkbox" name="itemCheckbox" id="itemCheckbox" className={styles.itemCheckbox} />
        <p className={styles.itemName}>{name}</p>
        <div className={styles.itemAmmountContainer}>
            <input type="button" value="−" className={styles.itemAmmountButton}/>
            <p className={styles.itemAmmountNumber}>{ammount}</p>
            <input type="button" value="+" className={styles.itemAmmountButton}/>
        </div>
        <button className={styles.itemDelete}>{svg}</button>
    </div>
  )
}

export default Item