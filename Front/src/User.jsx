import React, {useEffect, useState}from 'react'
import {Table, Button} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Axios  from "axios";
import { useNavigate } from 'react-router-dom';


function User() {
    const [data, setData] = useState([]);
    const navigate= useNavigate();

    useEffect(()=>{
        Axios.get("http://localhost:3000/")
        .then(res => setData(res.data))
        .catch(e => console.log(e));
    },[])

    let deleteUser = (id)=>{
        Axios.delete(`http://localhost:3000/${id}`)
        .then(res => {
            setData(res.data);
            window.location.reload();
            navigate("/")
        })
        .catch(e => console.log(e));
    } 
  return (
    <div>
        <Link to="/Create" className='btn btn-success' style={{margin:"20px"}}>Create +</Link>
        <Table striped bordered hover style={{ width: '500px', justifyContent:"center", margin:"10px auto"}} >
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th colSpan="2">Buttons</th>
                </tr>
            </thead>
            <tbody>
                   {
                    data.map(user => {
                        return <tr key={user._id}>
                            <td> {user.Name}</td>
                            <td> {user.Email}</td>
                            <td> {user.Age}</td>
                            <td><Link to={`/Update/${user._id}`} className='btn btn-primary'>Update</Link></td>
                            <td><Button variant="danger" onClick={(e)=> deleteUser(user._id)}>Delete</Button></td>
                        </tr>
                    })
                   }
            </tbody>
            
        </Table>
        
    </div>
        
  )
}

export default User