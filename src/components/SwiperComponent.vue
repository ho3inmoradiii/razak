<template>
    <div class="section-slider">
        <div class="container">
            <div class="row slider-title__row">
                <div class="white-line"></div>
                <div class="slider-title" v-scrollanimation>
                    <div class="slider-title__thin">Blogs</div>
                    <div class="slider-title__bold">News & Events</div>
                </div>
            </div>
        </div>
        <div class="swiper__section">
            <swiper class="swiper" :options="swiperOption">
                <swiper-slide class="slide__1 slide__after">
                    <div class="slide-title">
                        <div class="slide-title__type">News</div>
                        <div class="slide-title__title">Lorem Ipsum</div>
                        <div class="slide-title__cal"><i class="fa fa-calendar" aria-hidden="true" style="margin-right: 4px"></i>2022/03/22</div>
                    </div>
                    <div class="slide-circle">
                        >
                    </div>
                </swiper-slide>
                <swiper-slide class="slide__2 slide__after">
                    <div class="slide-title">
                        <div class="slide-title__type">News</div>
                        <div class="slide-title__title">Lorem Ipsum</div>
                        <div class="slide-title__cal"><i class="fa fa-calendar" aria-hidden="true" style="margin-right: 4px"></i>2022/03/22</div>
                    </div>
                    <div class="slide-circle">
                        >
                    </div>
                </swiper-slide>
                <swiper-slide class="slide__3 slide__after">
                    <div class="slide-title">
                        <div class="slide-title__type">News</div>
                        <div class="slide-title__title">Lorem Ipsum</div>
                        <div class="slide-title__cal"><i class="fa fa-calendar" aria-hidden="true" style="margin-right: 4px"></i>2022/03/22</div>
                    </div>
                    <div class="slide-circle">
                        >
                    </div>
                </swiper-slide>
                <swiper-slide class="slide__4 slide__after">
                    <div class="slide-title">
                        <div class="slide-title__type">News</div>
                        <div class="slide-title__title">Lorem Ipsum</div>
                        <div class="slide-title__cal"><i class="fa fa-calendar" aria-hidden="true" style="margin-right: 4px"></i>2022/03/22</div>
                    </div>
                    <div class="slide-circle">
                        >
                    </div>
                </swiper-slide>
                <swiper-slide class="slide__5 slide__after">
                    <div class="slide-title">
                        <div class="slide-title__type">News</div>
                        <div class="slide-title__title">Lorem Ipsum</div>
                        <div class="slide-title__cal"><i class="fa fa-calendar" aria-hidden="true" style="margin-right: 4px"></i>2022/03/22</div>
                    </div>
                    <div class="slide-circle">
                        >
                    </div>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'
    export default {
        components: {
            Swiper,
            SwiperSlide
        },
        data() {
            return {
                swiperOption: {
                    slidesPerView: 5,
                    centeredSlides: true,
                    spaceBetween: 30,
                    grabCursor: true,
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
    .section-slider{
        width: 100%;
        height: 100vh;
        position: relative;
    }
    .section-slider:after{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 70vh;
        background: #1d447e;
        z-index: -1;
    }
    .swiper-slide {
        width: 60%;
        height: 20rem;
    }
    .slide__1{
        /*background: linear-gradient(rgba(29,68,126,0.8), rgba(29,68,126,0.8)), url("../assets/img1_2.png") repeat;*/
        background: url("../assets/img1_2.png") no-repeat;
        background-size: cover;
        transition: all 0.4s ease;
    }
    .slide__after{
        position: relative;
    }
    .slide__after:after{
        content: "";
        width: 100%;
        height: 100%;
        background: rgba(29, 68, 126, 0.8);
        position: absolute;
        left: 0;
        top: 0;
        opacity: 0;
        z-index: 2;
        transition: all 0.5s ease;
    }
    .slide__after:hover:after{
        opacity: 1;
    }
    .slide__2{
        background: url("../assets/img2.png") no-repeat fixed center;
        background-size: cover;
    }
    .slide__3{
        background: url("../assets/img3.png") no-repeat fixed center;
        background-size: cover;
    }
    .slide__4{
        background: url("../assets/img4.png") no-repeat fixed center;
        background-size: cover;
    }
    .slide__5{
        background: url("../assets/img11.png") no-repeat fixed center;
        background-size: cover;
    }
    .swiper-slide:nth-child(2n) {
        width: 40%;
    }
    .swiper-slide:nth-child(3n) {
        width: 20%;
    }
    .swiper-container{
        bottom: -8rem;
    }
    .slider-title__row{
        padding-top: 4rem;
        padding-left: 6rem;
        padding-right: 6rem;
    }
    .white-line{
        width: 100%;
        height: 2px;
        background: rgba(255,255,255,0.6);
    }
    .slider-title{
        margin-top: 4rem;
    }
    .slider-title__thin{
        color: rgba(255,255,255,0.7);
        font-size: 14px;
    }
    .slider-title__bold{
        color: #fff;
        font-size: 20px;
        font-weight: 700;
    }
    .slide-title{
        position: absolute;
        color: #ffffff;
        opacity: 0;
        transition: all 0.4s ease;
        z-index: 10;
        top: 30px;
        left: 25px;
    }
    .slide-title__type,.slide-title__cal{
        color: rgba(255,255,255,0.6);
        font-size: 13px;
    }
    .slide-title__title{
        color: #ffffff;
        font-size: 17px;
        font-weight: 700;
    }

    .slide-circle{
        position: absolute;
        color: #ffffff;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        border: 2px solid #ffffff;
        bottom: 32px;
        left: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        opacity: 0;
        transition: all 0.4s ease;
        z-index: 10;
    }
    .slide-circle:after{
        content: "";
        position: absolute;
        width: 45px;
        height: 45px;
        border-radius: 50%;
        border: 2px solid #ffffff;
    }
    .slide__after:hover > .slide-title , .slide__after:hover > .slide-circle{
        opacity: 1;
    }
    .before-enter{
        opacity: 0;
        transform: translateY(30px);
        transition: all 1s ease-out;
    }

    .enter{
        opacity: 1;
        transform: translateY(0);
    }
</style>
