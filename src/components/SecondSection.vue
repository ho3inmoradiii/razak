<template>
    <div class="second-section section">
        <div class="container h-100">
            <div class="row h-100 justify-content-center align-items-center pl-6"  v-scrollanimation>
                <div class="col-md-6">
                    <div class="about">
                        <div class="about-thin">
                            About Razak
                        </div>
                        <div class="about-bold">
                            <h2>
                                Razak Pharmacy <br />
                                with more than half a <br />
                                century of experience & <br />
                                most quality
                            </h2>
                        </div>
                        <div class="about-link">
                            <a href="#">Click & Learn more</a>
                            <div class="about-circle">
                                >
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 pl-6">
                    <div class="detail">
                        <div class="detail-text">
                            Razak Laboratories Pharmaceutical Joint <br />
                            Stock Company started its activity in 1343 <br />
                            Hijri (1964 AD) under the name of Pfizer <br />
                            Laboratories Joint Stock Company under <br />
                            the ownership of Pfizer America
                        </div>
                        <div class="detail-buttons">
                            <button class="detail-buttons-product">Product ></button>
                            <button>Contact ></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SecondSection",
    }
</script>

<style>
    .second-section{
        height: 100vh;
    }

    .about-thin{
        margin-bottom: 0.2rem;
        font-size: 15px;
        font-weight: 500;
        color: rgba(0,0,0,0.5);
    }

    .about-bold{
        margin-bottom: 4rem;
    }

    .about-bold h2{
        font-weight: 700;
    }

    .detail-text{
        margin-bottom: 4rem;
        font-size: 17px;
        font-weight: 500;
        line-height: 30px;
    }

    .detail{
        padding-top: 2rem;
    }

    .about-link{
        display: flex;
    }

    .about-link a{
        color: #001C7B;
        font-size: 15px;
        font-weight: 700;
    }

    .about-circle{
        position: relative;
        margin-left: 1.5rem;
        width: 30px;
        height: 30px;
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

    .about-circle:before{
        content: "";
        position: absolute;
        width: 39px;
        height: 39px;
        border-radius: 50%;
        border: 1.5px solid #001C7B;
        top: -6px;
    }

    .detail-buttons{
        display: flex;
    }

    .detail-buttons button{
        background-color: inherit;
        border: 1.5px solid #001C7B;
        color: #001C7B;
        padding: 6px 23px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        border-radius: 40px;
    }

    .detail-buttons-product{
        margin-right: 1.2rem;
    }

    .before-enter{
        opacity: 0;
        transform: scale(0.5);
        transition: all 1s ease-out;
    }

    .enter{
        opacity: 1;
        transform: scale(1);
    }
</style>