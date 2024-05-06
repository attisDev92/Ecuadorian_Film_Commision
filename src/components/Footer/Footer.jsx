import styles from './Footer.module.css'
import logoFilmCommision from '../../assets/images/logos/filmcomissionEC_blanco.svg'
import logoIFCI from '../../assets/images/logos/IFCI_logo_blanco.svg'
import logoMCYP from '../../assets/images/logos/MCYP_logo_blanco.svg'

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = ({ text }) => {

    const [isOpaque, setIsOpaque ] = useState(false)

    const handleScroll = () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop
        const contentHeight = document.body.offsetHeight
        const relativeScrollPosition = scrollY / contentHeight;

        if (relativeScrollPosition >= 0.7) {
            setIsOpaque(true);
        } else {
            setIsOpaque(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const styleLogoBar = isOpaque 
        ? styles.logo__white_bar_opaque 
        : styles.logo__white_bar

    
    const handlerOnClick = (anchorId) => {

    }

    return (
        <footer id='footer'>
            <div className={styles.container__footer}>
                <ul className={styles.sections__list}>
                    <p>
                        {
                            text.idioma === "esp" 
                                ? "Secciones" 
                                : "Sections"
                        }
                    </p>  

                    <li>
                        <a href="/#locations">
                            {text.menu.locacion}
                        </a>
                    </li>

                    <li>
                        <a href="#documents">
                            {text.menu.documentos}
                        </a>
                    </li>

                    <li>
                        <a href="#suppliers">
                            {text.menu.proveedores}
                        </a>
                    </li>
                    <li>
                        <a href="/locations">
                            {text.LocationGuide.title}
                        </a>
                    </li>

                </ul>
                
                <div className={styles.contact__info}>
                    <p>{text.contactoInfo.telf}: +593 2-393-1250</p>
                    <p>{text.contactoInfo.direccion}: Av. Atahualpa OE1-109 y Av. 10 de agosto</p>
                    <p>Quito - Ecuador</p>
                </div>

            </div>

            <div className={styles.logo__container}>
                <div className={styleLogoBar}></div>
                <a href='#'>
                    <img 
                        className={styles.logo__img} 
                        src={logoFilmCommision} 
                        alt={text.logo.textoAlternativo} 
                    />
                </a>
            </div>

            <div className={styles.logos__org}>
                <img src={logoIFCI} />
                <img src={logoMCYP} />
                <img />
            </div>

        </footer>
    )
}

export default Footer