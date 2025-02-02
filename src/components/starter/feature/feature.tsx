import { component$ } from '@builder.io/qwik';

export const Feature = component$(() => {
  return (
    <section class="feature-section section-gap-full" id="feature-section">
      <div class="container">
        <div class="row align-items-center feature-wrap">
          <div class="col-lg-4 header-left">
            <h1>An exceptionally unique experience to you</h1>
            <a class="primary-btn" href="about-us.html">
              Know More<span class="ti-arrow-right"></span>
            </a>
          </div>
          <div class="col-lg-8">
                    <div class="row features-wrap">
                        <div class="col-md-6">
                            <div class="single-feature relative">
                                <div class="overlay overlay-bg"></div>
                                <span class="ti-palette"></span>
                                <h3>Awesome Design</h3>
                                <p>
                                    His many legs, pitifully thin compared with the size of the rest of him, waved
                                    about helplessly as he looked.
                                </p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="single-feature relative">
                                <div class="overlay overlay-bg"></div>
                                <span class="ti-heart"></span>
                                <h3>Made With Love</h3>
                                <p>
                                    His many legs, pitifully thin compared with the size of the rest of him, waved
                                    about helplessly as he looked.
                                </p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="single-feature relative">
                                <div class="overlay overlay-bg"></div>
                                <span class="ti-loop"></span>
                                <h3>Constant Update</h3>
                                <p>
                                    His many legs, pitifully thin compared with the size of the rest of him, waved
                                    about helplessly as he looked.
                                </p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="single-feature relative">
                                <div class="overlay overlay-bg"></div>
                                <span class="ti-headphone-alt"></span>
                                <h3>Full Free Chat</h3>
                                <p>
                                    His many legs, pitifully thin compared with the size of the rest of him, waved
                                    about helplessly as he looked.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
      </div>
    </section>
  );
});
