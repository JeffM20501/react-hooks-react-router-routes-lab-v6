import NavBar from "../components/NavBar"
import { useRouteError } from "react-router-dom"
function ErrorPage() {
    const error=useRouteError()
    console.log(error)
    return (
        <div>
            <header><NavBar/></header>
            <h1>Oops! Looks like something went wrong.</h1>
            <p>{error.statusText || error.message}</p>
        </div>

    )
}

export default ErrorPage