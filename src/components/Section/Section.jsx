import MoreInfo from '../MoreInfo/MoreInfo'
import styles from './Section.module.css'

const Section = (props) => {
  return (
    <section id={props.id} className={styles.container__sections}>
      
      <h2>{props.title}</h2>
      
      {props.children}
      
      <MoreInfo text={props.text} />
    
    </section>
  )
}

export default Section