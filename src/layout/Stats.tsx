import { InitialItemsType } from "../components/PackingList";

type StatsProps = {
  items:InitialItemsType[]
}


export default function Stats({ items }: StatsProps) {

  if(!items.length){
    return(
      <p className="stats">
        <em>Start adding some items to your packing list </em>
      </p>
    )
  }


  const numItem: number = items.length;
  const numPacked = items.filter(item => item.packed).length
  const percentage = Math.round((numPacked / numItem)*100)

  return (
    <footer className="stats">
      <em>
        {percentage === 100 ? "You got everything! Ready to go":
        `You have ${numItem} on your list, and you already packed ${numPacked} (${percentage}%)`
        }
        </em>
    </footer>
  );
}
