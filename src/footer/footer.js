import { Component } from "react";
import "./footer.css";

class Footer extends Component {
  render() {
    return (
      <footer id="contact" class="footer">
            <div class="footer__main main-footer">
                <div class="main-footer__container">
                    <div class="main-footer__column">
                        <div class="main-footer__logo">
                            <img src="img/svg/logo.svg" alt="logo"></img>
                            <div class="main-footer__logo-text logo-text">
                                Furniking
                            </div>
                        </div>
                        <div class="main-footer__text">
                            <p class="lng-furniking-footer">
                                Funking is the a popular Ecommerce site. Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                            </p>
                        </div>
                        <div class="main-footer__socials">
                            <a href="#" class="main-footer-socials__item">
                                <img src="img/svg/01.svg" alt="socials"></img>
                            </a>
                            <a href="#" class="main-footer-socials__item">
                                <img src="img/svg/02_002.svg" alt="socials"></img>
                            </a>
                            <a href="#" class="main-footer-socials__item">
                                <img src="img/svg/03.svg" alt="socials"></img>
                            </a>
                            <a href="#" class="main-footer-socials__item">
                                <img src="img/svg/04_002.svg" alt="socials"></img>
                            </a>
                            <button id="map-button">
                                <img src="img/png/map.png" alt="map" style={{width: 20 + 'px'}}></img>
                            </button>
                        </div>
                    </div>
                    <div class="main-footer__body">
                        <div class="main-footer__column">
                            <h3 class="main-footer__title lng-help">Help</h3>
                            <nav class="main-footer__menu menu-footer">
                                <ul class="menu-footer__list">
                                    <li class="menu-footer__item">
                                        <a href="#" class="menu-footer__link lng-privacy-pol">Privacy Policy</a>
                                    </li>
                                    <li class="menu-footer__item">
                                        <a href="#" class="menu-footer__link lng-ship-n-del">Shipping &amp; Delivery</a>
                                    </li>
                                    <li class="menu-footer__item">
                                        <a href="#" class="menu-footer__link lng-refund">Refund Policy</a>
                                    </li>
                                    <li class="menu-footer__item">
                                        <a href="#" class="menu-footer__link lng-track">Track Your Order</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div class="main-footer__column">
                            <h3 class="main-footer__title lng-store">Store</h3>
                            <nav class="main-footer__menu menu-footer">
                                <ul class="menu-footer__list">
                                    <li class="menu-footer__item">
                                        <a href="#" class="menu-footer__link lng-furni">Furniture</a>
                                    </li>
                                    <li class="menu-footer__item">
                                        <a href="#" class="menu-footer__link lng-tables">Tabble</a>
                                    </li>
                                    <li class="menu-footer__item">
                                        <a href="#" class="menu-footer__link lng-sofas">Sofa</a>
                                    </li>
                                    <li class="menu-footer__item">
                                        <a href="#" class="menu-footer__link lng-other">Other</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div class="main-footer__column">
                            <h3 class="main-footer__title lng-support">Supports</h3>
                            <nav class="main-footer__menu menu-footer">
                                <ul class="menu-footer__list">
                                    <li class="menu-footer__item">
                                        <a href="#" class="menu-footer__link lng-feedback">Feedbcak</a>
                                    </li>
                                    <li class="menu-footer__item">
                                        <a href="#" class="menu-footer__link lng-contact-us">Contact us</a>
                                    </li>
                                    <li class="menu-footer__item">
                                        <a href="#" class="menu-footer__link lng-download">Download app</a>
                                    </li>
                                    <li class="menu-footer__item">
                                        <a href="#" class="menu-footer__link lng-terms-con">Terms conditins</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer__bottom bottom-footer">
                <div class="bottom-footer__container">
                    <div class="bottom-footer__copy lng-all-rights">© 2021 Furniking - All rights reserved.</div>
                    <a href="admin_panel.html" class="bottom-footer__link lng-adminmenu hidden">AdminMenu</a>
                    <nav class="bottom-footer__menu">
                        <ul class="bottom-footer__list">
                            <li class="bottom-footer__item">
                                <a href="#" class="bottom-footer__link lng-privacy">Privacy</a>
                            </li>
                            <li class="bottom-footer__item">
                                <a href="#" class="bottom-footer__link lng-security">Security </a>
                            </li>
                            <li class="bottom-footer__item">
                                <a href="#" class="bottom-footer__link lng-terms">Terms</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div id="cover"></div>
            <div id="footer-map">
                <button id="button-close" class="footer-button-close">
                    <span></span>
                    <span></span>
                </button>
                <div>
                    <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A1afe038933527f70463344f7378bc0dc76847cb1598dedab79c169843e924eca&amp;width=320&amp;height=320&amp;lang=ru_RU&amp;scroll=true"></script>
                </div>
            </div>
        </footer>
    );
  }
}

export default Footer;
