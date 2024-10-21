import { component$ } from '@builder.io/qwik';
import ImgLogo1 from '~/public/img/logo/logo1.png?jsx';
import ImgLogo2 from '~/public/img/logo/logo2.png?jsx';
import ImgLogo3 from '~/public/img/logo/logo3.png?jsx';
import ImgLogo4 from '~/public/img/logo/logo4.png?jsx';
export const FeatureStart = component$(() => {
  return (
    <section class="featured-section">
        <div class="container">
            <div class="section-title">
                <h2 class="text-center">As Featured In</h2>
            </div>
            <div class="row align-item-center">
                <div class="col-lg-3 col-md-6 col-sm-6 single-logo">
                <ImgLogo1/>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 single-logo">
                <ImgLogo2/>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 single-logo">
                <ImgLogo3/>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 single-logo">
                <ImgLogo4/>
                </div>
            </div>
        </div>
    </section>
  );
});
