import React from "react";
import { Outlet, Link } from "react-router-dom";

const Support = () => {
    return (
        <div className="container mt-3">
            <div className="card text-center">
                <div className="card-header">
                    <h2 className="text-warning">Donate 50-/₹ and Receive Varified Sponcership.</h2>
                </div>
                <div className="card-body">
                    <h4 className="card-title my-4">What About Sponcership ?</h4>
                    <p className="card-text my-5">If You Contribute 50 for Our Website Development and to fulfill the goal to Provide free learning to the poor students, <br/> You Will get an Sponcership with us (Q.resume) Instantly. <br/> Please <b>Note it</b> down that 50% of your donation will spend to fulfill the basic requirements of needy childrens.</p>
                    <a href="https://paytm.me/ksSz-Hx" className="btn btn-warning text-white">Sponcer Now</a>
                </div>
                <div className="card-footer text-muted">
                    <Link to="" className="nav-link text-secondary">#Download Sponcer Certificate By Submitting ScreenShot.</Link>
                </div>
            </div>

            <Outlet />
        </div>
    );
}

export default Support;