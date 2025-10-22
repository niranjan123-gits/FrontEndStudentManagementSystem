import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
import { Link ,useParams} from 'react-router-dom';
const Home = () => {
    const {id}=useParams();

    const[users,setUsers]=useState([])
     useEffect(()=>{
        loadUsers();
     },[]);

     const loadUsers=async()=>{
        const result=await axios.get("http://localhost:8080/api/student/users");
        setUsers(result.data);

     }
     const delteUser=async(id)=>{
        await axios.delete(`http://localhost:8080/api/student/user/${id}`)
        loadUsers();
     }

  return (
    <div className='container'>
 
<div className='py-4'>

<table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">FirstName</th>
      <th scope="col">userName</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
        users.map((user,index)=>(
             <tr>
      <th scope="row" key={index}>{index+1}</th>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>
       
         <Link className='btn btn-outline-primary mx-2' to={
            `/edituser/${user.id}`
         }>Edit</Link>
          <Link className='btn btn-danger mx-2' onClick={()=>delteUser(user.id)}>Delete</Link>
      </td>
    </tr>
            
        ))
    }
    
   
    
  </tbody>
</table>

</div>

    </div>
  )
}

export default Home