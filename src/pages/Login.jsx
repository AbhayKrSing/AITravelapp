
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login=()=>{
    const [User,setUser]=useState({

        email:"",
        password:""
    });
   const navigate=useNavigate();
  
    const HandleInput=(e)=>{
    //   console.log(e);
      let name=e.target.name;
      let value=e.target.value;
      setUser({
        ...User,
        [name]:value,
      })
      
    }
    const handleClick=()=>{
        navigate('/register');
    }
  
   return  <>
    <div className="registration-form-container">
     
    <div className="registration-form">
        <div className="registration-form-border">
            <h2 className="registration-heading">Sign In</h2>
            <form className="registration-grid" action="/register" method="POST" >
                <label className="registration-label">Email</label>
                <input 
                    className="registration-input" 
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    value={User.email} 
                    onChange={HandleInput}
                /><br/>
               
                <label className="registration-label">Password</label>
                <input 
                    className="registration-input" 
                    type="password"
                    name="password"
                    placeholder="Choose Strong Password"
                    autoComplete="off"
                    required
                    value={User.password} 
                    onChange={HandleInput}
                /><br/>
               <center><button className="registration-submit" type="submit">Sign In</button></center> 
               <center className='option-register'>
                <span >
                    OR <span className='option-register-text' onClick={handleClick}>REGISTER</span>
                </span>
               </center>
            </form>
        </div>
    </div>
</div>

    </>
}

export default Login;