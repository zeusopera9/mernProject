import React from "react";
import Slider from 'react-slick';
import ava01 from '../../assets/images/ava-1.jpg';
import ava02 from '../../assets/images/ava-2.jpg';
import ava03 from '../../assets/images/ava-3.jpg';
import './testimonials.css';

const Testimonials =()=>{

    const settings={
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,

        responsive:[
            {
                breakpoint:992,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:1,
                    infinite:true,
                    dots:true,
                },
            },
            {
                breakpoint:576,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                    infinite:true,
                    dots:true,
                },
            },

        ],
    };

    return <Slider {...settings}>
        <div className="testimonials py-4 px-3">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam perspiciatis odio neque dolorem modi repellat, saepe autem, natus impedit fugiat id accusamus minus, voluptatem corrupti iste ex esse temporibus. Rerum.</p>
            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava01} className="w-25 h-25 rounded-2" alt=""/>
                <div>
                    <h5 className="mb-0 mt-3">Rylan Lewis</h5>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonials py-4 px-3">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam perspiciatis odio neque dolorem modi repellat, saepe autem, natus impedit fugiat id accusamus minus, voluptatem corrupti iste ex esse temporibus. Rerum.</p>
            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava02} className="w-25 h-25 rounded-2" alt=""/>
                <div>
                    <h5 className="mb-0 mt-3">Zaidali Merchant</h5>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonials py-4 px-3">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam perspiciatis odio neque dolorem modi repellat, saepe autem, natus impedit fugiat id accusamus minus, voluptatem corrupti iste ex esse temporibus. Rerum.</p>
            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava03} className="w-25 h-25 rounded-2" alt=""/>
                <div>
                    <h5 className="mb-0 mt-3">Kedar Kulkarni</h5>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonials py-4 px-3">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam perspiciatis odio neque dolorem modi repellat, saepe autem, natus impedit fugiat id accusamus minus, voluptatem corrupti iste ex esse temporibus. Rerum.</p>
            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava02} className="w-25 h-25 rounded-2" alt=""/>
                <div>
                    <h5 className="mb-0 mt-3">Yakshit Poojary</h5>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonials py-4 px-3">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam perspiciatis odio neque dolorem modi repellat, saepe autem, natus impedit fugiat id accusamus minus, voluptatem corrupti iste ex esse temporibus. Rerum.</p>
            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava01} className="w-25 h-25 rounded-2" alt=""/>
                <div>
                    <h5 className="mb-0 mt-3">Anuj Venkatesh</h5>
                    <p>Customer</p>
                </div>
            </div>
        </div>
    </Slider>
};

export default Testimonials;