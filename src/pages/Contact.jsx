import { useState } from "react";




const Contact=()=>{
     
    const [User,setUser]=useState({
        username:"",
        email:"",
        message:""
    })
  
   
    const HandleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setUser({
            ...User,
            [name]:value
        })
    }
   
        

    return<>
   <div className="contact-form-container">
    <div className="contact-form">
        <div className="contact-form-border">
            <h2 className="contact-heading">Contact Us</h2>
            <form className="contact-grid">
                <label className="contact-label">UserName</label>
                <input 
                    className="contact-input"
                    type="text"
                    name="username"
                    value={User.username}
                    onChange={HandleInput}
                    autoComplete="off"
                    required
                    placeholder="Enter Your Name"
                /><br/>
                <label className="contact-label">Email</label>
                <input
                    className="contact-input" 
                    type="email"
                    name="email"
                    value={User.email}
                    onChange={HandleInput}
                    autoComplete="off"
                    required
                    placeholder="Enter Your Email"
                /><br/>
                <label className="contact-label">Message</label>
                <textarea
                    className="contact-input"
                    name="message"
                    value={User.message}
                    onChange={HandleInput}
                    autoComplete="off"
                    required
                    placeholder="Enter Your Message Here"
                    rows="6"
                    cols="90"
                /><br/>
              <center> <button className="contact-submit" type="submit">Submit</button></center> 
              </form>
        </div>
    </div>
</div>
</>
}

export default Contact