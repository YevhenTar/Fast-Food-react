import './PopupOrder.scss';

const PopupOrder = () => {
    return (
        <div className="popup" id="popup_order">
            <div className="popup__body">
                <div className="popup__content">
                    <a href="#" className="popup__close close-popup"><img src="assets/img/body/close-icon.png"
                                                                          width="22"
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
    );
};

export default PopupOrder;