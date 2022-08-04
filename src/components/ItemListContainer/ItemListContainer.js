import ItemCount from "./ItemCount";

function ItemListContainer(props) {
    const onAdd = (quiantity) => {
        alert(`agregados ${quiantity} unidades`)
      };

    return (
        <>
        <h1 className=''>{props.name}</h1>
        <div>
        <ItemCount  initial={1} stock={5} onAdd={onAdd}/>
      </div>
      </>
    )
}


export default ItemListContainer; 

 