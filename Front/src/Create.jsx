import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Axios  from "axios";
import {useNavigate} from 'react-router-dom';

function Create() {
  const [data, setData] = useState({
    Name:"",
    Email:"",
    Age:""
  });

  const navigate= useNavigate();

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
    Axios.post("http://localhost:3000/Create" , data)
    .then(()=> {
      console.log("success")
      navigate("/")
    })
    .catch((error) => console.error('Error:', error));
  }

  return (
    <div>
      <form onSubmit={submit} style={{fontWeight:"bold", border:"2px solid black", width:"600px", margin:"10% auto", padding:"10px"}}> 
      <h1>Create</h1>
      <br />
      <TextField id="outlined-basic" required label="Name" variant="outlined" margin="normal" style={{width:"500px"}} name="Name" onChange={handleInputData}/>
      <br />
      <TextField id="outlined-basic" required label="Email" variant="outlined" margin="normal" style={{width:"500px"}} name="Email" onChange={handleInputData}/>
      <br />
      <TextField id="outlined-basic" required label="Age" variant="outlined" margin="normal" style={{width:"500px"}} name="Age" type='number' onChange={handleInputData}/>
      <br />
      <Button variant="contained" type='submit'>Submit</Button>
      </form>
    </div>
  )
}

export default Create