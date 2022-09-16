import React from "react";
import { Link, Outlet } from "react-router-dom";

const Contact = () => {
    return (
        <div className="container mt-3">
            <div className="card ">
                <div className="card-body mt-3">
                    <h2 className="card-title text-warning text-center lg">Send your feedback for us.</h2>
                </div>

                <form>
                    <div class=" m-4 mb-3 mt-1">
                        <label for="exampleFormControlInput1" class="form-label">Your Name</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Name...." required />
                    </div>
                    <div class=" m-4 mb-3">
                        <label for="exampleFormControlInput1" class="form-label" >Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@e-mail.com" required />
                    </div>
                    <div class="m-4 mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Message for us</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Text Starts Here!...." required></textarea>
                    </div>
                    <Link to="/thanksct" className="text-decoration-none">
                        <button type="submit" className=" my-3 text-white btn btn-warning d-grid gap-2 mx-auto">Message</button>
                    </Link>
                </form>

                <a href="https://e-mailer.link/100188649623" className="nav-link">
                    <div className="card-footer text-muted text-center">
                        Also you can sent message on our e-mail : apps24adda@gmail.com
                    </div>
                </a>
            </div>

            <Outlet />
        </div>
    );
}

export default Contact;