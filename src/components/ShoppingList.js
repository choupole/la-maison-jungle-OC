import { plantList } from "../datas/plantList"

function ShoppingList() {
    const renderedItems = [];
  
    plantList.forEach((plant) => {
        //ici on fait une boucle sur nos plante et on utilise l'id comme key 
        renderedItems.push(<li key={plant.id}>{plant.name} {plant.isBestSale ? <span>🔥</span> : null}</li> );
      });
    return (
        <ul>
        {renderedItems}
        </ul>
    )
}

export default ShoppingList