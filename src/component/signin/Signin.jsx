import React from 'react'
import "./signin.css"
import { useFormik } from 'formik';
import * as yup from "yup"
import {url} from "../../App"


import axios from 'axios';


export default function Signin () {
  const handleSubmit =async(value)=>{
    console.log(value)
    await axios.post(`${url}/signin`
    ,{
      email :value.email,
      password :value.password,
    }).catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(error.config);
    });  
        
  }



  const formik =useFormik({
    initialValues:{
        email:"",
        password:""
    },
    validationSchema:yup.object({
      email: yup.string().required('* required').email("*Enter a Valid Email Address"),
      password : yup.string().required('* required')
    }
    ),
    onSubmit :(values)=>{
      handleSubmit(values);
    }
  })

 
  return (
    <div className= "fullbody">
    <div className="title">Sign In</div>
    <div className='addstudent'>
    
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
