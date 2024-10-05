import React from 'react'
import { Route, Routes } from 'react-router-dom';

import { CreateAccount } from '../pages/CreateAccount'
import { Login } from '../pages/Login'
import { Dashboard } from '../pages/Dashboard';
import { Products } from '../pages/Products'
import { Inbox } from '../pages/Inbox';
import { Profile } from '../pages/Profile';
import { Settings } from '../pages/Settings';

function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/sign-up" element={<CreateAccount />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/inbox" element={<Inbox />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
        </Routes>
    )
}

export default MainRoutes