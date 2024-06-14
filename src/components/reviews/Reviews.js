import api from '../../api/axiosConfig'
import { Container,Row,Col } from 'react-bootstrap'

import React, { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom';
import Reviewform from '../reviewForm/Reviewform';

const Reviews = ({getMovieData,movie,reviews,setReviews}) => {

    const revText = useRef();
    let params = useParams();
    const movieId = params.movieId;

    useEffect(() =>{
        getMovieData(movieId);

    },[])

    const addReview = async (e) => {
        e.preventDefault();
        const rev = revText.current.value;
      
        try {
          const res = await api.post("/api/v1/reviews", {
            reviewBody: rev,
            imdbId: movieId
          });
      
          const newReview = res.data;
          const updatedReviews = [...reviews, {body:rev.value}];
          rev.value = ""
          setReviews(updatedReviews);
        } catch (err) {
          console.log(err);
        }
      };

  return (
   <Container>
    <Row>
        <Col><h3>Reviews</h3></Col>
       
    </Row>
    <Row>
    <Col>
        <img src={movie?.poster} alt=''></img>
    </Col>
    <Col>
    </Col>
    {
        <>
        <Row>
            <Col>
            <Reviewform handleSubmit={addReview} revText={revText} lableText="write a review"/>
            </Col>
        </Row>
        <Row>
            <Col>
            <hr />
            </Col>
        </Row>
        </>
    }
    {
        reviews?.map((r) => {
            return(
                <>
                <Row>
                    <Col>{r.body}</Col>

                </Row>
                <Row>
            <Col>
            <hr />
            </Col>
        </Row>
                
                </>
            )
        })
    }
    </Row>
   </Container>
  )
}

export default Reviews