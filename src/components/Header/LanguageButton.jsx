import styles from './Header.module.css'
import espIcon from '../../assets/esp_bandera.png'
import ukIcon from '../../assets/uk_bandera.png'
import { useEffect, useState } from 'react'

const LanguajeButton = ({ handleChangeLanguaje, text }) => {
    
    const [styleEsp, setStyleEsp] = useState(styles.language__link)
    const [styleUK, setStyleUK] = useState(styles.language__link)
    
    useEffect(() => {
        if (text.idioma === 'esp') {
            setStyleEsp(styles.language__link__hover)
            setStyleUK(styles.language__link)
        } else if (text.idioma === 'eng') {
            setStyleUK(styles.language__link__hover)
            setStyleEsp(styles.language__link)
        }
    }, [text.idioma])
    

    return (
        <div className={styles.language__buttons}>
            <a 
                className={styleUK} 
                onClick={() => handleChangeLanguaje('english')}
            >
                <img 
                    className={styles.language__img} 
                    src={ukIcon} 
                    alt='English'
                />
                <p>ENG</p>
            </a>

            <a 
                className={styleEsp} 
                onClick={() => handleChangeLanguaje('español')}
            >
                <img 
                    className={styles.language__img} 
                    src={espIcon} 
                    alt='Español' 
                />
                <p>ESP</p>
            </a>
            
        </div>
    )
}

export default LanguajeButton