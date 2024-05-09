import rightArrow from '/assets/images/Icon-right-arrow.png'
import styles from './DocumentList.module.css'

const DocumentList = ({ text, documento }) => {

  return (
    <li className={styles.list__container}>
      <p>{documento.nombre}</p> <br />
      <a href='#'>

        <img src={rightArrow} />
        {
          text.idioma === 'esp'
            ? 'más información'
            : 'show more'
        }
      </a>
      
    </li>
  )
}

export default DocumentList