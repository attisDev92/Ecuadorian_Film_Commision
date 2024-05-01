import PropTypes from 'prop-types'
import { useNavigate } from "react-router-dom"
import styles from './MoreInfo.module.css'

const MoreInfo = ({ text }) => {

    const navigateTo = useNavigate

    const handleOnCLick = () => {
        navigateTo('#')
    }

    return (
        <div className={styles.moreInfo__container}>
            <p>
                {
                    text.idioma === 'esp' ? 'más información:' : 'more information: '
                }
                 
            </p>
            <button onClick={handleOnCLick}>
                {
                    text.idioma === 'esp' ? 'Contacto' : 'Contact'
                }
            </button>
        </div>       
    )
}

MoreInfo.propTypes = {
    urlContact: PropTypes.string.isRequired
}

export default MoreInfo