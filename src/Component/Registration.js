import React, { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom';
import shortid from 'shortid';
import { userRegister } from '../redux/allAction';
import { useDispatch } from 'react-redux';

const Registration = () => {
    const dispatch = useDispatch()
    const history = useNavigate()
    const [inputField,setInputField]= useState({
        name:'',
        email:'',
        phone:'',
    });

    const inputHandle = (e)=>{
        setInputField({...inputField,[e.target.name]:e.target.value});
    }
    
    const submitButton=async()=>{
        Object.assign({id:shortid.generate()},inputField)
        // console.log(inputField) //to check data with id
        dispatch(userRegister(inputField))//to add in the state
        history('/') //to redirect homepage

    }
  return (
    <div className='container'>
        <div className='row login'>
            <h3 className='heading' style={{marginTop:'20px'}}>Add Registation</h3>
            <div className='col-md-2'></div>
            <div className='col-md-6'>
                <form autoComplete='off' action='/login-user' method='post'>
                <div className='mb-3'>
                    <label className='form-label'>User Name</label>
                    <input type='text' className='form-control' name='name' value={inputField.name} onChange={inputHandle} />
                 </div>
                 <div className='mb-3'>
                    <label className='form-label'> Email</label>
                    <input type='text' autoComplete='off' className='form-control' name='email' value={inputField.email} onChange={inputHandle} />
                 </div>
                 <div className='mb-3'>
                    <label className='form-label'>Phone</label>
                    <input type='text' autoComplete='off' className='form-control' name='phone' maxLength="10" value={inputField.phone} onChange={inputHandle} />
                 </div>
                 <div>
                    <button type="button" className='btn btn-primary' onClick={submitButton}>Add User</button>
                    <Link to="/home"><button type='button' id='addUserBtn' className='btn btn-success'>Back</button></Link>
                 </div>
                </form>
            </div>

        </div>
    </div>
  )
}

export default Registration