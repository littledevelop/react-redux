import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteUser } from '../redux/allAction'

const List = ({user}) => {
   const {name,email,phone,id}=user
   const dispatch = useDispatch()
  return (
    <tr>
    <td>{name}</td>
    <td>{email}</td>
    <td>{phone}</td>
    <td><Link to={`/edit-user/${id}`}><button type='button' className='btn btn-primary'>Edit</button></Link></td>
    <td><button type='button' className='btn btn-danger' onClick={()=>dispatch(deleteUser(id))}>Delete</button></td>

</tr>
  )
}

export default List