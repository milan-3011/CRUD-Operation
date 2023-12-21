import React, {useState, useEffect} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useParams, useNavigate } from 'react-router-dom';
import Axios  from "axios";


function Update() {
  const {id} = useParams();
  const [data, setData] = useState({
    Name:"",
    Email:"",
    Age:""
  });
  const navigate= useNavigate();

  useEffect(()=>{
    Axios.get(`http://localhost:3000/Update/${id}`)
    .then(res => setData(res.data))
    .catch(e => console.log(e));
  },[id])

  let handleInputData=(e)=>{
    setData(currdata=> {
      return {
        ...currdata,
        [e.target.name]:e.target.value
      }
    })
  }

  let submit = (e)=>{
    e.preventDefault();
    Axios.put(`http://localhost:3000/Update/${id}`, data)
    .then(()=> {
      console.log("success")
      navigate("/")
    })
    .catch((error) => console.error('Error:', error));
  }

  return (
    <div>
      <form  onSubmit={submit} style={{fontWeight:"bold", border:"2px solid black", width:"600px", margin:"10% auto", padding:"10px"}}> 
      <h1>Update</h1>
      <br />
      <TextField id="outlined-basic" label="Name" variant="outlined" margin="normal" required style={{width:"500px"}} value={data.Name} onChange={handleInputData} name='Name'/>
      <br />
      <TextField id="outlined-basic" label="Email" variant="outlined" margin="normal" required style={{width:"500px"}} value={data.Email} onChange={handleInputData} name='Email' />
      <br />
      <TextField id="outlined-basic" label="Age" variant="outlined" type='number' required margin="normal" style={{width:"500px"}} value={data.Age} onChange={handleInputData} name='Age'/>
      <br />
      <Button variant="contained" type='submit'>Update</Button>
      </form>
    </div>
  )
}

export default Update