import Menu from '../Menu/Menu'
import LanguageButton from './LanguageButton'
import styles from './Header.module.css'
import logoFilmCommision from '/assets/filmcomissionEC_blanco.svg'

import { useEffect, useState } from 'react'

const Header = ({ handleChangeLanguaje, text }) => {

    const [isOpaque, setIsOpaque ] = useState(false)

    const handleScroll = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop

        if(scrollTop > 500) {
            setIsOpaque(true)
        } else {
            setIsOpaque(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const styleMenuBar = isOpaque 
        ? styles.header__menu_bar_opaque 
        : styles.header__menu_bar

    const styleLogoBar = isOpaque 
        ? styles.logo__white_bar_opaque 
        : styles.logo__white_bar

    return (
        <header className={styles.header}>

            <LanguageButton 
                handleChangeLanguaje={handleChangeLanguaje} 
                text={text} 
            /> 

            <div className={styleMenuBar}></div> 

            <Menu text={text} />

            <div className={styleLogoBar}></div>

            <a href='/#'>
                <img 
                    className={styles.header__img} 
                    src={logoFilmCommision} 
                    alt={text.logo.textoAlternativo} 
                />
            </a>

        </header>
    )
}

export default Header