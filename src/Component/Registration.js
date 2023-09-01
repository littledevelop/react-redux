import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import shortid from "shortid";
import { userRegister } from "../redux/allAction";
import { useDispatch } from "react-redux";

const Registration = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [inputField, setInputField] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const inputHandle = (e) => {
    setInputField({ ...inputField, [e.target.name]: e.target.value });
  };

  const submitButton = async () => {
    Object.assign({ id: shortid.generate() }, inputField);
    // console.log(inputField) //to check data with id
    dispatch(userRegister(inputField)); //to add in the state
    history("/"); //to redirect homepage
  };
  return (
    <>
      <section
        className="vh-100 bg-image"
        style={{
          backgroundImage: `url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')`,
        }}
      >
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{ borderRadius: `15px` }}>
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">
                      Add User Info
                    </h2>
                    <form autoComplete="off" action="/login-user" method="post">
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          value={inputField.name}
                          onChange={inputHandle}
                        />
                        <label className="form-label" htmlFor="form3Example1cg">
                          User Name
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example3cg"
                          autoComplete="off"
                          className="form-control"
                          name="email"
                          value={inputField.email}
                          onChange={inputHandle}
                        />
                        <label className="form-label" htmlFor="form3Example3cg">
                          {" "}
                          Email
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          autoComplete="off"
                          className="form-control"
                          name="phone"
                          maxLength="10"
                          value={inputField.phone}
                          onChange={inputHandle}
                        />
                        <label className="form-label">Phone</label>
                      </div>

                      <div className="d-flex justify-content-center">
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={submitButton}
                        >
                          Add User
                        </button> &nbsp;
                        <Link to="/home">
                          <button
                            type="button"
                            id="addUserBtn"
                            className="btn btn-success"
                          >
                            Back
                          </button>
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Registration;
