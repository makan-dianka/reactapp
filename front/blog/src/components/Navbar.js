import { NavLink } from "react-router-dom"

export const Navbar = function () {
    return (
        <nav class="navbar navbar-expand-lg  bg-dark" data-bs-theme="dark">
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <NavLink to='/' className="nav-link active" aria-current="page">Home</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to='contact' className="nav-link">Contact</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to='about' className="nav-link">Apropos</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}