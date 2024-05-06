import styles from './Menu.module.css'

const Menu = ({ text }) => {

    return (
        <nav className={styles.menu}>
            <div>
                <a href='#locations'>
                    {text.menu.locacion}
                </a>
                <a href='#documents'>
                    {text.menu.documentos}
                </a>
                <a href='#suppliers'>
                    {text.menu.proveedores}
                </a>
                <a href='#footer'>
                    {text.menu.contacto}
                </a>
            </div>
        </nav>
    )
}

export default Menu