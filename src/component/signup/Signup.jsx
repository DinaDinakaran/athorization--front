import React from 'react'
import "./signup.css"
import { useNavigate } from "react-router-dom"
import { useFormik } from 'formik';
import * as yup from "yup"
import {url} from "../../App"


import axios from 'axios';


export default function Signup () {
  const navigate = useNavigate()
  const handleSubmit =async(value)=>{
    console.log(value)
    await axios.post(`${url}/signup`
    ,{
      userName : value.name,
      email :value.email,
      role :value.role,
      number : value.number,
      password :value.password,
    }).then((res)=>console.log(res))
    .catch((err)=>console.log(err)) 

    navigate("/signin")
  }



  const formik =useFormik({
    initialValues:{
        name:'',
        email:"",
        role:"",
        number:"",
        password:""
    },
    validationSchema:yup.object({
      name: yup.string().required('* required'),
      email: yup.string().required('* required').email("*Enter a Valid Email Address"),
      role : yup.string().required('* required'),
      number : yup.number().required('* required').min(10,"Enter valid number"),
      password : yup.string().required('* required')
    }
    ),
    onSubmit :(values)=>{
      handleSubmit(values);
    }
  })

 
  return (
    <div className= "fullbody">
    <div className="title">Sign Up</div>
    <div className='addstudent'>
      <form onSubmit={formik.handleSubmit}>
       <div className="alain">
       <label for="name" >Name</label>
        <input 
        id="name"
        name="name"
        type="text"
        className="inputval"
        placeholder='Enter Name'
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.name}
        />
       </div>
        {formik.touched.name && formik.errors.name?<div style={{color:"red"}}>{formik.errors.name}</div>:null}
      </form>
      <form onSubmit={formik.handleSubmit}>
       <div className="alain">
       <label for="email" >Email</label>
        <input 
        id="email"
        name="email"
        type="text"
        className="inputval"
        placeholder='Enter email'
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.email}
        />
       </div>
        {formik.touched.email && formik.errors.email?<div style={{color:"red"}}>{formik.errors.email}</div>:null}
      </form>
      <form onSubmit={formik.handleSubmit}>
       <div className="alain">
       <label for="age" >Role</label>
        <input 
        id="role"
        name="role"
        type="text"
        className="inputval"
        placeholder='Enter staff or HR'
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.role}
        />
       </div>
        {formik.touched.role && formik.errors.role?<div style={{color:"red"}}>{formik.errors.role}</div>:null}
      </form>
      <form onSubmit={formik.handleSubmit}>
       <div className="alain">
       <label for="number" >Number</label>
        <input 
        id="number"
        name="number"
        type="number"
        className="inputval"
        placeholder='Enter number'
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.number}
        />
       </div>
        {formik.touched.number && formik.errors.number?<div style={{color:"red"}}>{formik.errors.number}</div>:null}
      </form>
      <form onSubmit={formik.handleSubmit}>
       <div className="alain">
       <label for="password" >Password</label>
        <input 
        id="password"
        name="password"
        type="text"
        className="inputval"
        placeholder='Enter password'
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.password}
        />
       </div>
        {formik.touched.password && formik.errors.password?<div style={{color:"red"}}>{formik.errors.password}</div>:null}
        <button type='submit' className='submit-btn'>Submit</button>
      </form>
      
    </div>
    </div>
  )
}
