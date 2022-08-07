function Navbar() {
    const navStyle = {
        backgroundColor: "#e3f2fd",
    };
    return (


        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">Classroom</a>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Teacher </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Student</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/courses">Courses</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/add-course">Add Course</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;