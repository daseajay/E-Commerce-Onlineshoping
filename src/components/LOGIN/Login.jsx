import "./Login.css"
import logo from "../../assets/images/2.png"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
     
       const [formdata,setformdata] =  useState({username:'',email:"",password:"",terms:""});
           const [Formerrors,setFormErrors] = useState({});
           
           const Navigate = useNavigate()
     
         const handalinput = (e) =>{
         if(e.target.name === "terms"){
            setformdata({
              ...formdata,
              terms: e.target.checked ? e.target.value : ""
            })
         }
         else{
          setformdata({
            ...formdata,
            [e.target.name]: e.target.value
          })
         }
       }

       const handalsubmit = (e) =>{
        e.preventDefault();
        if(validateform()){
          Navigate("/home")
          console.log("send to data server",formdata);
        }
       }


       const validateform = ()=>{
         let isvalid = true;
           let errors = {};
            if(formdata.username === ""){
              errors.username = "username is required"
              isvalid = false;
            }
            if(formdata.email === ""){
              errors.email = "username is required"
              isvalid = false;
            }
            if(formdata.password === ""){
              errors.password = "username is required"
              isvalid = false;
            }
            if(formdata.terms === ""){
              errors.terms = ""
              isvalid = false;
            }

            setFormErrors(errors)
          return isvalid;
       }

       console.log(Formerrors);

  return (
    <div className="contain">
       <div className="container-fluid">
         <div className="row">
            <div className="col-md-6">
              <img src={logo} alt="" className="w-100"/>
            </div>
            <div className="col-md-6 form-container my-lg-5 py-lg-5">
               <form onSubmit={(e)=>handalsubmit(e)}>
                 <h2 className="mt-3 header">LOGIN FORM</h2>
                <div className="inputdiv">
                  <label className="fw-bold">UserName</label>
                  <input type="text" className="form-control" name="username" value={formdata.username} onChange={(e)=>handalinput(e)}/>
                  {Formerrors.username && <span className="sp">{Formerrors.username}</span>}
                </div>
                <div className="inputdiv">
                  <label className="fw-bold">Email</label>
                  <input type="email" className="form-control" name="email" value={formdata.email} onChange={(e)=>handalinput(e)}/>
                  {Formerrors.username && <span className="sp">{Formerrors.username}</span>}
                </div>
                <div className=" inputdiv">
                  <label className="fw-bold">Password</label>
                  <input type="password" className="form-control" name="password" value={formdata.password} onChange={(e)=>handalinput(e)}/>
                  {Formerrors.password && <span className="sp">{Formerrors.password}</span>}
                </div>
                <div className="d-flex justify-content-evenly mt-3">
                <div className="fw-bold">
                  <input type="checkbox" name="terms" value="yes" onChange={(e)=>handalinput(e)}/>Remember me
                  {Formerrors.terms && <span className="sp">{Formerrors.terms}</span>} 
                </div>
                <div className="fw-bold">
                  <p>forget password ?</p>
                </div>
                </div>
                <div className="inputdiv text-center ">
                  <input type="submit"value="register" className="btn btn-success w-100 text-uppercase "/>
                </div>
               </form>
            </div>
         </div>
       </div>
    </div>
  )
}

export default Login
