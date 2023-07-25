import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { Login } from './components/Login'
import { Signup } from './components/Signup'
import { ForgotPassword } from './components/ForgotPassword'
import { ChangePassword } from './components/ChangePassword'
import { Error404 } from './pages/Error404'
import { Profile } from './components/Profile'
import { MissingEmailPassword } from './components/MissingEmailPassword';
import { IncorrectEmailPassword } from './components/IncorrectEmailPassword';
import { EmailConfirm } from './components/EmailConfirm';
import { LoginLayout } from './layouts/LoginLayout'
import { UserLayout } from './layouts/UserLayout';
import { ProtectedLayout } from './layouts/ProtectedLayout';
import { Dashboard } from './components/Dashboard'
import { Bookings } from './components/Bookings'

export function AllRoutes() {
    return (
        <Routes>
            <Route element={<LoginLayout />}>
                <Route exact path="/" element={<Login />} />
                <Route path="/sign-up" element={<Signup />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/create-new-password/:token" element={<ChangePassword />} />
                <Route path="/email-confirm/:token" element={<EmailConfirm />} />
                <Route path="/missing-email-password" element={<MissingEmailPassword />} />
                <Route path="/incorrect-email-password" element={<IncorrectEmailPassword />} />
            </Route>


            <Route element={<ProtectedLayout />}>
                <Route element={<UserLayout />}>
                    <Route path="/my-profile" element={<Profile />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/my-bookings" element={<Bookings />} />
                </Route>
            </Route>
            <Route path="/*" element={<Error404 />} />
        </Routes>
    )
}