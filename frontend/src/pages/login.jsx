import React from 'react'

function Login() {
    const LoginFn=()=>{
        let userName = document.getElementById("user");
        let pass = document.getElementById("pass");
        if(userName.value && pass.value)
        {
           alert("Login Chal Raha Hai");
        }else
        {
           alert("Fill the all details");
        }
    }
  return (
             <>
             <div className='flex items-center justify-center h-screen'>
             <div className='border rounded-2xl bg-amber-100 p-2 w-fit '>
                <div>
                    <form action="">
                     <div className='text-left'>
                    <label htmlFor="user" className='block '>User Name:</label>
                    <input type="text" id='user' className='border rounded-2xl p-2' required placeholder='example@123'/>
                    </div>
                    <br />
                    
                    <div className='text-left' >
                    <label htmlFor="pass" className='block'>Password:</label>
                    <input type="password" id="pass" className='border rounded-2xl p-2'  required/>
                    </div>
                    <br />
                    <br />

                    <button onClick={LoginFn} className='border rounded-2xl p-2'>Login</button>
                    </form>
                </div>
                </div>
             </div>
             
             </>
  )
}

export default Login