import PropTypes from 'prop-types'
import styles from './SuppliersCard.module.css'
import rightArrow from '../../assets/icons/Icon-right-arrow.png'

const SuppliersCard = ({ idioma, proveedor }) => {
    
    return (
        <div className={styles.suppliers__card}>

            <div className={styles.container__text}> 
                <p className={styles.card__text}>
                    {proveedor.nombre}
                </p> 
                <img src={rightArrow} />
            </div>
            <a href={proveedor.link} className={styles.card__link}>
                {
                    idioma === "esp" ? "Más información" : "More information"
                }
            </a>

        </div>
    )
}

SuppliersCard.propTypes = {
    principalText: PropTypes.string.isRequired,
    hoverText: PropTypes.string.isRequired,
    urlMoreInfo: PropTypes.string.isRequired
}

export default SuppliersCard