import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link mr-4" href="https://www.google.com">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-4" href="https://www.google.com">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-4" href="https://www.google.com">Dental Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-4 text-white" href="https://www.google.com">Reviews</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-4 text-white" href="https://www.google.com">Blogs</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-4 text-white" href="https://www.google.com">Contact Us</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;