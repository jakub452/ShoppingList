import { useRef, useState } from 'react';
import styles from './Header.module.css'

const Header = ({ updateListCallback }) => {
  const [itemNumber] = useState(1);
  const itemNameRef = useRef(null);
  const itemAmountRef = useRef(null);
  const dateNow = new Date().toLocaleDateString('pl-PL', {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  });


  const addItem = () => {
    if(!itemNameRef.current.value) return
    const name = itemNameRef.current.value
    if(!itemAmountRef.current.value) return
    const amount = itemAmountRef.current.value
    
    fetch("/api/items", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, amount })
    })
    
    updateListCallback()
  }

  return (
    <>
      <div className={styles.headerContainer}>
        <h2 className={styles.headerSubTitle}>{dateNow}</h2>
        <h1 className={styles.headerTitle}>Lista zakupów</h1>
        <p className={styles.headerPara}>Do kupienia: {itemNumber} produkty</p>
      </div>
      <div className={styles.inputContainer}>
        <input type="text" name="itemName" ref={itemNameRef} id="itemName" placeholder='Co trzeba kupić?' className={styles.inputText} />
        <div className={styles.inputControlers}>
          <input type="number" min={1} max={99} ref={itemAmountRef} placeholder='1' name="itemNumber" id="itemNumber" className={styles.inputNumber} />
          <input type="button" onClick={() => addItem()} value="+ Dodaj" className={styles.inputButton} />
        </div>
      </div>
    </>
    
  )
}

export default Header