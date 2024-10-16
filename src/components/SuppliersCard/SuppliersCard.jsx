import styles from './SuppliersCard.module.css'
import rightArrow from '/assets/images/Icon-right-arrow.png'
import { useState } from 'react'

const SuppliersCard = ({ 
    proveedor,
    text
}) => {

    const [ visible, setVisible ] = useState(false)
  
    const hideWhenVisible = { display: visible ? 'none' : '' }
    const showWhenVisible = { display: visible ? '' : 'none' }

    const cardVisibility = () => {
        setVisible(!visible)
    }

    const handleClockContact = () => {

        const destinatario = proveedor.mail;
        const link = `mailto:${destinatario}`;
        window.location.href = link;
    } 

    return (
        <>
        <div className={styles.suppliers__containers} style={showWhenVisible}>
            
            <div className={styles.container__info}>
                <button 
                className={styles.close}
                onClick={cardVisibility}
                >
                {
                    text.idioma === 'esp'
                    ? 'cerrar'
                    : 'close'
                }
                </button>

                <h3>{proveedor.nombre}</h3>

                <ul>
                    <li>
                        {text.proveedoresSeccion.contacttext}: {proveedor.contacto}
                    </li>
                    <li>
                        {text.proveedoresSeccion.phonetext}: {proveedor.telefono}</li>
                    <li>
                        {text.proveedoresSeccion.webtext}: 
                        <a target='blank' href={`http://${proveedor.link}`}>
                            {proveedor.link}
                        </a> 
                    </li>
                    <li>{text.proveedoresSeccion.mailtext}: {proveedor.mail}</li>
                </ul>

                <button 
                className={styles.contact}
                onClick={handleClockContact}
                >
                    {
                        text.idioma == 'esp'
                            ? 'Contactar'
                            : 'Contact'
                    }
                </button>
            </div>
            
        </div>

        <div className={styles.suppliers__card} style={hideWhenVisible}>
            
            <p className={styles.card__text}>
            {proveedor.nombre}
            </p>
            
            <a 
            onClick={cardVisibility}
            className={styles.card__link}
            >
                <img src={rightArrow} />
                {
                    text.idioma === "esp" 
                    ? "Más información" 
                    : "More information"
                }
            </a>
        </div>
        
        </>
    )
}

export default SuppliersCard