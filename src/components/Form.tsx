import { FormEvent, useRef } from "react";
import { InitialItemsType } from "./PackingList";


type FunctionProps = { 
  onAddItems: (item:InitialItemsType)=> void
}

export default function Form({onAddItems}:FunctionProps) {
  const description = useRef<HTMLInputElement>(null);
  const quantity = useRef<HTMLSelectElement>(null);


  function handelSubmit(e: FormEvent) {
    e.preventDefault();

    const newDescription = description.current!.value;
    const NewQuantity = Number(quantity.current!.value);

    if (!description) return
    // console.log(description.current?.value);
    const newItem = { description:newDescription, quantity:NewQuantity, packed: false, id: Date.now() };
    onAddItems(newItem)
    
    description.current!.value = '';
    quantity.current!.value = '1';
    
  }



  return (
    <form className="add-form" onSubmit={handelSubmit}>
      <h3>What do you need for your 😍 trip? </h3>
      <select name="" id="" ref={quantity}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => {
          return (
            <option value={num} key={num}>
              {num}
            </option>
          );
        })}
      </select>
      <input type="text" placeholder="item..." ref={description} />
      <button>Add</button>
    </form>
  );
}
