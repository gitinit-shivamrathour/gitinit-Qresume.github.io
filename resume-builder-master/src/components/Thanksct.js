import React from "react";
import { Outlet } from "react-router-dom";

const Thanksct = () => {
    return (
        <div className="container">
            <div class="card text-center position-absolute top-50 start-50 translate-middle">
                <div class="card-header text-warning">
                    Feedback Submitted !
                </div>
                <div class="card-body">
                    <p class="card-text my-2">Thanks for getting in touch!

                        We have received your message and would like to thank you for writing to us. If your inquiry is urgent, please use the telephone number listed below to talk to one of our staff members.

                        Otherwise, we will reply by email as soon as possible.

                        Talk to you soon - <b>Q.resume</b>
                    </p>
                </div>
            </div>

            <Outlet />
        </div >
    );
}

export default Thanksct;
