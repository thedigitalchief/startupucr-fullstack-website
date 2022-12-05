import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import globeBackground from '../public/assets/globe_swoosh.png'
import { FaChevronRight } from 'react-icons/fa'

import styles from '../styles/Help.module.css'

export default function Help() {
  const [isMobile, setIsMobile] = useState(false)
  var buttonVariants = {}
  if (!isMobile)
    buttonVariants = {
      hover: { scale: 1.05 },
      tap: { scale: 0.995 },
    }

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 720)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  })

  return (
    <section className={styles.section}>
      <div className={styles.wave}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className={styles.shapefill}
          ></path>
        </svg>
      </div>
      <div className={styles.bgWrap}>
        <div className={styles.background}>
          <Image
            alt="Section background"
            src={globeBackground}
            width={2923}
            height={1548}
            quality={80}
            layout="responsive"
            objectFit="contain"
          />
        </div>
        <div className={styles.mainContent}>
          <h1>get involved</h1>
          <h3 className={styles.content}>
            Not interested in hacking but still want to participate? Great! We
            would love to have you on board. Fill out the forms below if
            you&#39;d like to help hackers throughout the day.
          </h3>
          <p>
            <b>Mentors</b>
            <br />
            Mentors are in charge of helping the hackers with new technologies
            and working through any bugs or obstacles they encounter. We
            recommend this position if you are well versed in a particular stack
            to offer the best guidance.
          </p>
          <p>
            <b>Volunteers</b>
            <br />
            Volunteers help out with the majority of day-of event tasks
            including, but not limited to, matching hackers to mentors, helping
            hackers find teams, hosting activities, and answering general
            questions.
          </p>
          <p>
            <b>Sponsors</b>
            <br />
          </p>
          <div className={styles.buttonWrapper}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://forms.gle/WZ6egHpSrFdFEhRr8"
            >
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                transition={{ ease: 'easeInOut', duration: 0.015 }}
                className={styles.button}
              >
                <span>mentors</span>
                <FaChevronRight className={styles.arrow} />
              </motion.button>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://forms.gle/nLr9L5FHWXfZWogd7"
            >
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                transition={{ ease: 'easeInOut', duration: 0.015 }}
                className={styles.button}
              >
                <span>volunteers</span>
                <FaChevronRight className={styles.arrow} />
              </motion.button>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="/sponsorship-packet.pdf"
            >
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                transition={{ ease: 'easeInOut', duration: 0.015 }}
                className={`${styles.button} ${styles.sponsorbutton}`}
              >
                <span>sponsor us</span>
                <FaChevronRight className={styles.arrow} />
              </motion.button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
