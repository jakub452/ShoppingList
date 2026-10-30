import { useState } from 'react';
import styles from './Header.module.css'

const Header = () => {
  const [itemNumber] = useState(1);
    const dateNow = new Date().toLocaleDateString('pl-PL', {
      weekday: 'long',
      day: 'numeric',
      month: 'long'
    });

  return (
    <>
      <div className={styles.headerContainer}>
        <h2 className={styles.headerSubTitle}>{dateNow}</h2>
        <h1 className={styles.headerTitle}>Lista zakupów</h1>
        <p className={styles.headerPara}>Do kupienia: {itemNumber} produkty</p>
      </div>
      <div className={styles.inputContainer}>
        <input type="text" name="itemName" id="itemName" placeholder='Co trzeba kupić?' className={styles.inputText} />
        <div className={styles.inputControlers}>
          <input type="number" min={1} max={999} placeholder='1' name="itemNumber" id="itemNumber" className={styles.inputNumber} />
          <input type="button" value="+ Dodaj" className={styles.inputButton} />
        </div>
      </div>
    </>
    
  )
}

export default Header