import { useEffect } from "react";
import { ItemList } from "../widgets/ItemList";
import { useAppSelector } from "../features/Hooks";

export default function RequestsPage() {
  const items = useAppSelector(state => state.items)
  useEffect(()=>{},[items])
  return (
    <>
    <h2>Список заявок</h2>
    <a href="/requests/new"><button className="btn">Добавить заявку в список</button></a>
    <ItemList />
    </>
  )
}
