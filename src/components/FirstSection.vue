<template>
    <div class="first-section section">
        <ul class="menu">
            <li>
                <a href="/">
                    <img src="../assets/whiteLogo.png" class="logo">
                </a>
            </li>
            <li class="menu-icon">
                <div v-on:click="openMenu()">
                    <img src="../assets/menuIcon.png">
                    <span>Menu</span>
                </div>
                <span class="lang">
                        English
                    </span>
            </li>
        </ul>

        <div class="nav-container">
            <div class="menu-close" v-on:click="closeMenu()"><i class="fa-solid fa-bars" style="color: #ffffff;font-size: 30px;"></i></div>
            <div class="canvas-logo">
                <a href="#">
                    <img src="../assets/whiteLogo.png" alt="">
                </a>
            </div>
            <nav class="nav">
                <div class="menu__item item-1">
                    <img src="../assets/img4.png" alt="img4" class="menu__item-img">
                    <a href="#" class="menu__item-link"><span>01</span>ABOUT US</a>
                </div>
                <div class="menu__item item-2">
                    <img src="../assets/img3.png" alt="img3" class="menu__item-img">
                    <a href="#" class="menu__item-link"><span>02</span>PRODUCT</a>
                </div>
                <div class="menu__item item-3">
                    <img src="../assets/img2.png" alt="img4" class="menu__item-img">
                    <a href="#" class="menu__item-link"><span>03</span>NEWS & EVENTS</a>
                </div>
                <div class="menu__item item-4">
                    <img src="../assets/img1_2.png" alt="img4" class="menu__item-img">
                    <a href="#" class="menu__item-link"><span>04</span>CONTACT US</a>
                </div>
                <div class="sharing">SHARING IS CARING</div>
            </nav>

        </div>

        <div class="hero-text">
            <div class="hero-text-bold animate__animated animate__fadeInUp animate__delay-1s">
                <h1>
                    Razak <br />
                    Pharmacy
                </h1>
            </div>
            <div class="hero-text-thin">
                <p class="animate__animated animate__fadeInUp animate__delay-2s">
                    With more than half a century<br/>
                    of experience
                </p>
                <div class="two-circle animate__animated animate__fadeInUp animate__delay-2s">
                    >
                </div>
            </div>
        </div>

        <div class="social">
            <a href="#">
                <img src="../assets/whatsapp.png" alt="whatsapp logo">
            </a>
            <a href="#">
                <img src="../assets/instagram.png" alt="instagram logo">
            </a>
            <a href="#">
                <img src="../assets/linkedin-in.png" alt="linkedin-in logo">
            </a>
        </div>
    </div>
</template>

<script>
    import gsap from 'gsap';
    export default {
        name: "FirstSection",
        methods:{
            openMenu(){
                let tl = gsap.timeline();
                tl.to(".nav-container",1,{
                    left:0
                })

                tl.staggerFrom(".nav > div",0.8,{
                    y: -50,
                    opacity: 0,
                },"0.6","-=0.1")
            },
            closeMenu(){
                let tl = gsap.timeline();
                tl.to(".nav-container",1,{
                    left:"-100%"
                })
            }
        }
    }
</script>

