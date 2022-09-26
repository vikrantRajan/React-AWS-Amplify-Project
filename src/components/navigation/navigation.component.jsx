import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { TbLogout } from "react-icons/tb";
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
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
    toast.success('Signed Out Successfully!')
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
          </Nav>
          <OverlayTrigger
          placement='left'
          overlay={
            <Tooltip id={`tooltip-bottom`}>
              Logout
            </Tooltip>
          }
          >
            <div className='logout-logo d-flex' onClick={onSignOut} >
            <TbLogout/>
            </div>
          </OverlayTrigger>
                </Container>
      </Navbar> : <div></div>
    }
      <Outlet/>
    </>
  );
}

export default NavigationBar;