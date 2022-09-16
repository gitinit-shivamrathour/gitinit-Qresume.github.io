import React from "react";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
        return (
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark mt-4 rounded">
                    <div className="container-fluid">
                        <Link to="/" className="navbar-brand">🆀.🆁🅴🆂🆄🅼🅴</Link>
                        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li><Link to="/" class="nav-item nav-link">lı Home ıl</Link></li>
                                <li><Link to="/about" className="nav-item nav-link">Who we are ?</Link></li>
                                <li><Link to="/contact" className="nav-item nav-link">Contact us</Link></li>
                                <li><Link to="/template" className="nav-item nav-link">templates !</Link></li>
                            </ul>
                            <ul className="navbar-nav ms-auto">
                                <li><Link to="/support" className=" nav-item nav-link">Support</Link></li>
                                <li><Link to="/login" className="text-light nav-item nav-link">Login</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <Outlet />
            </div>
        );
    }

    export default Navbar;