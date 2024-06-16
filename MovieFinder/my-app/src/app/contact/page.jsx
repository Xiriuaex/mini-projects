import React from 'react'
import styles from './contact.module.css'
import ContactCard from '../components/ContactCard'
const page = () => {
  return (
    <div className={styles.container}>
      <h1>Contact Us</h1>
      <ContactCard />
      <h2>WE'D LOVE TO HEAR FROM YOU</h2>

    </div>
  )
}

export default page
