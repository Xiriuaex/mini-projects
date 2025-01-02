import React from 'react'
import Link from 'next/link'
import styles from '@/app/styles/common.module.css'
import MovieCard from '../components/MovieCard';

const page = async () => {

    await new Promise(resolve=> setTimeout(resolve,2000));

    const url = process.env.RAPID_KEY;
     const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'bb50061aefmshd23266429baf435p1d4eecjsn473bb1fbb630',
        'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
      }
    };

    const res= await fetch(url,options);
    const data = await res.json();
    const main_data= data.titles;
    console.log(data);
  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
            <h1>Movie & Series</h1>
            <div className={styles.card_section}>
              {
                main_data.map((currEl)=>{
                  return <MovieCard key={currEl.id} {...currEl}/>
                })
              }
            </div>
        </div>
      </section>
    </>
  )
};

export default page
