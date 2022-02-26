import React,{useState} from 'react';
import axios from "axios";
 import {userLogin,showAlert} from "../Redux/Action";
import {Grid,Typography,Box,FormControl,TextField,Button,FormHelperText,Link} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
export default function RegisterPage() {
const dispatch=useDispatch();
    const history=useHistory();
// const {user,userLogin,logout,showAlert,alert}=useContext(UserContext);
const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const isEmpty=!name || !email ||!password || alert.show;
const onClear=()=>{
    setName("");
    setEmail("");
    setPassword("");
}
    const onSubmit=(e)=>{
        e.preventDefault();
axios.post("http://localhost:5000/register",{name,email,password}).then(d=>{
    console.log("token from d",d)
    if(d.data.token){
        
        dispatch(userLogin({userName:d.data.email,token:d.data.token}));
        
        onClear();
        dispatch(showAlert({msg:` ${d.data.email.split("@")[0]} Registered Successfully`,type:"success"}));
        history.push("/");
    }
}).catch(err=>{
    console.log(err);
    dispatch(showAlert({msg:"you have register error",type:"error"}));
     }
    
    )



    }
    return (
  
            <Grid style={{marginTop:70,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}} >

                <Grid  >
                    <Typography variant='h4'  style={{textAlign:'center'}}>Register</Typography>
                    <Box style={{display:"flex",border:'2px solid #F64c72',borderRadius:'20px',flexDirection:"column",gap:"20px",padding:'50px 40px',marginTop:'10px',boxShadow: '10px 8px 5px -5px rgba(0,0,0,0.62)',
WebkitBoxShadow: '10px 8px 5px -5px rgba(0,0,0,0.62)',
MozBoxShadow: '10px 8px 5px -5px rgba(0,0,0,0.62)'}} >
  
  <FormControl >

    <TextField label="Name" value={name} onChange={(e)=>setName(e.target.value)}></TextField>
    
</FormControl>  
<FormControl >

    <TextField type={"email"} label="Email"  value={email} onChange={(e)=>setEmail(e.target.value)}></TextField>
    
</FormControl>

<FormControl >
<TextField type={"password"} label="Password" value={password} onChange={(e)=>setPassword(e.target.value)}></TextField>
   
</FormControl>

{isEmpty?<Typography variant='h6' style={{color:"red"}}>Please enter all the fields</Typography>:<Button variant="outlined" id="button" type="submit" style={{color:"inherit",borderColor:"#F64c72"}} onClick={e=>onSubmit(e)}>Register</Button>}
<FormHelperText>Already Have Account? <Link underline='hover' color="inherit" onClick={()=>history.push("/login")} style={{cursor:'pointer'}}>Login Here</Link></FormHelperText>
    


</Box>
                </Grid>
                
            </Grid>
            
      
    )
}
