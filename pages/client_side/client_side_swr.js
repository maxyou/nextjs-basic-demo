import useSWR from 'swr'
import styles from '../../styles/Home.module.css'
import Head from 'next/head'
import Link from 'next/link'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function ClientSideSwr() {

  const { data, error } = useSWR('/api/hello', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>
  
  return (
      <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>  
          
          <div>
              <div>client side swr get name: {data.name}</div>
              <div>client side swr get bio: {data.bio}</div>
          </div>
          <Link href={'/'}>
              <a>back to home</a>
          </Link>

      </main>

    </div>
    
  )
  }