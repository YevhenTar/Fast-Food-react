import {useEffect} from "react";

function App() {
  useEffect(() => {
    const onLoad = ():void => {
      document.body.classList.add('loaded_hiding');
      setTimeout(():void => {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
      }, 700);
    };

    if (document.readyState === 'complete') {
      onLoad(); // Страница уже загружена
    } else {
      window.addEventListener('load', onLoad);
    }

    return () => {
      window.removeEventListener('load', onLoad);
    };
  }, []);

  return (
      <>
        <div className="preloader">
          <div className="preloader__wrap">
            <div className="pl1">
              <div className="pl1__a"></div>
              <div className="pl1__b"></div>
              <div className="pl1__c"></div>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <header className="main-header lock-padding">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="main-header__wrap">
                    <a href="#" className="logo-link">
                      <img src="assets/img/header/1.png" alt="logo" className="logo-image"/>
                    </a>
                    <nav className="menu">
                      <ul className="menu-list">
                        <li className="menu-list__item"><a href="#blog-point" className="menu-list__link">Blog</a></li>
                        <li className="menu-list__item"><a href="#our-offer-point" className="menu-list__link">Our
                          offer</a></li>
                        <li className="menu-list__item"><a href="#partners-point"
                                                           className="menu-list__link">Partners</a></li>
                        <li className="menu-list__item"><a href="#reviews-point" className="menu-list__link">Reviews</a>
                        </li>
                      </ul>
                    </nav>
                    <a href="#popup_order" className="button main-header__button popup-link">Order now</a>
                    <div className="burger-menu" aria-expanded="false" aria-controls="">
                      <div className="burger-menu__line burger-menu__line_top"></div>
                      <div className="burger-menu__line burger-menu__line_middle"></div>
                      <div className="burger-menu__line burger-menu__line_bottom"></div>
                    </div>
                    <div className="hidden-menu">
                      <ul className="hidden-menu__list">
                        <li className="hidden-menu__item"><a href="#blog-point" className="hidden-menu__link">Blog</a>
                        </li>
                        <li className="hidden-menu__item"><a href="#our-offer-point" className="hidden-menu__link">Our
                          offer</a></li>
                        <li className="hidden-menu__item"><a href="#partners-point"
                                                             className="hidden-menu__link">Partners</a></li>
                        <li className="hidden-menu__item"><a href="#reviews-point"
                                                             className="hidden-menu__link">Reviews</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <main className="main-content">
            <section className="home-section">
              <div className="container">
                <div className="row">
                  <div className="col-xxl-6 col-xl-6 col-lg-7 col-md-9 col-sm-11 col-12">
                    <div className="home-block">
                      <h1 className="home-block__headline">FAST FOOD BURGERS</h1>
                      <h2 className="home-block__subheadline">The fastest food, for instant hunger.</h2>
                      <p className="home-block__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                        recusandae ratione rerum cumque alias minus deleniti, quam, magnam dolore unde vel, eligendi
                        nulla molestias numquam. Enim, cum porro?</p>
                      <div className="home-block__button-wrap">
                        <a href="#popup_order" className="button popup-link">Order now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="dishes-section" id="blog-point">
              <div className="container">
                <div className="row">
                  <div className="col-xxl-3 col-xl-3 col-lg-6 col-sm-6 col-12 dishes-section__column">
                    <div className="dish-block dish-block_anim-one scroll-animate">
                      <div className="dish-block__image-wrap">
                        <img src="assets/img/dish-section/chicken-paella.png" alt="dish" className="dish-block__image"/>
                      </div>
                      <div className="dish-block__text-wrap">
                        <h4 className="dish-block__headline">Chicken Paella</h4>
                        <p className="dish-block__text">We just don't make and sell food. Good food warms.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-xl-3 col-lg-6 col-sm-6 col-12 dishes-section__column">
                    <div className="dish-block dish-block_anim-two scroll-animate">
                      <div className="dish-block__image-wrap">
                        <img src="assets/img/dish-section/taco-del-mar.png" alt="dish" className="dish-block__image"/>
                      </div>
                      <div className="dish-block__text-wrap">
                        <h4 className="dish-block__headline">Taco Del Mar</h4>
                        <p className="dish-block__text">Taco Del Mar brings the best out of Mexican cuisine with
                          fresh.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-xl-3 col-lg-6 col-sm-6 col-12 dishes-section__column">
                    <div className="dish-block dish-block_anim-three scroll-animate">
                      <div className="dish-block__image-wrap">
                        <img src="assets/img/dish-section/bon-au-pain.png" alt="dish" className="dish-block__image"/>
                      </div>
                      <div className="dish-block__text-wrap">
                        <h4 className="dish-block__headline">Bon Au Pain</h4>
                        <p className="dish-block__text">Bon Au Pain is a pioneer in the healthy fast food scene.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-xl-3 col-lg-6 col-sm-6 col-12 dishes-section__column">
                    <div className="dish-block dish-block_anim-four scroll-animate">
                      <div className="dish-block__image-wrap">
                        <img src="assets/img/dish-section/pizza-hut.png" alt="dish" className="dish-block__image"/>
                      </div>
                      <div className="dish-block__text-wrap">
                        <h4 className="dish-block__headline">Pizza Hut</h4>
                        <p className="dish-block__text">Although the Pizza Hut Menu Prices have tumbled over the
                          years.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="main-proposal-section" id="our-offer-point">
              <div className="container">
                <div className="row">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                    <div className="main-proposal-block scroll-animate">
                      <img src="assets/img/main-proposal-section/burger-king.png" alt="burger"
                           className="main-dish-image"/>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                    <div className="info-wrap scroll-animate">
                      <div className="text-block">
                        <h2 className="text-block__headline">Burger King</h2>
                        <p className="text-block__text">Together with McDonald’s, Burger King has grown to become
                          synonymous with burgers in the US.</p>
                        <div className="price-block text-block__price-block">
                          <p className="price-block__real-price">$6</p>
                          <p className="price-block__old-price">$8</p>
                        </div>
                        <a href="#popup_order" className="button popup-link">Order now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="proposals-section" id="partners-point">
              <div className="container">
                <div className="row">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                    <div className="proposal-block proposal-block_dairy-queen scroll-animate">
                      <div className="proposal-block__wrap">
                        <h3 className="proposal-block__headline">Dairy Queen</h3>
                        <p className="proposal-block__text">Dairy Queen is one of the biggest fast-food.</p>
                        <div className="price-block proposal-block__price-block">
                          <p className="real-price">$4</p>
                          <p className="old-price">$6</p>
                        </div>
                        <a href="#popup_order" className="button proposal-block__button popup-link">Order now</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                    <div className="proposal-block proposal-block_pizza-hut scroll-animate">
                      <div className="proposal-block__wrap">
                        <h3 className="proposal-block__headline">Pizza Hut</h3>
                        <p className="proposal-block__text">Although the Pizza Hut Menu Prices.</p>
                        <div className="price-block proposal-block__price-block">
                          <p className="real-price">$3</p>
                          <p className="old-price">$7</p>
                        </div>
                        <a href="#popup_order" className="button proposal-block__button popup-link">Order now</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                    <div className="proposal-block proposal-block_burger-king scroll-animate">
                      <div className="proposal-block__wrap">
                        <h3 className="proposal-block__headline">Burger King</h3>
                        <p className="proposal-block__text">Together with McDonald’s, Burger King.</p>
                        <div className="price-block proposal-block__price-block">
                          <p className="real-price">$5</p>
                          <p className="old-price">$6</p>
                        </div>
                        <a href="#popup_order" className="button proposal-block__button popup-link">Order now</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                    <div className="proposal-block proposal-block_papa-john scroll-animate">
                      <div className="proposal-block__wrap">
                        <h3 className="proposal-block__headline">Papa John’s</h3>
                        <p className="proposal-block__text">Papa John’s is one of the most popular fast-food.</p>
                        <div className="price-block proposal-block__price-block">
                          <p className="real-price">$6</p>
                          <p className="old-price">$8</p>
                        </div>
                        <a href="#popup_order" className="button proposal-block__button popup-link">Order now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="reviews-section" id="reviews-point">
              <div className="container">
                <div className="row">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                    <div className="picture-block scroll-animate">
                      <div className="picture-wrap">
                        <img src="assets/img/reviews-section/big-circle.svg" alt="circle"
                             className="picture-wrap__image picture-wrap__image_big-circle"/>
                        <img src="assets/img/reviews-section/small-circle.svg" alt="circle"
                             className="picture-wrap__image picture-wrap__image_small-circle"/>
                        <img src="assets/img/reviews-section/lady-photo-one.png" alt="lady-photo"
                             className="picture-wrap__image picture-wrap__image_lady-one"/>
                        <img src="assets/img/reviews-section/lady-photo-two.png" alt="lady-photo"
                             className="picture-wrap__image picture-wrap__image_lady-two"/>
                        <img src="assets/img/reviews-section/lady-photo-three.png" alt="lady-photo"
                             className="picture-wrap__image picture-wrap__image_lady-three"/>
                        <img src="assets/img/reviews-section/man-photo-one.png" alt="man-photo"
                             className="picture-wrap__image picture-wrap__image_man-one"/>
                        <img src="assets/img/reviews-section/man-photo-two.png" alt="man-photo"
                             className="picture-wrap__image picture-wrap__image_man-two"/>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                    <div className="text-wrap scroll-animate">
                      <img src="assets/img/reviews-section/quotes.svg" alt="quotes" className="text-wrap__quotes"/>
                      <p className="text-wrap__text">Thanks a lot for the prompt service. Really appreciate. Excellence
                        taste in Every Bite.Add a joy of best Taste. Foodie Moments.</p>
                      <p className="text-wrap__name">Adele A. McNeill</p>
                      <p className="text-wrap__company">Amirican</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="download-section" id="our-menu-point">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="download-container">
                      <h2 className="download-container__headline scroll-animate">Download our menu</h2>
                      <div className="download-container__button-wrap scroll-animate">
                        <a href="#popup_download" className="button popup-link">Download</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <footer className="main-footer">
            <div className="container">
              <div className="row">
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12">
                  <div className="contacts-block">
                    <a href="#" className="logo-link contacts-block__logo-link">
                      <img src="assets/img/header/logo-1.svg" alt="logo"
                           className="logo-image contacts-block__logo-image"/>
                    </a>
                    <div className="contacts contacts-block__contacts">
                      <a href="mailto:fastfood_usa@gmail.com"
                         className="contacts-block__link contacts-block__link_email">fastfood_usa@gmail.com</a>
                      <a href="www.fastfood_usa.com"
                         className="contacts-block__link contacts-block__link_site"> www.fastfood_usa.com</a>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-3 col-4">
                  <div className="footer-menu">
                    <h5 className="footer-menu__headline">Our menu
                    </h5>
                    <ul className="footer-menu__list">
                      <li className="footer-menu__list-item"><a href="#" className="footer-menu__link">Breakfast</a>
                      </li>
                      <li className="footer-menu__list-item"><a href="#" className="footer-menu__link">Lunce
                      </a></li>
                      <li className="footer-menu__list-item"><a href="#" className="footer-menu__link">Dinner</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-3 col-4">
                  <div className="footer-menu">
                    <h5 className="footer-menu__headline">Information</h5>
                    <ul className="footer-menu__list">
                      <li className="footer-menu__list-item"><a href="#" className="footer-menu__link">About us</a></li>
                      <li className="footer-menu__list-item"><a href="#" className="footer-menu__link">Testimonials</a>
                      </li>
                      <li className="footer-menu__list-item"><a href="#" className="footer-menu__link">Events</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-3 col-4">
                  <div className="footer-menu">
                    <h5 className="footer-menu__headline">Useful Links</h5>
                    <ul className="footer-menu__list">
                      <li className="footer-menu__list-item"><a href="#" className="footer-menu__link">Services</a></li>
                      <li className="footer-menu__list-item"><a href="#" className="footer-menu__link">Support</a></li>
                      <li className="footer-menu__list-item"><a href="#" className="footer-menu__link">Conditions</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12">
                  <div className="social-media">
                    <h5 className="social-media__headline">Social Handles</h5>
                    <div className="link-container">
                      <a href="#" className="link-container__link">
                        <img src="assets/img/footer/fb-icon.svg" alt="fb-icon" className="link-container__icon"/>
                      </a>
                      <a href="#" className="link-container__link">
                        <img src="assets/img/footer/twitter-icon.svg" alt="twitter-icon"
                             className="link-container__icon"/>
                      </a>
                      <a href="#" className="link-container__link">
                        <img src="assets/img/footer/instagram-icon.svg" alt="instagram-icon"
                             className="link-container__icon"/>
                      </a>
                      <a href="#" className="link-container__link">
                        <img src="assets/img/footer/linkedin-icon.svg" alt="linkedin-icon"
                             className="link-container__icon"/>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
          <div className="popup" id="popup_order">
            <div className="popup__body">
              <div className="popup__content">
                <a href="#" className="popup__close close-popup"><img src="assets/img/body/close-icon.png" width="22"
                                                                      height="22" alt="close-cross"
                                                                      className="popup__close-image"/></a>
                <form action="" method="post" name="order-form" className="popup__form">
                  <div className="order-form__block">
                    <label htmlFor="name-field" className="order-form__name-label">Your name</label>
                    <input type="text" id="name-field" className="order-form__name-input"
                           placeholder="Please, insert your name here" required/>
                  </div>
                  <div className="order-form__block">
                    <label htmlFor="phone-field" className="order-form__phone-label">Your phone</label>
                    <input type="text" className="order-form__phone-input" id="phone-field"
                           placeholder="Please, insert your phone here" required/>
                  </div>
                  <button type="submit" className="order-form__button button">Send</button>
                </form>
              </div>
            </div>
          </div>
          <div className="popup" id="popup_download">
            <div className="popup__body">
              <div className="popup__content">
                <a href="#" className="popup__close close-popup"><img src="assets/img/body/close-icon.png" width="22"
                                                                      height="22" alt="close-cross"
                                                                      className="popup__close-image"/></a>
                <form action="" method="post" name="download-form" className="popup__form">
                  <div className="download-form__block">
                    <label htmlFor="email-field" className="download-form__email-label">Your e-mail</label>
                    <input type="email" id="email-field" className="download-form__email-input"
                           placeholder="Please, insert your e-mail here" required/>
                  </div>
                  <button type="submit" className="download-form__button button">Send</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
  )
}

export default App
