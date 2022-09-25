import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet, useNavigate } from "react-router-dom";
import Logo from '../../assets/logo.png';
import { reset, signOut } from '../../redux/slices/auth/auth.slice';
import './navigation.styles.scss';


const NavigationBar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user} = useSelector((state) => state.auth)
  const onSignOut = () => {
    dispatch(signOut())
    dispatch(reset())
    navigate('/sign-in')
  }
  return (
    <>
    {user ?
      <Navbar variant="black" className='navigation-bar'>
        <Container fluid>
          <Navbar.Brand href="/"><img src={Logo} alt='logo' className='navigation-bar-logo'/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
             <button onClick={onSignOut}>Sign Out</button> 
          </Nav>
        </Container>
      </Navbar> : <div></div>
    }
      <Outlet/>
    </>
  );
}

export default NavigationBar;