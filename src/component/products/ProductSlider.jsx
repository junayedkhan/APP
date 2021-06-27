import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/thumbs/thumbs.min.css"
import "swiper/components/zoom/zoom.min.css"
import "swiper/components/pagination/pagination.min.css"
import SwiperCore, {
  Zoom , Navigation,Thumbs,Pagination
} from 'swiper/core';
import "./Products.css"

SwiperCore.use([Zoom,Navigation,Thumbs,Pagination]);


const App = (props) => {
  
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  
  return (
  <>
    <Swiper
    style={{'--swiper-navigation-color': '#fff','--swiper-pagination-color': '#fff'}}
    spaceBetween={0}
    navigation={false}
    zoom={true}
    pagination={{"clickable": true}}
    thumbs={{ swiper: thumbsSwiper }}
    className="mySwiper2">
    <SwiperSlide>
      <div className="swiper-zoom-container">
       <img src={props.img} alt="product" width="100%" height="420px" />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="swiper-zoom-container">
       <img src={props.img} alt="product" width="100%" height="420px" />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="swiper-zoom-container">
       <img src={props.img} alt="product" width="100%" height="420px" />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="swiper-zoom-container">
       <img src={props.img} alt="product" width="100%" height="420px" />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="swiper-zoom-container">
       <img src={props.img} alt="product" width="100%" height="420px" />
      </div>
    </SwiperSlide>
    </Swiper>
    <Swiper
    onSwiper={setThumbsSwiper}
    spaceBetween={0} slidesPerView={3}
    freeMode={true}
    watchSlidesVisibility={true}
    watchSlidesProgress={true}
    navigation={true}
    className="mySwiper">
    <SwiperSlide><img src={props.img} alt="product" width="100%" height="120px" className="product_thumb" /></SwiperSlide>
    <SwiperSlide><img src={props.img} alt="product" width="100%" height="120px" className="product_thumb" /></SwiperSlide>
    <SwiperSlide><img src={props.img} alt="product" width="100%" height="120px" className="product_thumb" /></SwiperSlide>
    <SwiperSlide><img src={props.img} alt="product" width="100%" height="120px" className="product_thumb" /></SwiperSlide>
    <SwiperSlide><img src={props.img} alt="product" width="100%" height="120px" className="product_thumb" /></SwiperSlide>
    </Swiper>
  </>
  )
}

export default App