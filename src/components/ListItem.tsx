import { InitialItemsType } from "./PackingList";


type propsObj = InitialItemsType & {
  handelDelete:(id:number) => void
  handelCheckbox:(id:number) => void
}

// id,quantity,packed
export default function ListItem({packed,quantity,description,id,handelDelete,handelCheckbox}: propsObj) {

  
 

  return (
    <li>
      <input type="checkbox" value={packed ? "true" : "false"} onChange={() => handelCheckbox(id)} />
      <span style={packed ? {textDecoration:"line-through"} : {}}>
        {quantity} {description}
      </span>
      <button onClick={()=> handelDelete(id)}>❌</button>
    </li>
  );
}
