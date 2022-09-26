import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navigation from './components/navigation/navigation.component';
import Dashboard from './pages/dashboard/dashboard';
import Home from './pages/home/home';
import SignIn from './pages/signIn/signInPage';
import './styles/App.scss';

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={ <Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='dashboard' element={<Dashboard/>}/> 
        <Route path='sign-in' element={<SignIn/>}/> 
      </Route>
    </Routes>
    <ToastContainer 
    theme="colored"
    position="top-right"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover/>
    </>
    )
}

export default App;
