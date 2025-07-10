import React from 'react'
import Logo from '../Login/Components/Logo v1 vertical.png'
import { NavLink } from "react-router-dom";

function Login() {
    
        let Count = 0;
        let Tcount =5;
        let Acount = 0;

        
      
 
    const LoginFn=()=>{
      const timerElement = document.getElementById("timer");
       const userName = document.getElementById("user");
    const pass = document.getElementById("pass");
     
        let inpass = document.getElementById("inpass");
        let inuse = document.getElementById("inuse");
        const btn = document.getElementById("btn");
        let Time = document.getElementById("lgg");


        

        
        if(userName.value == "naresh@123" && pass.value == '123456')
        {
           alert("Login succesfull");
        }else
        {
        
          
           inpass.classList.remove("hidden");
           inuse.classList.remove("hidden");
           Count++;
           userName.value =  ""
           pass.value = ""
           console.log(Count);
           if(Count == 3)
           {
            document.getElementById("btn").disabled = true;  
            btn.classList.add("cursor-not-allowed");
            Time.classList.remove("hidden");

            const timer = setInterval(() => {
            timerElement.innerHTML = Tcount;
            
            Tcount--;

             if (Tcount < 1) {
              clearInterval(timer); // Stop after 10 seconds
              document.getElementById("btn").disabled = false;  
              btn.classList.remove("cursor-not-allowed");
              inpass.classList.add("hidden");
              inuse.classList.add("hidden");
              Time.classList.add("hidden");
               userName.value =  ""
               pass.value = ""
               Count = 0;
               Tcount = 5 * 2;
             }
            }, 1000); 

        
           
}}
         
        
    }
  return (
             <>
             <div className='flex items-center justify-center h-screen'>
             <div className='border rounded-2xl bg-gray-50  p-2 w-fit '>
                <div className=' text-center p-5' > 
                  <div className=''>
                  <div className='flex justify-center items-center'>
                        <img src={Logo} alt="kya" className='h-12 w-12 rounded-4xl border  p-2'/> <br />
                  </div>
                  <h1 className='text-3xl text-red-500'>Welcome Back</h1> <br />
                      <p>Sign in to continue your mentorship journey</p>
               </div>
                      <br />
                      <br />
                    <form onSubmit={(e) => {
  e.preventDefault();
          LoginFn() } }>
                     <div className='text-left'>
                    <label htmlFor="user" className='block '>User Name</label>
                    <input type="text" id='user' className='border border-gray-400 rounded p-2 w-98' required placeholder='Enter User Name'/>
                    <p id='inuse' className='text-red-500 hidden'>Invalid username</p>
                    </div>
                    <br />
                    <div className='text-left' >
                    <label htmlFor="pass" className='block'>Password</label>
                    <input type="password" id="pass" className='border rounded p-2 w-98 border-gray-400' placeholder='Enter Your password' required/>
                    <p id='inpass' className='text-red-500 hidden'>Invalid password</p>
                    </div>
                    <br />
                    <button  id='btn'  type='submit' className='border rounded-xl p-3 w-98 bg-green-500  text-white text-2xl'>Login</button>
                    <p id='lgg' className='text-red-500 hidden'>You can try again after: <span id="timer">0</span> seconds</p>
                    <br />

                    
                    
                    </form>
                     <div>
                        <NavLink to="/Reset" className="text-blue-600" > Forget Password? </NavLink>
                    </div>

                </div>
                <div className='flex items-center justify-center gap-1 bg-gray-200 h-10'>
                  <p>Don't have an account? </p> 
                  <NavLink to='/Register' className='text-blue-600'> Create Account</NavLink>
                </div>
                <br />
                <div>
                    <footer className='flex items-start gap-3.5'>
                      <NavLink to='/home'>Home</NavLink>
                      <NavLink to='/contect'>Contect</NavLink>
                      <NavLink to='/help'>Help</NavLink>
                    </footer>
                </div>
                </div>
             </div>
             
             </>
  )
}


export default Login