import { useNavigate } from 'react-router-dom'
import SliderImages from '../SliderImages/SliderImages'
import styles from './Locations.module.css'

const Locations = ({ text }) => {
  const navigate = useNavigate()

  const handleOnClick = () => {
    navigate('/locations')
  }

  return (
    <>
      <div className={styles.locations}>
        <p>
          {text.locacionSeccion.parrafo.uno}
        </p> <br/>
        <p>
          {text.locacionSeccion.parrafo.dos}
        </p> <br/>
        <p>
          {text.locacionSeccion.parrafo.tres}
        </p> <br/>
      </div>
      
      <SliderImages text={text} />

      <button
        onClick={handleOnClick}
        className={styles.button}
      >
        {text.locacionSeccion.button}
      </button>
    </>
  )
}

export default Locations