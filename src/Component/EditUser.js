import React, { Component } from 'react'
import { Navigate,Link } from 'react-router-dom'

export class EditUser extends Component {
    constructor(props){
        super(props)
        this.state={
            name:'',
            email:'',
            phone:'',
            redirect:false
        }
    }
    componentDidMount(){}
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
        <div className='container'>
        <div className='row login'>
            <h3 className='heading' style={{marginTop:'20px'}}>Add Registation</h3>
            <div className='col-md-2'></div>
            <div className='col-md-6'>
                <form autoComplete='off' action='/login-user' method='post'>
                <div className='col-md-3'>
                    <label className='form-label'>User Name</label>
                    <input type='text' className='form-control' name='name' value={uname} onChange={this.inputHandle} />
                 </div>
                 <div className='col-md-3'>
                    <label className='form-label'> Email</label>
                    <input type='text' autoComplete='off' className='form-control' name='email' value={email} onChange={this.inputHandle} />
                 </div>
                 <div className='col-md-3'>
                    <label className='form-label'>Phone</label>
                    <input type='text' autoComplete='off' className='form-control' name='phone' maxLength="10" value={phone} onChange={this.inputHandle} />
                 </div>
                 <div>
                    <button type="button" className='btn btn-primary' onClick={this.submitButton}>Edit User</button>
                    <Link to="/home"><button type='button' id='addUserBtn' className='btn btn-success'>Back</button></Link>
                 </div>
                </form>
            </div>

        </div>
    </div>

    )
  }
}

export default EditUser