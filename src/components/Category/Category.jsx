import styles from './Category.module.css'

const Category = ({ category }) => {

  return (
    <a  className={styles.category}>
      <img src={`/assets/${category.img}`} />
      <h5>
        {category.name}
      </h5>
    </a>
  )
}

export default Category