import React from 'react'
import '../styles/tour-details.css'
import {Container, Row, Col, Form, ListGroup} from 'reactstrap'
import {useParams} from 'react-router-dom'
import tourData from '../assets/data/tours'
import calculateAvgRating from '../utils/avgRating'
import avatar from "../assets/images/avatar.jpg";
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
                      {totalRating===0 ? ('Not rated') : (<span>({reviews?.length})</span>) }
                    </span>

                    <span>
                      <i className="ri-map-pin-user-fill"></i>{address}
                    </span>
                  </div>
                  <div className="tour__extra-details">
                    <span>
                      <i className="ri-map-pin-2-line"></i>{city}
                    </span>
                    <span>
                      <i className="ri-money-dollar-circle-line"></i>${price} / person
                    </span>
                    <span>
                      <i className="ri-group-line"></i>{maxGroupSize}
                    </span>
                  </div>
                  <h5>
                    Description
                  </h5>
                  <p>{desc}</p>
                </div>

                <div className="tour__reviews mt-4">
                  <h4>
                    Reviews ({reviews?.length} reviews)
                  </h4>
                  <Form>
                    <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                      <span>
                        1 <i className="ri-star-s-fill"></i>
                      </span>
                      <span>
                        2 <i className="ri-star-s-fill"></i>
                      </span>
                      <span>
                        3 <i className="ri-star-s-fill"></i>
                      </span>
                      <span>
                        4 <i className="ri-star-s-fill"></i>
                      </span>
                      <span>
                        5 <i className="ri-star-s-fill"></i>
                      </span>
                    </div>

                    <div className="review__input">
                      <input type="text" placeholder="Share your thoughts" />
                      <button className='btn primary__btn text-white' type="submit">
                        Submit
                      </button>
                    </div>
                  </Form>

                  <ListGroup className='user__reviews'>
                    {
                      reviews ?.map(review =>(
                        <div className='review__item'>
                          <img src={avatar} alt="" />

                          <div className='w-100'>
                            <div className='d-flex align-items-center justify-content-between'>
                              <div>
                                <h5>Rylan</h5>
                                <p>
                                  {new Date("02-10-2023").toLocaleDateString("en-US")}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    }
                  </ListGroup>
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
