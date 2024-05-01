const DocumentList = ({ documento }) => {
  return (
    <li>
      <a href={documento.link}>
        {documento.nombre}
      </a>
    </li>
  )
}

export default DocumentList