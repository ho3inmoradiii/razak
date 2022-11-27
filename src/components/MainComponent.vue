<template>
    <div class="container-page">
        <FirstSection />
        <SecondSection />
        <SwiperComponent />

        <div class="section wrapper">
                <div class="img1"></div>
                <div class="wrapper-title">
                    <span>Case Studies</span>
                    <h2>Razak Case Studies</h2>
                </div>
                <div class="lorem">
                    <h2>
                        Lorem Ipsum
                    </h2>
                    <p>In publishing and graphic design,<br /> Lorem ipsum is a placeholder text<br /> to demonstrate the visual form typeface...<br /></p>
                    <div class="lorem-cycle">
                        >
                    </div>
                </div>
                <div class="lorem1">
                    <h2>
                        Lorem Ipsum
                    </h2>
                    <p>In publishing and graphic design,<br /> Lorem ipsum is a placeholder text<br /> to demonstrate the visual form typeface...<br /></p>
                    <div class="lorem1-cycle">
                        >
                    </div>
                </div>
                <div class="lorem2">
                    <h2>
                        Lorem Ipsum
                    </h2>
                    <p>In publishing and graphic design,<br /> Lorem ipsum is a placeholder text<br /> to demonstrate the visual form typeface...<br /></p>
                    <div class="lorem2-cycle">
                        >
                    </div>
                </div>
            </div>

        <div class="section wrapper2">
            <div class="bold-text-top">
                <div class="bold-text">DONT</div>
                <img src="../assets/img7.png" alt="img7" class="img1-wrapper2">
                <div class="bold-text">YOU</div>
            </div>
            <div class="bold-text-bottom">
                <div class="bold-text">FOLLOW</div>
                <img src="../assets/img6.png" alt="img7" class="img2-wrapper2">
                <div class="bold-text">US?</div>
            </div>
            <div class="follow-ins">
                <span>Follow Our Instagram</span>
                <div class="follow-circle">
                    >
                </div>
            </div>
        </div>

        <div class="section wrapper3">
            <div class="container-fluid" style="padding: 0 70px;">
                <div class="row">
                    <div class="col-md-3">
                        <a href="/">
                            <img src="../assets/whiteLogo.png" alt="logo" class="footer-logo">
                            <div class="logo-des pl-2">
                                Pharmaceutical Company
                            </div>
                        </a>
                    </div>
                    <div class="col-md-9 d-flex">
                        <div class="col-md-3">
                            <div class="footer-links-head">Learn</div>
                            <ul class="learn-column">
                                <li><a href="#">About Razak</a></li>
                                <li><a href="#">Responsibility</a></li>
                                <li><a href="#">Gallery</a></li>
                            </ul>
                        </div>
                        <div class="col-md-3">
                            <div class="footer-links-head">Explore</div>
                            <ul class="explore-column">
                                <li><a href="#">Blog Studies</a></li>
                                <li><a href="#">Products</a></li>
                            </ul>
                        </div>
                        <div class="col-md-3">
                            <div class="footer-links-head">Collaborate</div>
                            <ul class="explore-column">
                                <li><a href="#">Contact</a></li>
                                <li>
                                    <a href="#">Become a <b />
                                    colleague
                                </a>
                                </li>
                                <li><a href="#">Complaint</a></li>
                            </ul>
                        </div>
                        <div class="col-md-3">
                            <div class="footer-links-head">Connect</div>
                            <ul class="explore-column contact-column">
                                <li><i class="fa fa-phone"></i>021-44537027</li>
                                <li><i class="far fa-envelope"></i>info@razakpharma.com</li>
                                <li class="social-media-icons">
                                    <a href="#"><img src="../assets/whatsapp.png" alt=""></a>
                                    <a href="#"><img src="../assets/instagram.png" alt=""></a>
                                    <a href="#"><img src="../assets/linkedin-in.png" alt=""></a>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="rights">@2021 Razak Pharmacy . All Right reserved.</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FirstSection from "@/components/FirstSection";
    import SecondSection from "@/components/SecondSection";
    import SwiperComponent from "@/components/SwiperComponent";
    import {gsap} from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";

    export default {
        name: "MainComponent",
        components:{FirstSection,SecondSection,SwiperComponent},
        mounted() {
            this.startAnimation()
            this.startAnimation2()
            this.startAnimation3()
        },
        methods:{
            startAnimation(){
                gsap.registerPlugin(ScrollTrigger);
                let tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".wrapper",
                        start: "top top",
                        end: "bottom top",
                        scrub: 1,
                        snap: {
                            snapTo: 0.33,
                            duration: 0.8,
                            ease: "power1.inOut"
                        },
                        pin: true
                    }
                });
                tl.to(".img1",1.5,{transform: "scale(2,2)"},0)
                tl.to(".wrapper-title", 0.4, {opacity:1,top: "30%"},0)
                tl.to(".lorem", 0.4, {opacity:1,top: "59%"},0)
                tl.to(".lorem", 0.2, {opacity:0,top: "0"},0.5)
                tl.to(".lorem1", 0.4, {opacity:1,top: "59%"},0.5)
                tl.to(".lorem1", 0.2, {opacity:0,top: "0"},1)
                tl.to(".lorem2", 0.4, {opacity:1,top: "59%"},1)
            },
            startAnimation2(){
                gsap.registerPlugin(ScrollTrigger);
                let tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".wrapper2",
                        start: "center 50%",
                        end: "bottom top",
                        scrub: 1,
                        // snap: {
                        //     snapTo: 0.5,
                        //     duration: 0.001,
                        //     ease: "power1.inOut"
                        // },
                        pin: true
                    }
                });
                tl.to(".img1-wrapper2",0.05,{width: "67px"},0)
                tl.to(".img2-wrapper2", 0.05, {width: "67px"},0.004)
                tl.to(".img1-wrapper2", 0.05, {width: 0},0.056)
                tl.to(".img2-wrapper2", 0.05, {width: 0},0.058)
                // tl.to(".wrapper2", 0.5, {height: 0},0.06)
            },
            startAnimation3(){
                gsap.set('.wrapper3', { yPercent: -50 })

                const uncover = gsap.timeline({ paused:true })

                uncover.to('.wrapper3', { yPercent: 0, ease: 'none' });

                ScrollTrigger.create({
                    trigger: '.wrapper2',
                    start: 'bottom bottom',
                    end: '+=75%',
                    animation: uncover,
                    scrub: true,
                })
            }
        }
    }
