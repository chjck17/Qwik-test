import { component$ } from '@builder.io/qwik';

export const Explore = component$(() => {
  return (
    <section class="explore-section section-gap-full relative">
      <div class="overlay overlay-bg"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-6 explore-left">
            <h3>Explore More</h3>
            <h1>Other Features</h1>
            <p>
              The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him.
            </p>
            <div class="d-flex counter-wrap">
              <div class="single-counter">
                <h2>2.5K+</h2>
                <p>Download</p>
              </div>
              <div class="single-counter">
                <h2>2K+</h2>
                <p>Review</p>
              </div>
              <div class="single-counter">
                <h2>3.4K+</h2>
                <p>Active User</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6 explore-right"></div>
        </div>
      </div>
    </section>
  );
});
