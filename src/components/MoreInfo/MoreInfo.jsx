import styles from './MoreInfo.module.css'

const MoreInfo = ({ text }) => {

    const handleOnClick = () => {
        const destinatario = 'audiovisuales.ifci@creatividad.gob.ec'
        const link = `mailto:${destinatario}`
        window.location.href = link
    }   

    return (
        <div className={styles.moreInfo__container}>
            <p>
                {
                    text.idioma === 'esp' 
                        ? 'más información:' 
                        : 'more information: '
                }
                 
            </p>
            <button onClick={handleOnClick}>
                {
                    text.idioma === 'esp' 
                        ? 'Contacto' 
                        : 'Contact'
                }
            </button>
        </div>       
    )
}

export default MoreInfo