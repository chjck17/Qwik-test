import { component$ } from '@builder.io/qwik';
import ImgLogo from '~/public/img/logo-w.png?jsx';
export const Header = component$(() => {
  return (
    <header class="header-area" id="header-area">
      <div class="dope-nav-container breakpoint-off">
        <div class="container">
          <div class="row">
            <nav class="dope-navbar justify-content-between" id="dopeNav">
              <a class="nav-brand" href="index.html">
                <ImgLogo />
              </a>

              <div class="dope-navbar-toggler">
                <span class="navbarToggler">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>

              <div class="dope-menu">
                <div class="dopecloseIcon">
                  <div class="cross-wrap">
                    <span class="top"></span>
                    <span class="bottom"></span>
                  </div>
                </div>

                <div class="dopenav">
                  <ul id="nav">
                    <li><a href="#banner-section">Home</a></li>
                    <li><a href="#about-section">About</a></li>
                    <li><a href="#feature-section">Feature</a></li>
                    <li><a href="#price-section">Price</a></li>
                    <li><a href="#testimonial-section">Testimonial</a></li>
                    <li><a href="#download-section">Download</a></li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
});
