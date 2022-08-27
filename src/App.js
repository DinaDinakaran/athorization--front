import React from 'react'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Signin from './component/signin/Signin'
import Signup from './component/signup/Signup'
import Page from './Page'
export const url = "http://localhost:4000/api"

export default function App() {
  return (
    <Router>
        <Routes>
            
            <Route path='/signin' element={<Signin/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/' element={<Page/>} />
        </Routes>
    </Router>
  )
}
