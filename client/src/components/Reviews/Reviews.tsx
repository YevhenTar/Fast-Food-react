import './Reviews.scss';

const Reviews = () => {
    return (
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
                            <img src="assets/img/reviews-section/quotes.svg" alt="quotes"
                                 className="text-wrap__quotes"/>
                            <p className="text-wrap__text">Thanks a lot for the prompt service. Really appreciate.
                                Excellence
                                taste in Every Bite.Add a joy of best Taste. Foodie Moments.</p>
                            <p className="text-wrap__name">Adele A. McNeill</p>
                            <p className="text-wrap__company">Amirican</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;