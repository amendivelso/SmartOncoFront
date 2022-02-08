import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminPage from '../pages/AdminPage'
import AgendaDayPage from '../pages/AgendaDayPage'
import ConfirmationDatingPage from '../pages/ConfirmationDatingPage'
import NewPacientpage from '../pages/NewPacientpage'
import NewRolepage from '../pages/NewRolepage'
import NewUserPage from '../pages/NewUserPage'
import PatientsPage from '../pages/PatientsPage'
import QuotesDaypage from '../pages/QuotesDaypage'
import Rolespage from '../pages/Rolespage'
import UserPage from '../pages/UserPage'

const AdminRoutes = () => {
  return (<>
    <Routes>
      <Route exact path="/"
        element={<AdminPage />}>
      </Route>

      <Route exact path="roles"
        element={<Rolespage />}>
      </Route>

      <Route exact path="usuarios"
        element={<UserPage />}>
      </Route>

      <Route exact path="pacientes"
        element={<PatientsPage />}>
      </Route>

      <Route exact path="citasDelDia"
        element={<QuotesDaypage />}>
      </Route>

      <Route exact path="agendaDelDia"
        element={<AgendaDayPage />}>
      </Route>

      <Route exact path="confirmacionCitas"
        element={<ConfirmationDatingPage />}>
      </Route>

      <Route exact path="nuevoRol"
        element={<NewRolepage />}>
      </Route>

      <Route exact path="nuevoUsuario"
        element={<NewUserPage />}>
      </Route>

      <Route exact path="nuevoPaciente"
        element={<NewPacientpage />}>
      </Route>
    </Routes>
  </>)
}

export default AdminRoutes
