import React from 'react'
import './footer.css'
import {Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap'
import {Link} from 'react-router-dom'
import logo from "../../assets/images/logo.png"

const quick__links = [
  {
    path:'/home',
    display:'Home'
  },
  {
    path:'/about',
    display:'About'
  },
  {
    path:'/tours',
    display:'Tours'
  },
];

const quick__links2 = [
  {
    path:'/gallery',
    display:'Gallery'
  },
  {
    path:'/login',
    display:'Login'
  },
  {
    path:'/register',
    display:'Register'
  },
];



const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg='3'>
            <div className="logo">
              <img src={logo} alt="" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, illo?</p>
              <div className="social__links d-flex align-items-center gap-4">
                <span>
                  <Link to='#'><i className="ri-youtube-line"></i></Link>
                </span>
                <span>
                  <Link to='#'><i className="ri-github-fill"></i></Link>
                </span>
                <span>
                  <Link to='#'><i className="ri-facebook-circle-line"></i></Link>
                </span>
                <span>
                  <Link to='#'><i className="ri-instagram-line"></i></Link>
                </span>
              </div>
            </div>
          </Col>

          <Col lg='3'>
            <h5 className="footer__link-title">Discover</h5>

            <ListGroup className="footer__quick-links">
              {
                quick__links.map((item, index) => (
                  <ListGroupItem key={index} className='ps-0 border-0'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>
          <Col lg='3'>
            <h5 className="footer__link-title">Quick Links</h5>

            <ListGroup className="footer__quick-links">
              {
                quick__links2.map((item, index) => (
                  <ListGroupItem key={index} className='ps-0 border-0'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>
          <Col lg='3'>
            <h5 className="footer__link-title">Contact</h5>

            <ListGroup className="footer__quick-links">
                  <ListGroupItem className='ps-0 border-0 d-flex align-items-center
                  gap-3'>
                    <h6 className='mb-0 d-flex align-items-center gap-2'>
                      <span>
                        <i className="ri-map-pin-line"></i>
                      </span>
                      Address:
                    </h6>
                    
                    <p className='mb-0'>Andheri, Mumbai</p>
                  </ListGroupItem>
                  <ListGroupItem className='ps-0 border-0 d-flex align-items-center
                  gap-3'>
                    <h6 className='mb-0 d-flex align-items-center gap-2'>
                      <span>
                        <i className="ri-mail-line"></i>
                      </span>
                      Mail:
                    </h6>
                    
                    <p className='mb-0'>pixelencoders@somaiya.edu</p>
                  </ListGroupItem>
                  <ListGroupItem className='ps-0 border-0 d-flex align-items-center
                  gap-3'>
                    <h6 className='mb-0 d-flex align-items-center gap-2'>
                      <span>
                        <i className="ri-phone-fill"></i>
                      </span>
                      Phone:
                    </h6>
                    
                    <p className='mb-0'>+91 1234567890</p>
                  </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg='12' className='text-center pt-5'>
              <p className="copyright">Copyright {year}, design & develop by Team PixelEncoders.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
