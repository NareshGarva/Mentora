import React from 'react'

function Register() {
    const RegFn=(e)=>{

         e.preventDefault();
     let fname = document.getElementById("name");
     let email = document.getElementById("email");
     let setpass = document.getElementById("setPass");
    //  const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
     let message = document.getElementById("mes");
     let eMsg = document.getElementById("eMes")
     let passMsg = document.getElementById("passMsg");

     

         if(fname.value.trim()== "")
         {
            message.classList.remove("hidden");
         }
         if(email.value.trim()=="")
         {
            console.log(email.value);
            // eMsg.classList.remove("hidden");
         } else {
             alert("Form Subbmited",fname.value,email.value,setpass.value);
         }

       
    }
  return (
     <>
       <div>

        <div className='flex items-center justify-center h-screen '>
            <div className=' rounded-2xl  w-fit p-5 text-left bg-gray-50 '>
              <h1 className='font-bold text-3xl'>Create your account</h1>
              <br />
              <p>Join our community and start your mentorship journey</p>
              <br />
                <form>
                  <div>
                <label htmlFor="name" className='block font-bold'  >Full Name:</label>
                <input type="text" name='name' id='name' className='border-2 border-gray-400  bg-white rounded-xl p-2 w-98'  placeholder='Enter Your Full Name' />
                <p id='mes' className='hidden text-red-500'  >Please enter full name </p>
                </div>
                <br />
                
                <div>
                <label htmlFor="email" className='block font-bold '>Email:</label>
                <input type="email" name="email" id="email" className='border-2 border-gray-400  bg-white rounded-xl p-2 w-98' placeholder='Enter your email'/>
                <p id='eMsg' className=' hidden text-red-500'>Enter Your Email</p>
                </div>
                 <br />
                 

                 <div>
                 <label htmlFor="setPass" className='block font-bold' >Set Password:</label>
                 <input type="password" id='setPass' className='border-2 border-gray-400  rounded-xl bg-white w-98 p-2' placeholder='Create Password'/>
                 <p id='passMsg' className='hidden text-red'>Enter Strong Password</p>
                 </div>
                 <br />
                 <div>
                 <label htmlFor="cPass" className='block font-bold'  >Confirm Password:</label>
                 <input type="password" id='cPass' className='border-2 border-gray-400  rounded-xl w-98 bg-white p-2'placeholder='Confirm Password'/>
                 </div>
                 <br />
                
                <label htmlFor="role" className='block font-bold'>I am</label>
                <select name="role" id="role" className='border-2 p-2 rounded-xl border-gray-400  w-98 bg-white'>
                    <option value="mentee">Mentee seeking mentorship</option>
                    <option value="mentor">Mentor offering guidance</option>
                </select>
                <br />
                <br />

                 <button onClick={RegFn} className='border-2 border-gray-400  rounded-xl p-2 w-98  bg-blue-900 text-white' >Create account</button>
        
</form>
            </div>
        </div>
       </div>
     
     </>
  )
}

export default Register