import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="container">
            <div className="product py-2">
                <div className="details p-3">
                    <Link to="/" replace>Homepage</Link>.
                </div>
            </div>
        </div>
    )
}

export { NotFound }