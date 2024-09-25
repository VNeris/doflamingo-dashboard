import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Create from './../pages/CreateAccount'
import Login from './../pages/Login'
import Dashboard from '../pages/Dashboard';
import Products from '../pages/Products'
import  Inbox  from '../pages/Inbox';
import  Profile  from '../pages/Profile';
import  Settings  from '../pages/Settings';


function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login/>}></Route>
            <Route path="/Create" element={<Create />}></Route>
            <Route path="/Dashboard" element={<Dashboard />}></Route>
            <Route path="/Products" element={<Products/>}></Route>
            <Route path="/Inbox" element={<Inbox />}></Route>
            <Route path="/Profile" element={<Profile />}></Route>
            <Route path="/Settings" element={<Settings />}></Route>
        </Routes>
    )
}

export default MainRoutes