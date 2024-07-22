import { useState } from "react";
import Header from "./layout/Header";
import PackingList from "./components/PackingList";
import Stats from "./layout/Stats";
import Form from "./components/Form";
import { InitialItemsType } from "./components/PackingList";


function App() {
  const [items, setItem] = useState<InitialItemsType[]>([]);

  
  function handelItems(item:InitialItemsType){
    setItem(items => [...items,item])
  } 

  function handelDelete(id:number){
    const newObject = items.filter((item)=> item.id !== id)
      setItem(newObject)
  }

  function handelCheckbox(id:number){
    const newObj = items.map((item)=>item.id === id ? {...item,packed:!item.packed} : item )
    setItem(newObj) 
  }

  function handelClearList (){
    const  confirmed = confirm("are you sure you want to delete all items?")
    
    if (confirmed) setItem([])
    
  }
  

  return (
    <div className="app">
      <Header />
      <Form onAddItems={handelItems} />
      <PackingList items={items} handelDelete={handelDelete} handelCheckbox={handelCheckbox} handelClearList={handelClearList}/>
      <Stats items={items} />
    </div>
  );
}

export default App;
