import { component$ } from '@builder.io/qwik';
import AppImg from '~/public/img/app-img.png?jsx';
import FlShape1 from '~/public/img/shape/fl-shape-1.png?jsx';
import FlShape2 from '~/public/img/shape/fl-shape-2.png?jsx';
import FlShape3 from '~/public/img/shape/fl-shape-3.png?jsx';
import FlShape4 from '~/public/img/shape/fl-shape-4.png?jsx';
import FlShape5 from '~/public/img/shape/fl-shape-5.png?jsx';
import FlShape6 from '~/public/img/shape/fl-shape-6.png?jsx';
import FlShape7 from '~/public/img/shape/fl-shape-7.png?jsx';
import FlShape9 from '~/public/img/shape/fl-shape-9.png?jsx';
import FlShape10 from '~/public/img/shape/fl-shape-10.png?jsx';



export const About = component$(() => {
  return (
    <section class="about-section section-gap-full relative" id="about-section">
        <div class="container">
            <div class="row align-items-center justify-content-between">
                <div class="col-lg-6 col-md-12 about-left">
                    <div class="img img-fluid "> 
                        <AppImg/>
                    </div>
                
                </div>
                <div class="col-lg-5 col-md-7 about-right">
                    <h3>What Is Dope App?</h3>
                    <h1>The Most Beautiful Theme For Your App</h1>
                    <ul>
                        <li class="d-flex">
                            <div class="icon">
                                <span class="ti-layout-media-center-alt"></span>
                            </div>
                            <div class="details">
                                <h4>Retina Ready</h4>
                                <p>
                                    A wonderful serenity has taken possession of my entire soul, like these sweet
                                    mornings of spring which I enjoyed.
                                </p>
                            </div>
                        </li>
                        <li class="d-flex">
                            <div class="icon">
                                <span class="ti-crown"></span>
                            </div>
                            <div class="details">
                                <h4>Premium Quality</h4>
                                <p>
                                    A wonderful serenity has taken possession of my entire soul, like these sweet
                                    mornings of spring which I enjoyed.
                                </p>
                            </div>
                        </li>
                        <li class="d-flex">
                            <div class="icon">
                                <span class="ti-headphone-alt"></span>
                            </div>
                            <div class="details">
                                <h4>Excellent Support</h4>
                                <p>
                                    A wonderful serenity has taken possession of my entire soul, like these sweet
                                    mornings of spring which I enjoyed.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="floating-shapes">
            <span data-parallax='{"x": 150, "y": -20, "rotateZ":500}'>
                <FlShape1/>
            </span>
            <span data-parallax='{"x": 250, "y": 150, "rotateZ":500}'>
            <FlShape2/>
            </span>
            <span data-parallax='{"x": -180, "y": 80, "rotateY":2000}'>
            <FlShape3/>
            </span>
            <span data-parallax='{"x": -20, "y": 180}'>
            <FlShape4/>
            </span>
            <span data-parallax='{"x": 300, "y": 70}'>
            <FlShape5/>
            </span>
            <span data-parallax='{"x": 250, "y": 180, "rotateZ":1500}'>
            <FlShape6/>
            </span>
            <span data-parallax='{"x": 180, "y": 10, "rotateZ":2000}'>
            <FlShape7/>
            </span>
            <span data-parallax='{"x": 60, "y": -100}'>
            <FlShape9/>
            </span>
            <span data-parallax='{"x": -30, "y": 150, "rotateZ":1500}'>
            <FlShape10/>
            </span>
        </div>
</section>
  );
});
