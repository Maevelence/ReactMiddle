import { useAppSelector } from "../../features/Hooks"
import { RequestItem } from "./Request"

export function ItemList() {
  const items = useAppSelector(state => state.items)
  return (
    <>
    {items.length > 0 ? items.map(
      item => <RequestItem key={item.id} {...item}/>
      ) : <h3>Вы свободны</h3>}
    </>
  )
}
