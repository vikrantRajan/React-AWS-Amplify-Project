import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Logo from '../../assets/logo.png';
import { reset, signInFetch } from '../../redux/slices/auth/auth.slice';
import './signIn.styles.scss';


const SignIn = () => {
  const [ formData, setFormData ] = useState( {
    username: '',
    password: '',

  } );
  
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)

  // const clearForm = () => {
  //   setFormData(() => ({
  //   username: '',
  //   password: '',
  //   }))
  // }

  const handleSubmit = async ( e ) => {
    e.preventDefault();
    dispatch(signInFetch(formData))
    // clearForm()
  }
  
  useEffect(() => {
    if(isError) {
      toast.error(message)
    }

    if(isSuccess && user) {
      toast.success(`Welcome to the dashboard`)
      navigate('/dashboard')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
    // console.log(formData);
  }
  
  if (isLoading) return  <Spinner animation="grow" variant="primary" />
  
  return (
    <Container className='sign-in-form-container'>
      <Row className='justify-content-md-center'>
        <Col sm={ { span: 12 } } md={ { span: 6 } } lg={ { span: 4 } }>
          <Form className='sign-in-form' onSubmit={ handleSubmit }>
            <div className='sign-in-form-logo-container'>
              <img src={ Logo } alt='logo' className='sign-in-form-logo' />
            </div>

            <FloatingLabel
              controlId="floatingUsername"
              label="Username"
              className="mb-3"
            >
              <Form.Control className="sign-in-form-input" name='username' type='input' placeholder='Enter Username' onChange={onChange} value={ formData.username } />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingPassword"
              label="Password"
              className="mb-3"
            >
              <Form.Control className="sign-in-form-input" name='password' type='password' placeholder='Password' onChange={onChange} value={ formData.password } />
            </FloatingLabel>
           


            <Form.Group className='mb-3 sign-in-form-submit-button' controlId='formBasicPassword'>
              <Button variant='primary' type='submit' className='mt-3'>
                Sign In
              </Button>
            </Form.Group>

          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default SignIn;