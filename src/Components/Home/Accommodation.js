import { useLocation } from "react-router-dom"

function Accommodation() {
    const location = useLocation()
    const data = location.state
    console.log(data)

    return (
        <h1>Logement</h1>
    )
}

export default Accommodation