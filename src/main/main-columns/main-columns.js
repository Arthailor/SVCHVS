import { Component } from "react";
import './main-columns.css'

class MainColumns extends Component {
  render() {
    return (
        <section class="page__main main">
                <div class="main__line"></div>
                <div class="main__container">
                    <div class="main__col-1 ">
                        <div class="main__collections">
                            <div class="main__collections-title">
                                <img src="img/svg/menu-1.svg" alt="image"></img>
                                <a class="lng-allcol">ALL COLLECTIONS</a>
                            </div>
                            <nav class="main__collections-items">
                                <ul class="main__collections-list">
                                    <li class="main__collections-item">
                                        <a href="#" class="main__collections-link lng-all">All</a>
                                    </li>
                                    <li class="main__collections-item">
                                        <a href="#" class="main__collections-link lng-newarr">New Arrivals</a>
                                    </li>
                                    <li class="main__collections-item">
                                        <a href="#" class="main__collections-link lng-hotsale">Hot Sale</a>
                                    </li>
                                    <li class="main__collections-item">
                                        <a href="#" class="main__collections-link lng-furni">Furniture</a>
                                    </li>
                                    <li class="main__collections-item">
                                        <a href="#" class="main__collections-link lng-armature">Amrature</a>
                                    </li>
                                    <li class="main__collections-item">
                                        <a href="#" class="main__collections-link lng-tables">Tabble</a>
                                    </li>
                                    <li class="main__collections-item">
                                        <a href="#" class="main__collections-link lng-chairs">Chair</a>
                                    </li>
                                    <li class="main__collections-item">
                                        <a href="#" class="main__collections-link lng-sofas">Sofa</a>
                                    </li>
                                    <li class="main__collections-item">
                                        <a href="#" class="main__collections-link lng-mirrors">Mirrors</a>
                                    </li>
                                    <li class="main__collections-item">
                                        <a href="#" class="main__collections-link lng-stools">Stools</a>
                                    </li>
                                    <li class="main__collections-item">
                                        <a href="#" class="main__collections-link lng-benches">Benches</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div class="main__col-2">
                        <div class="main__header">
                            <nav class="main__menu menu burger-wrap">
                                <ul class="menu__list">
                                    <li class="menu__item">
                                        <a href="#" class="menu__link lng-home">HOME</a>
                                    </li>
                                    <li class="menu__item">
                                        <a href="#" class="menu__link lng-shop">SHOP</a>
                                    </li>
                                    <li class="menu__item">
                                        <a href="blog.html" class="menu__link lng-blog">BLOG</a>
                                    </li>
                                    <li class="menu__item">
                                        <a href="about.html" class="menu__link lng-about">ABOUT</a>
                                    </li>
                                    <li class="menu__item">
                                        <a href="#contact" class="menu__link lng-contact">CONTACT US</a>
                                    </li>
                                </ul>
                            </nav>
                            <div class="main__tel">
                                <img src="img/svg/tel.svg" alt="tel"></img>
                                <a href="tel:718-414-3871">718-414-3871</a>
                            </div>
                            <button class="icon-menu" type="button">
                                <span></span>
                            </button>
                        </div>
                        <div class="main__body body-main">
                            <div class="swiper body-main__swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
                                <div class="swiper-wrapper body-main__wrapper" id="swiper-wrapper-10c0fd10a6771a8931" aria-live="off">
                                    <div class="swiper-slide body-main__slide swiper-slide-active" role="group" aria-label="3 / 3">
                                        <div class="body-main__content content-main">
                                            <div class="content-main__type lng-topcol">TOP COLLECTIONS 2022</div>
                                            <div class="content-main__title">
                                                <a class="lng-we-serve">We Serve Your Dream </a><span class="lng-furni">Furniture</span>
                                            </div>
                                            <div class="content-main__discount lng-discount">Get 50% off all products</div>
                                            <a href="#" class="content-main__btn lng-shopnow">SHOP NOW</a>
                                        </div>
                                        <div class="body-main__image">
                                            <img src="img/png/modern-chair-bg.png" alt="modern-chair"></img>
                                        </div>
                                    </div>
                                </div>
                            <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
                            <div class="swiper-pagination"></div>
                            <div class="swiper-mini body-main__swiper-mini swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-watch-progress swiper-backface-hidden swiper-thumbs">
                                <div class="swiper-wrapper-mini body-main__wrapper-mini swiper-wrapper " id="swiper-wrapper-79cea710dc5e7473b" aria-live="polite">
                                    <div class="swiper-slide-mini body-main__slide-mini slide-mini swiper-slide swiper-slide-visible swiper-slide-active" style={{width: 12.6667 + "px",marginRight:30 + "px"}} role="group" aria-label="1 / 3">
                                        <div class="slide-mini__image">
                                            <img src="img/png/chair.png" alt="chair"></img>
                                        </div>
                                        <div class="slide-mini__price"><span>$</span> 120</div>
                                        <div class="slide-mini__type lng-office-chair">Office Desk Chair</div>
                                    </div>
                                    <div class="swiper-slide-mini body-main__slide-mini slide-mini swiper-slide swiper-slide-visible swiper-slide-next" style={{width: 12.6667 + "px",marginRight:30 + "px"}} role="group" aria-label="2 / 3">
                                        <div class="slide-mini__image">
                                            <img src="img/png/sofa.png" alt="sofa"></img>
                                        </div>
                                        <div class="slide-mini__price"><span>$</span> 180</div>
                                        <div class="slide-mini__type lng-home-sofa">Home Alisa Sofa</div>
                                    </div>
                                    <div class="swiper-slide-mini body-main__slide-mini slide-mini swiper-slide swiper-slide-visible swiper-slide-thumb-active" style={{width: 12.6667 + "px",marginRight:30 + "px"}} role="group" aria-label="3 / 3">
                                        <div class="slide-mini__image">
                                            <img src="img/png/modern-chair-bg.png" alt="modern-chair"></img>
                                        </div>
                                        <div class="slide-mini__price"><span>$</span> 250</div>
                                        <div class="slide-mini__type lng-modern-chair">Modern Chair</div>
                                    </div>
                                </div>
                            <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
                        </div>
                    </div>
                </div>
            </section>
    );
  }
}
export default MainColumns;