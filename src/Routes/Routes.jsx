import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Login from './../pages/login'
import Create from './../pages/CreateAccount'


function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Create/>}></Route>
        </Routes>
    )
}

export default MainRoutes