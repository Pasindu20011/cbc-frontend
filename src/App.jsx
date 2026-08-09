
import './App.css'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import ProductCard from './components/productCard'
import AdminPage from './pages/adminPage.jsx'
import Homepage from './pages/homePage.jsx'
import TestPage from './pages/test.jsx'
import LoginPage from './pages/loginPage.jsx'
import {Toaster} from 'react-hot-toast';

function App() {

   return (
     <BrowserRouter>
     <div className="w-full h-screen " >
          <Toaster position="top-right"/>
          <Routes path="/">
            <Route path="/*" element={<Homepage/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/register" element={<h1>Register Page</h1>} />
            <Route path="/admin/*" element={<AdminPage />} />
            <Route path="/test" element={<TestPage/>} />     
        </Routes>
     </div>

     </BrowserRouter>
   )
}
export default App
