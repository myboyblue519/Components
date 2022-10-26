import PetComponent from "./PetComponent"

const PetListComponent = (props) => {
    return (
      <ul>
         {
          props.animalsList.map((animal) => {
            return (
             <PetComponent animalDetails={animal} key={animal.id} />
            )
          })
        }
      </ul>
    )
  }

  export default PetListComponent