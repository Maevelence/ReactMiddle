import { ItemList } from "../widgets/requests/ItemList";
import Header from "../shared/Header";

export default function RequestsPage() {


    return (
    <>
    <Header />
    <h2>Список заявок</h2>
    <a href="/requests/new"><button className="btn">Добавить заявку в список</button></a>
    <ItemList />
    </>
  )
  } 
  

