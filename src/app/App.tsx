import "../styles.css"
import { Route, Routes } from 'react-router-dom'
import NotFPage from '../pages/NotFPage'
import DynamicPage from '../pages/DynamicPage'
import NewRequestPage from "../pages/NewRequestPage"
import RequestsPage from "../pages/RequestsPage"
import RegisterPage from "../pages/RegisterPage"
import LoginPage from "../pages/LoginPage"

export default function App() {

  return (
    <>
    <Routes>
      <Route path="/requests" element={<RequestsPage />} />
      <Route path="/requests/new" element={<NewRequestPage />} />
      <Route path="requests/:id" element={<DynamicPage />} />
      <Route path="*" element={<NotFPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
    </>
  )
}
