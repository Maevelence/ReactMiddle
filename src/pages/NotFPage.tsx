import { Link } from "react-router"

const NotFoundPage = () => {
    return (
        <>
        <div>
            <h1>Такой страницы не найдено</h1>
            <Link to={"/login"}>
            <button>Домой</button>
            </Link>
        </div>
        </>
    )
}

export default NotFoundPage