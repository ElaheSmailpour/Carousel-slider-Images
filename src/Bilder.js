import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import pic2 from './images/pic2.jpeg'
import pic3 from './images/pic3.jpeg'
import pic4 from './images/pic4.jpeg'
import './styles/bilder.css'
import ReactPlayer from 'react-player'

const Bilder = () => {
    return (
        <div className="bilder">
          <Carousel>
                <div className="silder">
                    <img src={pic3}  alt="pic3" className="imageslider"/>
                    <p className="legend">picture 1</p>
                </div>
                <div>
                    <img src={pic4} alt="pic4" className="imageslider"/>
                    <p className="legend">picture 2</p>
                </div>
                <div>
                    <img src={pic2} alt="pic2" className="imageslider" />
                    <p className="legend">picture 3</p>
                </div>
            </Carousel>
            <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
          width='100%'
          height='100%'
        />
      </div>
        </div>
    )
}

export default Bilder;