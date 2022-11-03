import React from 'react'
import styles from './style';
import {
  Navbar, Billing, Business, CardDeal, Clients, Service, Nfc, Stats, Testimon, Footer
} from './components';




const App = () =>
(
  <div className='bg-primary w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Nfc />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimon />
        <Clients />
        <Service />
        <Footer />
      </div>
    </div>


  </div>
)


export default App