</script>

<style>
    h1,h2,h3,h4,h5,h6,p{
        margin: 0;
    }

    .main{
        position: relative;
        z-index: 2;
    }

    .pl-6{
        padding-left: 6rem;
    }

    /*.container-page{*/
    /*    scroll-snap-type: y mandatory;*/
    /*    overflow-y: scroll;*/
    /*    height: 100vh;*/
    /*}*/

    /*.section{*/
    /*    scroll-snap-align: start;*/
    /*    height: 100vh;*/
    /*}*/

    .wrapper,.wrapper2,.wrapper3{
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        position: relative;
        overflow: hidden;
    }

    .wrapper3{
        background-color: #1c427b;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .img1{
        background-image: url("../assets/img1.png");
        width: 100%;
        height: 100vh;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
    }

    .wrapper-title{
        position: absolute;
        top: 110%;
        left: 20%;
        font-size: 32px;
        transform: translate(-50%,-50%);
        opacity: 0;
        color: #ffffff;
    }

    .wrapper-title span{
        font-size: 14px;
        color: rgba(255,255,255,0.6);
    }
    .wrapper-title h2{
        font-size: 1.8rem;
        font-weight: 700;
    }

    .img2{
        background-image: url("../assets/img5.png");
        width: 100%;
        height: 0;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%,0);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center bottom;
    }

    .title2{
        position: absolute;
        top: 50%;
        left: 50%;
        font-size: 60px;
        transform: translate(-50%,-50%);
        transform-origin: center center;
        text-align: center;
        line-height: 60px;
        color: #ffffff;
    }

    .lorem-cycle,.lorem1-cycle,.lorem2-cycle{
        position: relative;
        margin-left: 0.3rem;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: 1.5px solid #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 3px;
        font-size: 12px;
        color: #ffffff;
        font-weight: 700;
    }

    .lorem-cycle:before,.lorem1-cycle:before,.lorem2-cycle:before{
        content: "";
        position: absolute;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 1.5px solid #ffffff;
        top: -6px;
    }

    .lorem,.lorem1,.lorem2{
        position: absolute;
        /*top: 62%;*/
        top: 110%;
        left: 26%;
        font-size: 19px;
        transform: translate(-50%,-50%);
        opacity: 0;
        color: #ffffff;
        width: 450px;
        margin-left: 5px;
    }

    .lorem p,.lorem1 p,.lorem2 p{
        color: #ffffff;
        margin: 2rem 0;
    }

    .wrapper2 img{
        width: 0;
        height: 67px;
        margin: 45px 20px 0;
    }

    .bold-text-top,.bold-text-bottom{
        display: flex;
        font-size: 95px;
        color: #1d447e;
        font-weight: 700;
    }

    .wrapper2{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .footer-logo{
        width: 95px;
    }

    .logo-des{
        font-size: 15px;
        font-weight: 400;
        color: rgba(255,255,255,0.9);
    }

    .footer-links-head{
        color: rgba(255,255,255,0.7);
        font-size: 13px;
    }

    .learn-column,.explore-column{
        padding: 0;
        margin: 26px 0 0;
    }

    ul.learn-column li,ul.explore-column li{
        list-style: none;
        margin-bottom: 3px;
    }

    ul.learn-column li a{
        text-decoration: none;
        color: #fff;
        font-weight: 500;
    }

    ul.explore-column li a{
        text-decoration: none;
        color: #fff;
        font-weight: 400;
        font-size: 13px;
    }

    ul.contact-column li{
        color: #ffffff;
        font-weight: 400;
        font-size: 13px;
        margin-bottom: 8px;
    }

    ul.contact-column li svg{
        font-size: 12px;
        color: rgba(255,255,255,0.7);
        margin-right: 8px;
    }

    .social-media-icons{
        display: flex;
    }

    .social-media-icons a img{
        width: 12px;
        margin-right: 7px;
    }

    .rights{
        font-weight: 400;
        color: #fff;
        margin-top: 65px;
        margin-left: 25px;
    }

    .follow-ins{
        display: flex;
        margin-top: 1rem;
    }

    .follow-ins span{
        color: #000;
    }

    .follow-circle{
        position: relative;
        margin-left: 0.8rem;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        border: 1.5px solid #001C7B;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 3px;
        font-size: 12px;
        color: #001C7B;
        font-weight: 700;
    }

    .follow-circle:before{
        content: "";
        position: absolute;
        width: 33px;
        height: 33px;
        border-radius: 50%;
        border: 1.5px solid #001C7B;
        top: -5px;
    }
</style>