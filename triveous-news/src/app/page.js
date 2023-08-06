'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { useUserAuth } from './context/AuthContext'

export default function Home() {
  const {user} = useUserAuth()
  return (
    <main className={styles.main}>
      {user}
    </main>
  )
}
