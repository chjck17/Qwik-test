import { component$ } from '@builder.io/qwik';

export const Price = component$(() => {
  return (
    <section class="price-section section-gap-full" id="price-section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-5 price-left">
            <h4>
              Our Pricing Plan
              <br />
              and Options
            </h4>
            <p>Far curiosity incommode now led smallness allowance. Favour bed assure son things yet.</p>
          </div>
          <div class="col-lg-7 d-flex price-right">
            <div class="single-price main">
              <div class="top-wrap">
                <i class="ti ti-medall"></i>
                <h4>Enterprise</h4>
                <p>For Large Size Team</p>
                <h2>
                  <span>$</span>88.0
                </h2>
              </div>
              <div class="bottom-wrap">
                <ul>
                  <li class="d-flex justify-content-between align-items-center">
                    <span>1000 Max Connection</span>
                    <i class="ti ti-check"></i>
                  </li>
                  <li class="d-flex justify-content-between align-items-center">
                    <span>1000 Max Connection</span>
                    <i class="ti ti-check"></i>
                  </li>
                  <li class="d-flex justify-content-between align-items-center">
                    <span>Additional Option</span>
                    <i class="ti ti-check"></i>
                  </li>
                  <li class="d-flex justify-content-between align-items-center">
                    <span>Lifetime Support</span>
                    <i class="ti ti-check"></i>
                  </li>
                </ul>
                <a href="#" class="primary-btn primary-btn-w d-block mx-auto">
                  Select Plan
                </a>
              </div>
            </div>
            <div class="single-price">
              <div class="top-wrap">
                <i class="ti ti-briefcase"></i>
                <h4>Free</h4>
                <p class="relative">For Personal Use</p>
                <h2 class="relative">
                  <span>$</span>00.0
                </h2>
              </div>
              <div class="bottom-wrap">
                <ul>
                  <li class="d-flex justify-content-between align-items-center">
                    <span>1000 Max Connection</span>
                    <i class="ti ti-check"></i>
                  </li>
                  <li class="d-flex justify-content-between align-items-center">
                    <span>1000 Max Connection</span>
                    <i class="ti ti-check"></i>
                  </li>
                  <li class="d-flex justify-content-between align-items-center">
                    <span>Additional Option</span>
                    <i class="ti ti-close"></i>
                  </li>
                  <li class="d-flex justify-content-between align-items-center">
                    <span>Lifetime Support</span>
                    <i class="ti ti-close"></i>
                  </li>
                </ul>
                <a href="#" class="primary-btn d-block mx-auto">
                  Select Plan
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
