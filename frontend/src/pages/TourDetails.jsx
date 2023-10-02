import React from 'react'
import '../styles/tour-details.css'
import {Container, Row, Col, Form, ListGroup} from 'reactstrap'
import {useParams} from 'react-router-dom'
import tourData from '../assets/data/tours'
import calculateAvgRating from '../utils/avgRating'

const TourDetails = () => {

  const {id} = useParams()

  // This is a static data layer. We shall call our API and load data from
  // the database
  const tour = tourData.find(tour => tour.id === id)

  // Destructing properties from tour obejct
  const {photo, title, desc, price, address, reviews, city, distance, maxGroupSize} = tour;
  const {totalRating, avgRating} = calculateAvgRating(reviews)

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg='8'>
              <div className="tour__content">
                <img src={photo} alt="" />

                <div className="tour__info">
                  <h2>{title}</h2>

                  <div className='d-flex align-items-center gap-5'>
                    <span className="tour__rating d-flex align-items-center gap-1">
                      <i className="ri-star-fill" style={{'color':"var(--secondary-color)"}}></i>{calculateAvgRating  === 0 ? null: avgRating}
                      {totalRating===0 ? ('Not rated') : (<span>({reviews.length})</span>) }
                    </span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default TourDetails
