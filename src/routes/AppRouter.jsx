import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandigPage from '../pages/LandinPage'
import LoginPage from '../pages/LoginPage'
import AdminRoutes from './AdminRoutes';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute'


const AppRouter = () => {
    return (
        <div>

            <Router>
                <Routes>


                    <Route
                        path='/home'
                        element={
                            <PublicRoute>
                                <LandigPage />
                            </PublicRoute>
                        }
                    />

                    <Route
                        path='/login'
                        element={
                            <PublicRoute>
                                <LoginPage />
                            </PublicRoute>
                        }
                    />

                    <Route
                        path='/*'
                        element={
                            <PrivateRoute>
                                <AdminRoutes />
                            </PrivateRoute>
                        }
                    />
                </Routes>


            </Router>

        </div>
    )
}

export default AppRouter
