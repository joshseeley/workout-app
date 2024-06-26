const { Link } = require("react-router-dom")


const Navbar = () => {

    return (
        <header>
            <div className="container">
                <Link to="/">
                <h1>workout body</h1>
                </Link>
            </div>
        </header>
    )
}

export default Navbar