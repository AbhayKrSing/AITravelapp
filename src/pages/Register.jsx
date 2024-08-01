
import { useState } from 'react';

const Register=()=>{
    const [User,setUser]=useState({
        username:"",
        email:"",
        phone:"",
        password:""
    });
  
  
    const HandleInput=(e)=>{
    //   console.log(e);
      let name=e.target.name;
      let value=e.target.value;
      setUser({
        ...User,
        [name]:value,
      })
      
    }

  
   return  <>
    <div className="registration-form-container">
     
    <div className="registration-form">
        <div className="registration-form-border">
            <h2 className="registration-heading">Registration Form</h2>
            <form className="registration-grid" action="/register" method="POST" >
                <label className="registration-label">UserName</label>
                <input 
                    className="registration-input" 
                    type="text" 
                    name="username"
                    placeholder="Your Name"
                    value={User.username} 
                    autoComplete="off"
                    required
                    onChange={HandleInput}
                /><br/>
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
                <label className="registration-label">Phone</label>
                <input 
                    className="registration-input" 
                    type="number"
                    name="phone"
                    placeholder="Phone number"
                    autoComplete="off"
                    required
                    value={User.phone} 
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
               <center><button className="registration-submit" type="submit">Register</button></center> 
            </form>
        </div>
    </div>
</div>

    </>
}

export default Register;