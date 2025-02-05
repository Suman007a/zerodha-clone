import React from 'react'
import styles from './TopBar.module.css';

export default function TopBar({children}) {
  return (
    <div className={styles.topbarContainer}>
        <div className={styles.indiceContainer}>
            <div className={styles.nifty}>
                <p>NIFTY 50</p>
                <p>{100.2}</p>
                <p>%</p>
            </div>
            <div className={styles.sensex}>
                <p>SENSEX</p>
                <p>100.2</p>
                <p>%</p>
            </div>
        </div>
        {children}
    </div>
  )
}
