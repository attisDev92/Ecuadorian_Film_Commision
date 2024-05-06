import PropTypes from 'prop-types'
import styles from './MoreInfo.module.css'

const MoreInfo = ({ text }) => {

    return (
        <div className={styles.moreInfo__container}>
            <p>
                {
                    text.idioma === 'esp' 
                        ? 'más información:' 
                        : 'more information: '
                }
                 
            </p>
            <button>
                {
                    text.idioma === 'esp' 
                        ? 'Contacto' 
                        : 'Contact'
                }
            </button>
        </div>       
    )
}

MoreInfo.propTypes = {
    urlContact: PropTypes.string.isRequired
}

export default MoreInfo