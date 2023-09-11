import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FunctionAddUser } from "../Redux/Action";

const Registration = () => {
    const [name, namechange] = useState('');
    const [email, emailchange] = useState('');
    const [phone, phonechange] = useState('');
    const dispatch=useDispatch();
    const navigate=useNavigate();

    
    const handlesubmit = (e) => {
        e.preventDefault();
        const userobj = { name, email, phone };
        dispatch(FunctionAddUser(userobj));
        navigate('/user');
    }

    return (
        <>
        <section
        className="vh-100 bg-image"
        style={{
          backgroundImage: `url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')`,
        }}
      >
        <div>
            <form onSubmit={handlesubmit}>
            <div className="mask d-flex align-items-center h-100 gradient-custom-3">

            <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
            <div className="card" style={{ borderRadius: `15px`,margin:10,marginTop:20}}>
            <div className="card-body p-5">
                    <div className="card-header" style={{ textAlign: 'left' }}>
                        <h2 className="text-uppercase text-center mb-5" > Add User Info</h2>
                    </div>
                    <div className="card-body" style={{ textAlign: 'left' }}>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input value={name} onChange={e => namechange(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Email</label>
                                    <input value={email} onChange={e => emailchange(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input value={phone} onChange={e => phonechange(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                        

                        </div>
                    </div>
                    <div className="card-footer" style={{ textAlign: 'left' }}>
                        <button className="btn btn-primary" type="submit">Submit</button> |
                        <Link className="btn btn-danger" to={'/user'}>Back</Link>
                    </div>
                   </div>
                   </div>
                   </div>
                   </div>
                </div>
                </div>
            </form>
        </div>
        </section>
        </>
    );
}

export default Registration;