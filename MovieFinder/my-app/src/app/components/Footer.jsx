import React from 'react';
import footerStyles from '@/app/styles/footer.module.css'
import {  FaTwitter,FaInstagram,FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";


export const metadata = {
    url: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css',
}

const Footer = () => {
    return (
        <>
            <footer className={footerStyles.footer}>
                <div className={footerStyles.content}>
                    <div className={footerStyles.top}>
                        <div className={footerStyles['logo-details']}>
                            <h5>Developed By</h5>
                            <span className={footerStyles.logo_name}>Pragyan</span>
                        </div>
                        <div className={footerStyles[`media-icons`]}>
                            <Link href="#"><i > <FaTwitter/> </i> </Link>
                            <Link href="#" target="_blank"><i><FaInstagram/></i></Link>
                            <Link href="#"><i > <FaLinkedinIn /> </i></Link>
                        </div>
                    </div>
                  
                </div>
                <div className={footerStyles['bottom-details']}>
                    <div className={footerStyles.bottom_text}>
                        <span className={footerStyles.copyright_text}> Copyright © 2023
                            <Link href="/>"> CreatiCo</Link> All rights reserved 
                        </span>
                    </div>
                </div>
            </footer>

        </>
    );
}

export default Footer;