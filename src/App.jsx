import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LoginPage from './Pages/LoginPage/LoginPage.jsx'
import HomePage from './Pages/HomePage/HomePage.jsx'

export default function App() {
  return(
    <Router>
      <Routes>
        <Route path='/login' element={<LoginPage/>}>
        </Route>
        <Route path='/' element={<HomePage/>} exact/>
      </Routes>
    </Router>
  )
}