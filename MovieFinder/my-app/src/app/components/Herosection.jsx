'use client'
import heroStyles from "@/app/styles/herosection.module.css"
import styles from  "@/app/styles/common.module.css"
import Link from "next/link"
import { Mulish } from 'next/font/google'
import { useState } from "react"

const mulish = Mulish({
    weight: ['300','400', '500', '600', '700', '800','900'],
    subsets: ['latin'],
    display: 'swap'
  })

function Herosection({title, isHome}) {
    const [btn, setbtn]= useState(isHome);
        return (
            <main className={heroStyles.main_section}>
                <div className={styles.container}>
                    <div className={styles.grid_two_section}>
                        <div className="flex flex-col justify-center flex-start ml-0 sm:ml-[5rem]">
                                <h1 className="text-[5rem] sm:text-[7rem] font-bold">{title}</h1>
                                <p className="text-3xl font-medium">PickMent is here to help you find your entertainment.</p>
                        </div>
                        <div className={btn ? "" : "none"}>
                            <div  className="flex justify-center items-center">
                                <Link href="/movies">
                                    <button className="text-[2.6rem] w-fit h-[10vh]">
                                        Explore
                                    </button>                     
                                </Link>
                            </div>
                        </div>
                    </div>
                </div> 
            </main>
        )
}

export default Herosection
