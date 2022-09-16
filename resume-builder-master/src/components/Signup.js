import React from "react";
import { Outlet, Link } from "react-router-dom";

const Signup = () => {
    return (
        <div className="container mt-5">
            <div className="card border-warning mb-5 mx-auto" style={{ 'max-width': '46rem' }}>
                <div className="card-body">
                    <form>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">First Name</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>

                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Last Name</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>

                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <button type="submit" className="my-4 btn btn-warning mx-auto d-grid gap-2">Sign up</button>
                    </form>
                </div>
                <div className="card-header text-center text-warning">Existing user?
                    <Link to="/login" className="text-decoration-none"> Login. </Link></div>
            </div>


            <Outlet />
        </div>
    );
}

export default Signup;