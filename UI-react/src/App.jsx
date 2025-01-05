import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from './components/navbar';
import ErrorPage from './pages/ErrorPage';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<NavBar isLogged={false} />}>
          <Route index element={<MainPage />} />
          <Route path="login" element={<LoginPage/>}/>
          <Route path="cards" element={<ErrorPage code="503" text="This page is unavailable(" />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
      
  )
}

export default App
