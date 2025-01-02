import styles from '@/app/contact/contact.module.css'

import Link from 'next/link'
const ContactCard = () => {
  return (
    <div className={styles.section}>
        <div className={styles.container}>
            <div className={styles.grid}>
                <div className={styles.grid_card}>
                    <h2>Mail Us</h2>
                    <p>Monday to Friday Expected</p>
                    <p className={styles.last_para}>response time: 72 hours</p>
                    <Link href="mailto:pragyanchetia20@gmail.com?Subject=subject">Send Mail <span>-&gt;</span></Link>
                </div>
                <div className={styles.grid_card}>
                    <h2>Call Us</h2>
                    <p>Weekdays: 9 AM to 6 PM ET</p>
                    <p>Telephone</p>
                    <p>713.241.5110</p>
                </div>
                <div className={styles.grid_card}>
                    <h2>Our Adress</h2>
                    <p>025 Effertz Brooks Street</p>
                    <p>New Elva, West Virginia</p>
                    <p>34271</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactCard