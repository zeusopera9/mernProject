import React from 'react'
import {Container, Row, Col, Form, FormGroup, Button} from 'reactstrap'
import {Link, useNavigate} from 'react-router-dom'
import '../styles/login.css'
import { useState, useContext } from 'react'

import loginImg from '../assets/images/login.png'
import userIcon from '../assets/images/user.png'

import {AuthContext} from './../context/AuthContext'
import {BASE_URL} from './../utils/config'

const Login = () => {

  const[credentials, setCredentials]=useState({
    email: undefined,
    password: undefined
  });
  
  const handleChange = e => {
    setCredentials(prev=>({...prev,[e.target.id]:e.target.value}))
  };

  const handleClick = e => {
    e.preventDefault();
  }

  return (
    <section>
      <Container>
        <Row>
          <Col lg='8' className='m-auto'>
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={loginImg} alt="Login Image" />
              </div>

              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="User Icon" />
                </div>
                <h2>Login</h2>

                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input type="email" placeholder='Email' required id='email' 
                    onChange={handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <input type="password" placeholder='Password' required id='password' 
                    onChange={handleChange} />
                  </FormGroup>
                  <Button className='btn secondary__btn auth__btn'
                  type="submit">
                    Login
                  </Button>
                </Form>
                <p>Don't have an Account ? <Link to='/register'>Create one now !</Link></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Login
