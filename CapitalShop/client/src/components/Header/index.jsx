import React from 'react'
import styles from './index.module.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
         <header>
        <div id={styles.navbar}>
            <div className="container">
                <div className={styles.navbar}>
                    <div className={styles.nav}>
                        <div className={styles.logo}>
                            <img src="https://preview.colorlib.com/theme/capitalshop/assets/img/icon/loder.png" alt="" />
                            <img src="https://preview.colorlib.com/theme/capitalshop/assets/img/logo/logo.png" alt="" />
                        </div>
                        <div className={styles.nav}>
                            <ul>
                                <a href="#"><Link to={'/'}>Home</Link></a>
                                <a href="#"><Link to={'add-page'}>Add Page</Link></a>
                                <a href="#"><Link to={'favorites'}>Favorites </Link></a>
                                <a href="#"><Link to={'basket'}>Basket</Link></a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header