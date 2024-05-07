import styles from './SuppliersCard.module.css'
import rightArrow from '/Icon-right-arrow.png'

const SuppliersCard = ({ 
    idioma, 
    proveedor 
}) => {
    
    return (
        <div className={styles.suppliers__card}>
            <p className={styles.card__text}>
                {proveedor.nombre}
            </p> 
            <a 
                href={proveedor.link} 
                className={styles.card__link}
            >
                <img src={rightArrow} />
                {
                    idioma === "esp" 
                        ? "Más información" 
                        : "More information"
                }
            </a>
        </div>
    )
}

export default SuppliersCard