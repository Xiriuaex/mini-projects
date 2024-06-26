import styles from '@/app/styles/common.module.css'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <section className={styles.container}>
        <div className={styles.error_page}>
            <h2>Not Found</h2>
            <p>Could not find requested resource</p>
            <p>
                View <Link href="/">Go to Home Page</Link>
            </p>
        </div>
    </section>
  )
}
