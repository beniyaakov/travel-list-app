import { useState } from "react";
import ListItem from "./ListItem";



export type InitialItemsType = {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
};

type propsItem  = { 
  items:InitialItemsType[]
  handelDelete:(id:number) => void
  handelCheckbox:(id:number) => void
  handelClearList:() => void
}



export default function PackingList({items,handelDelete,handelCheckbox,handelClearList}:propsItem) {
  
  const [sortBy,setSortBy] = useState<string>("input")
  let sortedItems:InitialItemsType[] = []

  if(sortBy === "input") sortedItems = items

  if(sortBy === "description") sortedItems = items.slice().sort((a,b)=> a.description.localeCompare(b.description))

    if(sortBy === "packed") sortedItems = items.slice().sort((a,b)=> Number(a.packed) - Number(b.packed))

      
  
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => {
          return <ListItem {...item} key={item.id} handelDelete={handelDelete} handelCheckbox={handelCheckbox}/>;
        })}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description </option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={handelClearList}>Clear list</button>
      </div>
    </div>
  );
}
