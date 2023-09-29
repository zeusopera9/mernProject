import React from 'react'
import '../styles/home.css'
import {Container, Row, Col} from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import Subtitle from '../shared/Subtitle'

const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="hero_content">
                <div className="hero_subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Know Before You Go"}/>
                  <img src={worldImg} alt="" />
                </div>
                <h1>Travelling opens the door to creating <span 
                className="highlight"> Memories</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Iusto est sit sint suscipit iure rem libero magnam nisi impedit 
                  tempore accusantium exercitationem deleniti molestias, reprehenderit, 
                  debitis, quibusdam cumque asperiores? Commodi!</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Home
