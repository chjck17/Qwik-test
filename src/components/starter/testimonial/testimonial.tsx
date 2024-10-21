import { component$ } from '@builder.io/qwik';
import ImgAvatar1 from '~/media/img/avatar1.jpg?jsx';

import ImgAvatar2 from '~/media/img/avatar2.jpg?jsx';
import ImgAvatar3 from '~/media/img/avatar3.jpg?jsx';

export const Testimonial = component$(() => {
  return (
    <section class="testimonial-section section-gap-full" id="testimonial-section">
      <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-4 testimonial-left">
                    <h2>What People Says</h2>
                    <p>
                        Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorperi.
                    </p>
                </div>
                <div class="col-lg-8 testimonial-right">
                    <div class="testimonial-carusel owl-carousel" id="testimonial-carusel">
                        <div class="single-testimonial item">
                            <p>
                                “Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam.”
                            </p>
                            <div class="user-details d-flex flex-row align-items-center">
                                <div class="img-wrap">
                                    <ImgAvatar1 />
                                </div>
                                <div class="details">
                                    <h4>Alice Johnson</h4>
                                    <p>Business Development</p>
                                </div>
                            </div>
                        </div>
                        <div class="single-testimonial item">
                            <p>
                                “Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam.”
                            </p>
                            <div class="user-details d-flex flex-row align-items-center">
                                <div class="img-wrap">
                                <ImgAvatar2 />
                                </div>
                                <div class="details">
                                    <h4>Amber Mcdonald</h4>
                                    <p>Web Developer</p>
                                </div>
                            </div>
                        </div>
                        <div class="single-testimonial item">
                            <p>
                                “Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam.”
                            </p>
                            <div class="user-details d-flex flex-row align-items-center">
                                <div class="img-wrap">
                                <ImgAvatar3 />
                                </div>
                                <div class="details">
                                    <h4>Rhonda Barnes</h4>
                                    <p>UI/UX Designer</p>
                                </div>
                            </div>
                        </div>
                        <div class="single-testimonial item">
                            <p>
                                “Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam.”
                            </p>
                            <div class="user-details d-flex flex-row align-items-center">
                                <div class="img-wrap">
                                <ImgAvatar1 />
                                </div>
                                <div class="details">
                                    <h4>Alice Johnson</h4>
                                    <p>Business Development</p>
                                </div>
                            </div>
                        </div>
                        <div class="single-testimonial item">
                            <p>
                                “Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam.”
                            </p>
                            <div class="user-details d-flex flex-row align-items-center">
                                <div class="img-wrap">
                                <ImgAvatar2 />
                                </div>
                                <div class="details">
                                    <h4>Amber Mcdonald</h4>
                                    <p>Web Developer</p>
                                </div>
                            </div>
                        </div>
                        <div class="single-testimonial item">
                            <p>
                                “Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam.”
                            </p>
                            <div class="user-details d-flex flex-row align-items-center">
                                <div class="img-wrap">
                                <ImgAvatar3 />
                                </div>
                                <div class="details">
                                    <h4>Rhonda Barnes</h4>
                                    <p>UI/UX Designer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
});
