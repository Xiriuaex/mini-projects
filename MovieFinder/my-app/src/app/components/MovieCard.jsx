
import styles from '@/app/styles/common.module.css'
import Image from 'next/image'
import Link from 'next/link';

const MovieCard=(currEl)=> {
    const {id, type, title, synopsis} = currEl.jawSummary;

  return (
    <>
    <div className={styles.card}>
        <div className={styles.card_image}>
            <Image src={currEl.jawSummary.backgroundImage.url} alt={title} width={250} height={200}/>
        </div>
        <div className={styles.card_data}>
            <h2>{title}</h2>
            <p>{`${synopsis.substring(0,66)} ...`}</p>
            <Link href={`/movies/${id}`}>
                <button>
                    Read More
                </button>
            </Link>
        </div>

    </div>
      
    </>
  )
}

export default MovieCard