<style scoped>
    .first-section{
        width: 100%;
        height: 100vh;
        overflow: hidden;
        background: url("../assets/slider img.png") no-repeat fixed center;
        background-origin: content-box;
        background-size: cover;
        position: relative;
    }

    ul.menu{
        display: flex;
        justify-content: space-between;
        margin: 0;
        padding: 1.5rem 3rem 0;
    }

    .menu li{
        list-style: none;
    }

    .menu-icon{
        display: flex;
        flex-direction: row-reverse;
    }

    .menu-icon div{
        width: 95px;
        height: 95px;
        border-radius: 50%;
        background: #fff;
        position: relative;
        cursor: pointer;
    }

    .menu-icon div:after{
        content: "";
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: 2px solid #ffffff;
        position: absolute;
        opacity: 0;
        animation: pulse 1.5s ease-out infinite;
    }

    .menu-close{
        position: absolute;
        top: 0;
        right: 0;
        padding: 40px;
        font-size: 20px;
        cursor: pointer;
        z-index: 999;
    }

    .canvas-logo{
        position: absolute;
        top: 2rem;
        left: 4rem;
    }

    .canvas-logo img{
        width: 85px;
    }

    .nav-container{
        position: fixed;
        left: -100%;
        width: 100%;
        height: 100vh;
        background-color: #1d447e;
        text-align: center;
        transition: all 0.6s cubic-bezier(0.16,1,0.3,1);
        z-index: 2;
        top: 0;
    }

    .nav{
        flex-direction: column;
        justify-content: start;
        align-items: start;
        position: relative;
        padding: 16vh 0 24vh 11vh;
    }

    .menu__item-link{
        text-decoration: none;
        color: rgba(255,255,255,0.5);
        display: inline-block;
        font-size: 4.5vw;
        cursor: pointer;
        transition: all 0.2s;
        line-height: 100px;
        font-weight: 700;
        margin-bottom: -2rem;
    }

    .menu__item-link span{
        font-size: 1.5vw;
        position: relative;
        top: -30px;
        left: -5px;
    }

    .menu__item-link:hover{
        color: #ffffff;
    }

    .menu__item-img{
        transform: scale(0);
    }

    .item-1 > .menu__item-img{
        padding: 0 20px;
        z-index: 2;
        pointer-events: none;
        height: 50vh;
        max-width: 600px;
        opacity: 1;
        transform: scale(0);
        position: absolute;
        right: -278%;
        top: 28%;
    }

    .item-2 > .menu__item-img{
        padding: 0 20px;
        z-index: 2;
        pointer-events: none;
        height: 50vh;
        max-width: 600px;
        opacity: 1;
        transform: scale(0);
        position: absolute;
        right: -300%;
        top: -67%;
    }

    .item-3 > .menu__item-img{
        padding: 0 20px;
        z-index: 2;
        pointer-events: none;
        height: 50vh;
        max-width: 600px;
        opacity: 1;
        transform: scale(0);
        position: absolute;
        right: -142%;
        top: -166%;
    }

    .item-4 > .menu__item-img{
        padding: 0 20px;
        z-index: 2;
        pointer-events: none;
        height: 50vh;
        max-width: 600px;
        opacity: 1;
        transform: scale(0);
        position: absolute;
        right: -210%;
        top: -269%;
    }

    .item-1:hover > .menu__item-img,.item-3:hover > .menu__item-img,.item-4:hover > .menu__item-img{
        transform: scale(1);
        transition: all 0.2s;
    }

    .item-2:hover > .menu__item-img{
        transform: scale(1);
        transition: all 0.2s;
    }



    @keyframes pulse {
        50%{
            opacity: 0.8;
        }
        100%{
            transform: scale(1.2);
            opacity: 0;
        }
    }

    .menu-icon div img{
        width: 3rem;
        position: absolute;
        top: 23px;
        left: 25px;
    }

    .menu-icon div span{
        position: absolute;
        bottom: 27px;
        left: 30px;
        color: #003680;
    }

    .menu-icon .lang{
        display: flex;
        align-items: center;
        margin-right: 2.5rem;
        color: #ffffff;
        font-size: 1rem;
    }

    .logo{
        width: 100px;
        margin-top: 0.5rem;
    }

    .hero-text-bold,.hero-text-thin{
        color: #ffffff;
    }

    .hero-text{
        position: absolute;
        top: 40%;
        left: 12%;
    }

    .hero-text-bold{
        font-size: 1.5rem;
        line-height: 43px;
        margin-bottom: 1rem;
    }

    .hero-text-thin{
        font-size: 1.2rem;
        letter-spacing: 0.07rem;
        display: flex;
    }

    .hero-text-thin p{
        margin-right: 70px;
        color: rgba(255,255,255,0.7);
    }

    .two-circle{
        width: 45px;
        height: 45px;
        border-radius: 50%;
        border: 2px solid #ffffff;
        position: relative;
        font-size: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .two-circle:after{
        content: "";
        width: 60px;
        height: 60px;
        border-radius: 50%;
        border: 2px solid #ffffff;
        position: absolute;
        top: -9px;
        left: -10px;
    }

    .social{
        display: flex;
        position: absolute;
        bottom: 3.5rem;
        left: 12%;
    }

    .social img{
        width: 18px;
        margin-right: 11px;
    }

    .sharing{
        color: #ffffff;
        margin-left: 12rem;
        margin-top: 10rem;
    }
</style>