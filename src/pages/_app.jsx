import '../styles/global.scss' 

import Header from '../components/Header'
import Player from '../components/Player'
import styles from '../styles/home.css'
import stlyles from '../styles/app.module.scss'


function MyApp({ Component, pageProps }) {
  return(
     <div className={stlyles.wrapper}>
       <main>
       <Header />
       <Component {...pageProps} />
       </main>
       
    </div>
  )
}

export default MyApp
