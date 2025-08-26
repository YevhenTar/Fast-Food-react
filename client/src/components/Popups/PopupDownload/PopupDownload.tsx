import './PopupDownload.scss';

const PopupDownload = () => {
    return (
        <div className="popup" id="popup_download">
            <div className="popup__body">
                <div className="popup__content">
                    <a href="#" className="popup__close close-popup"><img src="assets/img/body/close-icon.png"
                                                                          width="22"
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
    );
};

export default PopupDownload;