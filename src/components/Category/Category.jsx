import styles from './Category.module.css'

const Category = ({ category }) => {

  return (
    <a  className={styles.category}>
      <h4>{category.name}</h4>
      <img src={`src/assets/images/locations/${category.img}`} />
    </a>
  )
}

export default Category