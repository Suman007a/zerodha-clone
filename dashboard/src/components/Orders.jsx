import React from 'react'
import styles from './Orders.module.css'
import VerticalGraph from './VerticalGraph'

export default function Orders() {
  return (
    <div className={styles.container}>
      <p>You have not placed any oder yet</p>
      <button>Get Started</button>
    </div>
  )
}
