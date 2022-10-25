import React from 'react';
import Card from 'react-bootstrap/Card';
import { FaRegBookmark, FaShareAlt, FaStar, FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'

const NewsDisplayCard = ({ news }) => {
    const { author, details, image_url, rating, title, total_view, _id } = news
    const { name, img, published_date } = author
    return (
        <Card className='mb-5'>
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center gap-3'>
                    <Image
                        src={img}
                        roundedCircle
                        style={{ height: '60PX' }}
                    ></Image>
                    <div>
                        <p className='mb-0'>{name}</p>
                        <p className='mb-0'>{published_date}</p>

                    </div>
                </div>
                <div>
                    <FaRegBookmark></FaRegBookmark> <FaShareAlt></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>{
                    details?.length > 250 ?
                        <p className='text-justify'>{details.slice(0, 200) + ' ... '}<Link to={`../news/${_id}`}> Read more </Link>  </p>

                        : details}

                </Card.Text>

            </Card.Body>
            <Card.Footer className=" d-flex justify-content-between align-items-center">
                <div  >
                    <FaStar className='text-warning me-2'></FaStar>
                    <span>{rating?.number}</span>
                </div>
                <div >
                    <FaEye className=' me-2'></FaEye>
                    <span>{total_view}</span>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsDisplayCard;