import { component$ } from '@builder.io/qwik';
import ImgScreen1 from '~/media/img/screen1.png?jsx';
  
export const Banner = component$(() => {
  return (
    <section class="banner-section relative section-gap-full" id="banner-section">
      <div class="overlay overlay-bg"></div>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 banner-left">
            <h1 class="text-uppercase">Hi, I'm Dope app.</h1>
            <p>
              Ultimate solution to make stunning mobile app landing around the world. Lorem ipsum dolor, sit amet
              consectetur adipisicing.
            </p>
            <a class="video-btn primary-btn" href="about-us.html">
              About More
            </a>
          </div>
          <div class="col-md-6 banner-right text-center">
            {/* <img width="500" height="300" class="img-fluid" src="/img/screen1.png" alt="Screen Image"  /> */}
          <div class="img-fluid"><ImgScreen1 /></div>
            
          </div>
        </div>
      </div>
      <div class="wave">
            <svg class="nectar-shape-divider" fill="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 300"
                preserveAspectRatio="none">
                <path d="M 1000 299 l 2 -279 c -155 -36 -310 135 -415 164 c -102.64 28.35 -149 -32 -232 -31 c -80 1 -142 53 -229 80 c -65.54 20.34 -101 15 -126 11.61 v 54.39 z"></path>
                <path d="M 1000 286 l 2 -252 c -157 -43 -302 144 -405 178 c -101.11 33.38 -159 -47 -242 -46 c -80 1 -145.09 54.07 -229 87 c -65.21 25.59 -104.07 16.72 -126 10.61 v 22.39 z"></path>
                <path d="M 1000 300 l 1 -230.29 c -217 -12.71 -300.47 129.15 -404 156.29 c -103 27 -174 -30 -257 -29 c -80 1 -130.09 37.07 -214 70 c -61.23 24 -108 15.61 -126 10.61 v 22.39 z"></path>
            </svg>
        </div>
    </section>
  );
});
