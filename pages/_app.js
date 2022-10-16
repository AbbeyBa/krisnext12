import '../styles/globals.css'
import Head from 'next/head'
import Header from '../components/Header'

function MyApp({ Component, pageProps }) {
  return (
    <>
    
  
  <Component {...pageProps} />

  </>
  )
}

export default MyApp
