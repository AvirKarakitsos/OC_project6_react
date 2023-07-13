import { Link } from "react-router-dom"

function Error() {
    return (
        <div className="container">
            <p>404</p>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <p><Link to="/">Retourner sur la page d'accueil</Link></p>
        </div>
    )
}

export default Error