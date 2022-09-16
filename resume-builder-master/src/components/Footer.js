import React from "react";
import { Outlet } from "react-router-dom";

const Footer = () => {
    return (
        <div className="container">
            <footer className="navi bg-dark text-secondary text-center rounded-pill rounded-bottom container fixed-bottom">
                <div className="text-center p-2"></div>
                <div className="text-center"><span className="h4 text-light">Q.</span>resume</div>
            </footer >

            <Outlet />
        </div >
    );
}

export default Footer;
