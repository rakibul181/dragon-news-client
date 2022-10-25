import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Button, ButtonGroup, ListGroup } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { FaGoogle, FaGithub, FaFacebook, FaYoutube, FaTwitter, FaInstagram, FaTiktok } from 'react-icons/fa'
import { useLocation, useNavigate } from 'react-router-dom';
import Brand1 from '../../../assest/Brand1.png';
import Brand2 from '../../../assest/Brand2.png';
import  { AuthContext }  from '../../../UserContext/UserContext';


const RightNav = () => {
    const {userSignin} =  useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider()
    const gitHubProvider = new GithubAuthProvider()
    const navigate =useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname|| '/'


    const  handelGoogleSignIn=() =>{
        userSignin(googleProvider)
        .then(result=>{
            const user = result.user
            console.log(user);
            navigate(from,{replace:true}) 
        })
        .catch(e=>console.error(e))
    }

    const handelGithubsignIn =()=>{
        userSignin(gitHubProvider)
        .then(result=>{
            const user = result.user
            console.log(user);
            navigate(from,{replace:true}) 
        })
        .catch(e=>console.error(e))
    }
    return (
        <div>
            <ButtonGroup className='mb-3' vertical>
                <Button onClick={handelGoogleSignIn} className='mb-2' variant="outline-success"><FaGoogle></FaGoogle> Sign In With Google</Button>
                <Button onClick={handelGithubsignIn} className='mb-2' variant="outline-dark"><FaGithub></FaGithub> Sign In With GitHub</Button>
            </ButtonGroup>
            <div>
                <h4>Connect With More</h4>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaYoutube></FaYoutube> Youtube</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter></FaTwitter>Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaInstagram></FaInstagram> Instagarm</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTiktok></FaTiktok> Tiktok</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <Carousel className='mb-4'>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Brand1}
                            alt="First slide"
                        />
                         
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Brand2}
                            alt="Second slide"
                        />
 
                    </Carousel.Item>

                </Carousel>
            </div>

        </div>
    );
};

export default RightNav;