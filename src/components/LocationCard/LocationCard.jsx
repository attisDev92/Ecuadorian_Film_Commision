import styles from './LocationCard.module.css'

const LocationCard = ({ image }) => {

  return (
    <div className={styles.card}>
      <img src={`/assets/images/${image.src}`} />
    </div>
  )
}

export default LocationCard