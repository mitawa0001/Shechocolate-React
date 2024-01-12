// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import "./style.css";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import img1 from "../image/img1.webp"
import img2 from "../image/img2.jpg"
import img3 from "../image/img3.webp"

const FeaturedCollection = () => {
    

    return (
        <>
            <h1 className='my-5 text-center'>She Chocolate</h1>
            <div className='my-5 container lg-block'>
                <div className='my-3 d-flex flex-wrap justify-content-between'>
                    <h2>Featured collection</h2>
                    <h4>view all</h4>
                </div>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    // onSwiper={(swiper) => console.log(swiper)}
                    // onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide>
                        <div className='slider-items'>
                            <img src={img1} alt='girl 1' width="100%" height="100%"></img>
                        </div>
                        <div className='price'>
                            <span className='theme-money'>Embroidered thob</span>
                            <p >$249.00 USD<span className='was-price theme-money'>$339.00 USD</span></p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slider-items'>
                            <img src={img2} alt='girl 1' width="100%" height="100%"></img>
                        </div>
                        <div className='price'>
                            <span className='theme-money'>Embroidered thob</span>
                            <p >$229.00 USD<span className='was-price theme-money'>$349.00 USD</span></p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slider-items'>
                            <img src={img3} alt='girl 1' width="100%" height="100%"></img>
                        </div>
                        <div className='price'>
                            <span className='theme-money'>Embroidered thob</span>
                            <p >$243.00 USD<span className='was-price theme-money'>$359.00 USD</span></p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slider-items'>
                            <img src={img1} alt='girl 1' width="100%" height="100%"></img>
                        </div>
                        <div className='price'>
                            <span className='theme-money'>Embroidered thob</span>
                            <p >$249.00 USD<span className='was-price theme-money'>$339.00 USD</span></p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slider-items'>
                            <img src={img2} alt='girl 1' width="100%" height="100%"></img>
                        </div>
                        <div className='price'>
                            <span className='theme-money'>Embroidered thob</span>
                            <p >$249.00 USD<span className='was-price theme-money'>$339.00 USD</span></p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slider-items'>
                            <img src={img3} alt='girl 1' width="100%" height="100%"></img>
                        </div>
                        <div className='price'>
                            <span className='theme-money'>Embroidered thob</span>
                            <p >$249.00 USD<span className='was-price theme-money'>$339.00 USD</span></p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slider-items'>
                            <img src={img2} alt='girl 1' width="100%" height="100%"></img>
                        </div>
                        <div className='price'>
                            <span className='theme-money'>Embroidered thob</span>
                            <p >$249.00 USD<span className='was-price theme-money'>$339.00 USD</span></p>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>

            <div className='my-5 container sm-block'>
                <div className='my-3 d-flex flex-wrap justify-content-between'>
                    <h2>Featured collection</h2>
                    <h4>view all</h4>
                </div>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    // slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    // onSwiper={(swiper) => console.log(swiper)}
                    // onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide>
                        <div className='slider-items'>
                            <img src={img1} alt='girl 1' width="100%" height="100%"></img>
                        </div>
                        <div className='price'>
                            <span className='theme-money'>Embroidered thob</span>
                            <p >$249.00 USD<span className='was-price theme-money'>$339.00 USD</span></p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slider-items'>
                            <img src={img2} alt='girl 1' width="100%" height="100%"></img>
                        </div>
                        <div className='price'>
                            <span className='theme-money'>Embroidered thob</span>
                            <p >$229.00 USD<span className='was-price theme-money'>$349.00 USD</span></p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slider-items'>
                            <img src={img3} alt='girl 1' width="100%" height="100%"></img>
                        </div>
                        <div className='price'>
                            <span className='theme-money'>Embroidered thob</span>
                            <p >$243.00 USD<span className='was-price theme-money'>$359.00 USD</span></p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slider-items'>
                            <img src={img1} alt='girl 1' width="100%" height="100%"></img>
                        </div>
                        <div className='price'>
                            <span className='theme-money'>Embroidered thob</span>
                            <p >$249.00 USD<span className='was-price theme-money'>$339.00 USD</span></p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slider-items'>
                            <img src={img2} alt='girl 1' width="100%" height="100%"></img>
                        </div>
                        <div className='price'>
                            <span className='theme-money'>Embroidered thob</span>
                            <p >$249.00 USD<span className='was-price theme-money'>$339.00 USD</span></p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slider-items'>
                            <img src={img3} alt='girl 1' width="100%" height="100%"></img>
                        </div>
                        <div className='price'>
                            <span className='theme-money'>Embroidered thob</span>
                            <p >$249.00 USD<span className='was-price theme-money'>$339.00 USD</span></p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slider-items'>
                            <img src={img2} alt='girl 1' width="100%" height="100%"></img>
                        </div>
                        <div className='price'>
                            <span className='theme-money'>Embroidered thob</span>
                            <p >$249.00 USD<span className='was-price theme-money'>$339.00 USD</span></p>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>

        </>
    )
}
export default FeaturedCollection