import { Link } from "react-router"
import { currentUrl } from "../features/CustomTypes"

const NotFoundPage = () => {
    return (
        <>
        <div>
            <h1>Такой страницы не найдено</h1>
            <Link to={"/requests"}>
            <button>Домой</button>
            </Link>
        </div>
        {console.log(currentUrl)}
        </>
    )
}

export default NotFoundPage