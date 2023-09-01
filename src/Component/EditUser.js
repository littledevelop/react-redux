import React, { Component } from 'react'
import { Navigate,Link } from 'react-router-dom'
import {connect } from 'react-redux'
import { userInfo } from '../redux/allAction'
export class EditUser extends Component {
    constructor(props){
        super(props)
        this.state={
            uname:'',
            email:'',
            phone:'',
            redirect:false
        }
    }
    componentDidMount(){
      this.props.getUserDetail(this.props.match.params.id)
       console.log(this.props)
    }
    componentDidUpdate(){}
    inputHandle=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
  render() {
    const {uname,email,phone}= this.state
    const {redirect}=this.state;
    if(redirect){
        return <Navigate to="/home" />
    }
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
                    <h2 className="text-uppercase text-center mb-5">Change User Info</h2>
                    <form autoComplete="off" action="/login-user" method="post">
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          className="form-control"
                          name="uname"
                          value={uname}
                          onChange={this.inputHandle}
                        />
                        <label className="form-label" htmlFor="form3Example1cg">
                        Name
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example3cg"
                          autoComplete="off"
                          className="form-control"
                          name="email"
                          value={email}
                          onChange={this.inputHandle}
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
                          value={phone}
                          onChange={this.inputHandle}
                        />
                        <label className="form-label">Phone</label>
                      </div>

                      <div className="d-flex justify-content-center">
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={this.submitButton}
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

    )
  }
}
const mapStateToProps=(state)=>{
    return{
        myUsers:state.user
    }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    getUserDetail:(id)=>{dispatch(userInfo(id))}
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(EditUser)