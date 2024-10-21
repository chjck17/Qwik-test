import { component$ } from '@builder.io/qwik';
import ImgScreen1 from '~/media/img/screen/screen1.jpg?jsx';
import ImgScreen2 from '~/media/img/screen/screen2.jpg?jsx';
import ImgScreen3 from '~/media/img/screen/screen3.jpg?jsx';
import ImgScreen4 from '~/media/img/screen/screen4.jpg?jsx';
import ImgScreen5 from '~/media/img/screen/screen5.jpg?jsx';
import ImgScreen6 from '~/media/img/screen/screen6.jpg?jsx';

export const Screenshot = component$(() => {
  return (
    <section class="screenshot-section section-gap-full">
      <div class="container">
        <div class="section-title">
          <h2 class="text-center">App Screenshots</h2>
        </div>
        <div class="row">
          <div class="screenshot_slider owl-carousel" id="screenshot-carusel">
            <div class="item">
            <ImgScreen1 />
            </div>
            <div class="item">
            <ImgScreen2 />
            </div>
            <div class="item">
            <ImgScreen3 />
            </div>
            <div class="item">
            <ImgScreen4 />
            </div>
            <div class="item">
            <ImgScreen5 />
            </div>
            <div class="item">
            <ImgScreen6 />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
