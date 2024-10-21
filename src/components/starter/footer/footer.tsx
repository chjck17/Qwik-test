import { component$ } from '@builder.io/qwik';
import ImgLogoW from '~/public/img/logo-w.png?jsx';

export const Footer = component$(() => {
  return (
    <footer class="footer-section section-gap-half">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-5 footer-left">
            <a href="#">
            <ImgLogoW />
            </a>
            <p class="copyright-text">
              &copy; 2018 Design With <i class="fa fa-heart" aria-hidden="true"></i> By{' '}
              <a href="http://dopetheme.com" target="_blank" rel="noopener noreferrer">
                Dope Theme
              </a>
            </p>
          </div>
          <div class="col-lg-7">
            <ul id="social">
              <li>
                <a target="_blank" href="#">
                  <i class="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a target="_blank" href="#">
                  <i class="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a target="_blank" href="#">
                  <i class="fa fa-google-plus"></i>
                </a>
              </li>
              <li>
                <a target="_blank" href="#">
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
            <ul class="footer-menu">
              <li>
                <a href="#">Affiliate Program</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Refund Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
});
