import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandigPage from '../pages/LandinPage'
import LoginPage from '../pages/LoginPage'
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute'
import AdminPage from '../pages/AdminPage';
import UserPage from '../pages/UserPage';
import PatientsPage from '../pages/PatientsPage';
import NewUserPage from '../pages/NewUserPage';


const AppRouter = () => {
    return (
        <div>

            <Router>
                <Routes>

                    <Route
                        path='/'
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
                        path='/admin'
                        element={
                            <PrivateRoute>
                                <AdminPage/>
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/usuarios"
                        element={
                            <PrivateRoute>
                                <UserPage/>
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/pacientes"
                        element={
                            <PrivateRoute>
                                <PatientsPage/>
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/nuevoUsuario"
                        element={
                            <NewUserPage>
                                <PatientsPage/>
                            </NewUserPage>
                        }
                    />
                     

                </Routes>
            </Router>
        </div>
    )
}

export default AppRouter