import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Login from './../pages/login'
import Create from './../pages/CreateAccount'
import Dashboard from './../pages/dashboard'


function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login/>}></Route>
            <Route path="/Create" element={<Create />}></Route>
            <Route path="/Dashboard" element={<Dashboard />}></Route>
        </Routes>
    )
}

export default MainRoutes