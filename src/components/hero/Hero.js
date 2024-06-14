import React from 'react'
import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Hero = ({movies}) => {

    const navigate = useNavigate();

    function reviews(movieId){
        navigate(`/Reviews/${movieId}`)
    }

  return (
    <div>
        <Carousel>
            {
                movies?.map((movies) => {
                   return(
                    <Paper>
                        <div className='movie-card-container'>
                            <div className='movie-card' style={{"--img": `url(${movies.backdrops[0]})`}}>
                                <div className='movie-detail'>
                                    <div className='movie-poster'>
                                        <img src={movies.poster} alt=''/>

                                    </div>
                                    <div className='movie-title'>
                                        <h4>{movies.title}</h4>

                                    </div>
                                    <div className='movie-button-container'>
                                        <Link to={`Tariler/${movies.trailerLink.substring(movies.trailerLink.length - 11)}`}/>
                                        <div className='play-button-icon-container'>
                                            <FontAwesomeIcon className='play-button-icon'
                                            icon={faCirclePlay}
                                            />
                                        </div>

                                        <div className = "movie-review-button-container">
                                            <Button variant='info' onClick={() => reviews(movies.imdbId)}>
                                                Reviews

                                            </Button>
                                            

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </Paper>
                   ) 
                })
            }
        </Carousel>
        

        
    </div>
  )
}

export default Hero