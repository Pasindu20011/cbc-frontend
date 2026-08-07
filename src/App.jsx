
import './App.css'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import ProductCard from './components/productCard'
import AdminPage from './pages/adminPage.jsx'
import Homepage from './pages/homePage.jsx'
import TestPage from './pages/test.jsx'

function App() {
   return (
     <BrowserRouter>
     <div className="w-full h-screen " >
          <Routes path="/">
            <Route path="/*" element={<Homepage/>} />
            <Route path="/register" element={<h1>Register Page</h1>} />
            <Route path="/admin/*" element={<AdminPage />} />
            <Route path="/test" element={<TestPage/>} />     
        </Routes>
     </div>

     </BrowserRouter>
   )
}
export default App
