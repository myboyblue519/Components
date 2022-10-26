const PetComponent = (props) => {
  const { name, type, picture, size } = props.animalDetails
  return (
    <li>
      <h2>{name}</h2>
      <p>Type: {type}</p>
      <p>Size: {size}</p>
      <img src={picture} alt={`An adorable ${type}`}/>
    </li>
  )
}

export default PetComponent