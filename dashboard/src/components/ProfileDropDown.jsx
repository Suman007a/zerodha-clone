import styles from './ProfileDropDown.module.css'



export default function viewProfile() {
    return (
      <div className={styles.viewProfile}> 
            <h6>Suman Biswas</h6>
            <p>sumanbiswas@gmail.com</p>
            <ul>
              <li>My profile</li>
              <li>Backoffice</li>
              <li>Coin</li>
              <li>Varsity</li>
              <li>Pulse</li>
              <li>Tour Kite</li>
              <li>Keyboard shortcuts</li>
              <li>Help</li>
              <li>Logout</li>
            </ul>
      </div>
    )
  }