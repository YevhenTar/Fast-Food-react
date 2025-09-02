import './Reviews.scss';
import bigCircle from '../../assets/img/reviews-section/big-circle.svg';
import smallCircle from '../../assets/img/reviews-section/small-circle.svg';
import ladyOne from '../../assets/img/reviews-section/lady-photo-one.png';
import ladyTwo from '../../assets/img/reviews-section/lady-photo-two.png';
import ladyThree from '../../assets/img/reviews-section/lady-photo-three.png';
import manOne from '../../assets/img/reviews-section/man-photo-one.png';
import manTwo from '../../assets/img/reviews-section/man-photo-two.png';
import quotes from '../../assets/img/reviews-section/quotes.svg';

const Reviews = () => {
    return (
        <section className="reviews-section" id="reviews-point">
            <div className="container reviews-section__container">
                <div className="picture-block scroll-animate">
                    <div className="picture-wrap">
                        <img src={bigCircle} alt="circle"
                             className="picture-wrap__image picture-wrap__image_big-circle"/>
                        <img src={smallCircle} alt="circle"
                             className="picture-wrap__image picture-wrap__image_small-circle"/>
                        <img src={ladyOne} alt="lady-photo"
                             className="picture-wrap__image picture-wrap__image_lady-one"/>
                        <img src={ladyTwo} alt="lady-photo"
                             className="picture-wrap__image picture-wrap__image_lady-two"/>
                        <img src={ladyThree} alt="lady-photo"
                             className="picture-wrap__image picture-wrap__image_lady-three"/>
                        <img src={manOne} alt="man-photo"
                             className="picture-wrap__image picture-wrap__image_man-one"/>
                        <img src={manTwo} alt="man-photo"
                             className="picture-wrap__image picture-wrap__image_man-two"/>
                    </div>
                </div>
                <div className="text-wrap scroll-animate">
                    <div className="text-wrap__service-block">
                        <img src={quotes} alt="quotes"
                             className="text-wrap__quotes"/>
                        <p className="text-wrap__text">Thanks a lot for the prompt service. Really appreciate.
                            Excellence
                            taste in Every Bite.Add a joy of best Taste. Foodie Moments.</p>
                        <p className="text-wrap__name">Adele A. McNeill</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;